/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR TURNSTILE COMPONENT ************* */
import './Turnstile.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../__utils__/Loader/Loader'));

/** ************* IMPORT MODULES FOR TURNSTILE COMPONENT ************* */
const ModuleImage = lazy(() => import('./modules/moduleImage'));
const ModuleList = lazy(() => import('./modules/moduleList'));
const ModuleButtons = lazy(() => import('./modules/moduleButtons'));
const ModuleSelectors = lazy(() => import('./modules/moduleSelectors'));

class Turnstile extends React.Component {

    /** ************* FETCHING DATA ************* */
    componentDidMount() {
        this.props.fetchDataTurnstile();
    }
    render() {
        const { data } = this.props.mainTurnstile.dataTurnstile;
        //console.log(data)
        if(data.length === 0) {
            return (
                <Suspense fallback={<div><Loader /></div>}></Suspense>
            )
        }
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
Turnstile.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    mainTurnstile: PropTypes.object.isRequired 
}
const mapStateToProps = state => ({
    mainTurnstile: state
})
export default connect( mapStateToProps, { fetchDataTurnstile } )(Turnstile)