/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE LIST IN TURNSTILE COMPONENT ************* */
import './styles/moduleList.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class ModuleList extends React.Component {

    /** ************* FETCHING DATA ************* */
    componentDidMount() {
        this.props.fetchDataTurnstile()
    }
    render() {
        const { data } = this.props.mainTurnstile.dataTurnstile;
        console.log(data)
        if (data.length === 0) {
            return (
                <Loader />
            )
        }
        return (
            <Suspense fallback={<div><Loader /></div>}>
                <div className='list'>
                    <p className='list-description'>Состав модели:</p>
                    {data.page_view.model_module_list.map((index, key) => (
                        <div className='list-options' key={index.index}>{index.caption}</div>
                    ))}
                </div>
            </Suspense>
        )
    }
}
ModuleList.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    mainTurnstile: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleList)