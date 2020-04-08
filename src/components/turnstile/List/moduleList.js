/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE LIST IN TURNSTILE COMPONENT ************* */
import './moduleList.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class ModuleList extends React.Component {

    /** ************* FETCHING DATA ************* */
    componentDidMount() {
        this.props.fetchDataTurnstile()
    }
    render() {
        
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;

        if(turnstile.data.length === 0 && !isFetching) {
            return (
                <Suspense fallback={<div><Loader /></div>}></Suspense>
            )
        }
        return (
            
            /** ************* MODULE LIST ************* */
            <div className='list'>
                <p className='list-description'>Состав модели:</p>
                {turnstile.data.page_view.model_module_list.map((index, key) => (
                    <div className='list-options' key={index.index}>{index.caption}</div>
                ))}
            </div>
        )
    }
}
ModuleList.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleList)