/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE BUTTONS IN TURNSTILE COMPONENT ************* */
import './styles/moduleConfiguration.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class ModuleConfiguration extends React.Component {
    render() {
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        //console.log(turnstile)
        if(turnstile.data.length === 0 && !isFetching) {
            return (
                <Suspense fallback={<div><Loader /></div>}></Suspense>
            )
        }
        return (
            <section className='configuration'>
                <div className='configuration-options'>
                    <div className='configuration-options__amount'>1</div>
                    <div className='configuration-options__more'>2</div>
                    <div className='configuration-options__summ'>3</div>
                </div>
                <div className='configuration-button'>
                    <div className='configuration-button__icon'></div>
                    <div className='configuration-button__text'>ДОБАВИТЬ ЭТУ КОНФИГУРАЦИЮ</div>
                </div>
            </section>
        )
    }
}
ModuleConfiguration.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleConfiguration);