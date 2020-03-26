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
        const { data } = this.props.mainTurnstile.dataTurnstile;
        //console.log(this.props)
        if(data.length === 0) {
            return (
                <Suspense fallback={<div><Loader /></div>}></Suspense>
            )
        }
        return (
            
            /** ************* MODULE IMAGE ************* */
            <div className='wrapper-photo'>
                <img 
                    src={data.page_view.model_main_photo} 
                    className='wrapper-photo__image' 
                    alt='' 
                />
            </div>
        )
    }
}
ModuleImage.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    mainTurnstile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    mainTurnstile: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleImage)