/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataMain } from '../../actions/dataMainActions';

/** ************* IMPORT PHOTOS ************* */
import barrier_photo from '../../images/barrier_main.png';
import turnstile_photo from '../../images/turnstile_main.png';

/** ************* IMPORT STYLES FOR MAIN COMPONENT ************* */
import './Main.scss';

/** ************* IMPORT __UTILS__ FOR MAIN COMPONENT ************* */
const Loader = lazy(() => import('../../__utils__/Loader/Loader'));

class Main extends React.Component {

    /** ************* FETCHING DATA ************* */
    componentDidMount() {
        this.props.fetchDataMain()
    }

    render() {
        const { data } = this.props.dataMain.dataMain;
        //console.log(this.props)
        if (data.length === 0) {
            return (
                <Suspense fallback={<div><Loader /></div>}></Suspense>
            )
        }
        return (
            /** ****************** MAIN BLOCK ****************** */
            <section className='main'>
                <p className='main-header'>
                    {data.page_view.caption}
                </p>
                <p className='main-description'>
                    Выберите необходимую категорию оборудования
                </p>

            {/** ****************** MAIN WRAPPER BLOCK ****************** */}
                <div className='main-wrapper-blocks'>
                    {data.page_view.device_buttons.slice(0, 1).map((index, key) => {
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
                    {data.page_view.device_buttons.slice(1, 2).map((index, key) => {
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
    dataMain: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    dataMain: state
})
export default connect( mapStateToProps, { fetchDataMain } )(Main);