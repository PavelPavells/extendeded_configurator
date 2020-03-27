/** ************* IMPORT DEPENDENCIES ************* */
import React, { lazy } from 'react';
import { connect } from 'react-redux';

/** ************* IMPORT STYLES FOR TURNSTILE COMPONENT ************* */
import './Turnstile.scss';

/** ************* IMPORT MODULES FOR TURNSTILE COMPONENT ************* */
const ModuleImage = lazy(() => import('./modules/moduleImage'));
const ModuleList = lazy(() => import('./modules/moduleList'));
const ModuleButtons = lazy(() => import('./modules/moduleButtons'));
const ModuleSelectors = lazy(() => import('./modules/moduleSelectors'));

class Turnstile extends React.Component {

    render() {
        return (
            <section className='turnstile'>
                <div className='slider'>
                    <div className='slider-image'>
                        <ModuleImage />
                    </div>
                    <div className='slider-list'>
                        <ModuleList />
                    </div>
                </div>
                <div className='basis'>
                    <div className='basis-buttons'>
                        <ModuleButtons />
                    </div>
                    <div className='basis-selectors'>
                        <ModuleSelectors />
                    </div>
                </div>
            </section>
        )
    }
}
export default connect( null, null )(Turnstile)