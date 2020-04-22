/**
 * Импорт зависимостей из NPM
 */
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Импорт экшенов
 */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/**
 * Импорт стилей
 */
import './moduleConfiguration.scss';

/**
 * Импорт прелоадера 
 */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class ModuleConfiguration extends React.PureComponent {

    /** 
     * //
     */
    handleMinusOptions = () => {
        //const { page_view } = this.props.data.turnstile.data;
        //console.log(page_view);
        // some code
    }

    /** 
     * //
     */
    handlePlusOptions = () => {
        //const { page_view } = this.props.data.turnstile.data;
        //console.log(page_view);
        // some code
    }

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
             *  Модуль Конфигурация
             */
            <section className='configuration'>
                <div className='configuration-options'>

                    {/** 
                        * Количество 
                     */}
                    <div className='configuration-options__amount'>
                        <p className='configuration-options__amount-text'>Количество:</p>
                        <span className='configuration-options__amount-value'>{turnstile.data.page_view.model_module_list.length}</span>
                    </div>

                    {/** 
                        * Добавить/Удалить Количетсво 
                     */}
                    <div className='configuration-options__more'>
                        <div onClick={this.handleMinusOptions} className='configuration-options__more-minus'></div>
                        <div onClick={this.handlePlusOptions} className='configuration-options__more-plus'></div>
                    </div>
                    <div className='configuration-options__summ'>
                        <div className='configuration-options__summ-text'>Сумма:</div>
                        <span className='configuration-options__summ-value'>{turnstile.data.page_view.model_price}</span>
                    </div>
                </div>

                {/** 
                    * Кнопка добавления конфигурации 
                */}
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
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleConfiguration);