/** ************* IMPORT DEPENDENCIES ************* */
import React, { lazy } from 'react';
import { connect } from 'react-redux';

/** ************* IMPORT STYLES FOR TURNSTILE COMPONENT ************* */
import './Turnstile.scss';

/** ************* IMPORT MODULES FOR TURNSTILE COMPONENT ************* */
const ModuleImage = lazy(() => import('./Image/moduleImage'));
const ModuleList = lazy(() => import('./List/moduleList'));
const ModuleButtons = lazy(() => import('./Buttons/moduleButtons'));
const ModuleSelectors = lazy(() => import('./Selectors/moduleSelectors'));
const ModuleBasket = lazy(() => import('./Basket/moduleBasket'));
const ModuleConfiguration = lazy(() => import('./Configuration/moduleConfiguration'));
const ModuleEquipment = lazy(() => import ('./Equipment/moduleEquipment'));

class Turnstile extends React.Component {

    render() {
        return (
            <section className='turnstile'>
                <div className='turnstile-top'>
                    <ModuleBasket />
                </div>
                <div className='turnstile-main'>
                    <div className='turnstile-main__slider'>
                        <div className='turnstile-main__slider-image'>
                            <ModuleImage />
                        </div>
                        <div className='turnstile-main__slider-list'>
                            <ModuleList />
                        </div>
                    </div>
                    <div className='turnstile-main__basis'>
                        <div className='turnstile-main__basis-buttons'>
                            <ModuleButtons />
                        </div>
                        <div className='turnstile-main__basis-selectors'>
                            <ModuleSelectors />
                        </div>
                    </div>
                </div>
                <div className='turnstile-configuration'>
                    <ModuleConfiguration />
                </div>
                <div className='turnstile-equipment'>
                    <ModuleEquipment />
                </div>
            </section>
        )
    }
}
export default connect( null, null )(Turnstile)