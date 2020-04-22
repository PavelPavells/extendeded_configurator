/**
 * Импорт зависимостей из NPM
 */
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Импорт экшенов
 */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/**
 * Импорт стилей
 */
import './moduleBasket.scss';

/**
 * Импорт прелоадера 
 */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class ModuleBasket extends React.PureComponent {
    render() {
        
        /**
        * Данные из Глобального Стора
        */
        const { turnstile, isFetching } = this.props.data;
        //console.log(turnstile);
        if(turnstile.data.length === 0 && !isFetching) {
            return (
                <Suspense fallback={<div><Loader /></div>}></Suspense>
            )
        }
        return (

            /** 
             *  Модуль Корзина
             */
            <section className='basket'>

                {/** 
                 *Описание 
                 */}
                <p className='basket-description'>Конфигуратор</p>

                {/**
                 *Информация о корзине
                 */}
                <div className='basket-data'>
                    <Link to='/turnstile/offer' className='basket-data__wrapper'>
                        <div className='basket-data__wrapper-info'>
                            <div className='text'>Товаров:</div>
                            <div className='count'>{turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                        <div className='basket-data__wrapper-info'>
                            <div className='text'>На сумму:</div>
                            <div className='count'>{turnstile.data.page_view.model_price}</div>
                        </div>
                    </Link>
                    <div className='basket-more'></div>
                </div>
            </section>
        )
    }
}
ModuleBasket.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleBasket);