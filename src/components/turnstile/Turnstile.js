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

class Turnstile extends React.PureComponent {

    render() {
        return (

            /** ************* TURNSTILE COMPONENT ************* */
            <section className='turnstile'>

                {/** ************* WRAPPER BASKET COMPONENT ************* */}
                <div className='turnstile-basket'>
                    <ModuleBasket />
                </div>
                <div className='turnstile-main'>
                    <div className='turnstile-main__slider'>

                        {/** ************* WRAPPER IMAGE COMPONENT ************* */}
                        <div className='turnstile-main__slider-image'>
                            <ModuleImage />
                        </div>

                        {/** ************* WRAPPER LIST COMPONENT ************* */}
                        <div className='turnstile-main__slider-list'>
                            <ModuleList />
                        </div>
                    </div>
                    <div className='turnstile-main__basis'>

                        {/** ************* WRAPPER BUTTONS COMPONENT ************* */}
                        <div className='turnstile-main__basis-buttons'>
                            <ModuleButtons />
                        </div>

                        {/** ************* WRAPPER SELECTORS COMPONENT ************* */}
                        <div className='turnstile-main__basis-selectors'>
                            <ModuleSelectors />
                        </div>
                    </div>
                </div>

                {/** ************* WRAPPER CONFIGURATION COMPONENT ************* */}
                <div className='turnstile-configuration'>
                    <ModuleConfiguration />
                </div>

                {/** ************* WRAPPER EQUIPMENT COMPONENT ************* */}
                <div className='turnstile-equipment'>
                    <ModuleEquipment />
                </div>
            </section>
            
        )
    }
}
export default connect( null, null )(Turnstile);