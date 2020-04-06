/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE BUTTONS IN TURNSTILE COMPONENT ************* */
import './styles/moduleBasket.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class ModuleBasket extends React.Component {
    render() {
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        //console.log(this.props.data)
        //console.log(turnstile)
        if(turnstile.data.length === 0 && !isFetching) {
            return (
                <Suspense fallback={<div><Loader /></div>}></Suspense>
            )
        }
        return (
            <section className='basket'>
                <div className='basket-description'>Конфигуратор</div>
                <div className='basket-data'>
                    <div className='basket-data__wrapper'>
                        <div className='basket-data__wrapper-info'>
                            <div className='text'>Товаров:</div>
                            <div className='count'>{turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                        <div className='basket-data__wrapper-info'>
                            <div className='text'>На сумму:</div>
                            <div className='count'>{turnstile.data.page_view.model_price}</div>
                        </div>
                    </div>
                    <div className='basket-more'></div>
                </div>
            </section>
        )
    }
}
ModuleBasket.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleBasket);