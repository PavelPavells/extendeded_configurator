/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE IMAGE IN TURNSTILE COMPONENT ************* */
import './styles/moduleImage.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class ModuleImage extends React.Component {

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
            
            /** ************* MODULE IMAGE ************* */
            <div className='wrapper-photo'>
                <img 
                    src={turnstile.data.page_view.model_main_photo} 
                    className='wrapper-photo__image' 
                    alt='' 
                />
            </div>
        )
    }
}
ModuleImage.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleImage)