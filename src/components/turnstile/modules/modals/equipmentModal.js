/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
//import React from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE BUTTONS IN TURNSTILE COMPONENT ************* */
import './equipmentModal.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../../__utils__/Loader/Loader'));

class EquipmentModal extends React.Component {

    /** ************* FETCHING DATA ************* */
    componentDidMount() {
       this.props.fetchDataTurnstile()
    }
    render() {

        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        console.log(this.props.data)
        if(turnstile.data.length === 0 && !isFetching) {
           return <Suspense fallback={<div><Loader /></div>}></Suspense>
        }
        return(
            <div className='modal'>
                <div className='block'></div>
                <div className='block'></div>
                <div className='block'></div>
                <div className='block'></div>
                <div className='block'></div>
                <div className='block'></div>
                <div className='block'></div>
                <div className='block'></div>
            </div>
        )
    }
}
EquipmentModal.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(EquipmentModal)