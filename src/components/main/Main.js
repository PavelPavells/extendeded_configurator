/**
 * Импорт зависимостей из NPM
 */
import React, { Suspense, lazy } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Импорт экшенов
 */
import { fetchDataMain } from '../../actions/dataMainActions';

/**
 * Импорт фотографий
 */
import barrier_photo from '../../images/barrier_main.png';
import turnstile_photo from '../../images/turnstile_main.png';

/**
 * Импорт стилей
 */
import './Main.scss';

/**
 * Импорт прелоадера 
 */
const Loader = lazy(() => import('../../__utils__/Loader/Loader'));

class Main extends React.PureComponent {

    /**
     * Запрос данных
     */
    componentDidMount() {
        this.props.fetchDataMain();
    }

    render() {
        /**
        * Данные из Глобального Стора
        */
        const { main, isFetching } = this.props.data;
        //console.log(main);
        if (main.data.length === 0 && !isFetching) {
            return (
                <Suspense fallback={<div><Loader /></div>}></Suspense>
            )
        }
        return (
            /**
            * Компонент Main
            */
            <section className='main'>
                <p className='main-header'>
                    {main.data.page_view.caption}
                </p>
                <p className='main-description'>
                    Выберите необходимую категорию оборудования
                </p>

                <div className='main-blocks'>

                    {/**
                    * Шлагбаумы
                    */}
                    {main.data.page_view.device_buttons.slice(0, 1).map((index, key) => {
                        return (
                            <NavLink to='/main' key={index.index} className='main-block'>
                                <div className='main-block__image'>
                                    <img src={barrier_photo} alt='' />
                                </div>
                                <div className='main-block__text'>
                                    <p className='main-block__text-header'>
                                        {index.caption}
                                    </p>
                                    <p className='main-block__text-description'>
                                        Шлагбаумы и оборудование контроля проезда CARDDEX позволяют сформировать гибкие системы допуска, 
                                        учета и контроля проезда автотранспортных средств с развитой инфраструктурой
                                    </p>
                                </div>
                            </NavLink>
                        )
                    })}

                    {/**
                    * Турникеты
                    */}
                    {main.data.page_view.device_buttons.slice(1, 2).map((index, key) => {
                        return (
                            <NavLink to='/turnstile' key={index.index} className='main-block'>
                                <div className='main-block__image'>
                                    <img src={turnstile_photo} alt='' />
                                </div>
                                <div className='main-block__text'>
                                    <p className='main-block__text-header'>
                                        {index.caption}
                                    </p>
                                    <p className='main-block__text-description'>
                                        Турникеты и электронные проходные CARDDEX предоставляют широкий выбор средств, 
                                        методов и организации контроля доступа на объекты, 
                                        требующие наличия пропускной системы и учета времени посещений
                                    </p>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </section>
        )
        
    }
}
Main.propTypes = {
    fetchDataMain: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    main: PropTypes.object,
    isFetching: PropTypes.bool
}
const mapStateToProps = state => ({
    data: state
})
export default connect( mapStateToProps, { fetchDataMain } )(Main);