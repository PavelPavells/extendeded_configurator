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
import './moduleImage.scss';

/**
 * Импорт прелоадера 
 */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class ModuleImage extends React.PureComponent {

    /**
    * Запрос данных
    */
    componentDidMount() {
        this.props.fetchDataTurnstile();
    }
    render() {
        
        /**
        * Данные из Глобального Стора
        */
        const { turnstile, isFetching } = this.props.data;
        if (turnstile.data.length === 0 && !isFetching) {
            return <Suspense fallback={<div><Loader /></div>}></Suspense>
        }
        return (
            
            /** 
             *  Модуль Изображение
             */
            <div className='image'>
                <img 
                    src={turnstile.data.page_view.model_main_photo} 
                    className='image__turnstile' 
                    alt='' 
                />
            </div>
        )
    }
}
ModuleImage.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleImage);