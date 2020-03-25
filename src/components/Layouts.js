/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
//import { 
//    
//} from '../../../actions/';

/** ************* IMPORT __UTILS__ FOR LAYOUT COMPONENT ************* */
import Loader from '../__utils__/Loader/Loader';

/** ************* IMPORT STYLES FOR LAYOUT COMPONENT ************* */
import './Layouts.scss';

/** ************* IMPORT COMPONENTS ************* */
const Main = lazy(() => import('./main/Main'));
const Barrier = lazy(() => import('./barrier/Barrier'));
const Turnstile = lazy(() => import('./turnstile/Turnstile'));

class Layout extends React.Component {

    /** ************* HANDLE CHANGE ************* */
    handleChange = event => {
        event.preventDefault();
    }

    render() {
        return(
            <Router>
                <Suspense fallback={<div><Loader /></div>}>
                    <div className="components">
                        <Switch>
                            <Route exact path='/main' component={Main} />
                            <Route exact path='/turnstile' component={Turnstile} />
                            <Route exact path='/barrier' component={Barrier} />
                        </Switch>
                    </div>
                </Suspense>
            </Router>
        )
    }
}
Layout.propTypes = {
    some: PropTypes.object
}
const mapStateToProps = state => ({
    //SOMETHING
})
const mapDispatchToProps = {
    //SOMETHING
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout)