/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

/** ************* IMPORT __UTILS__ FOR LAYOUT COMPONENT ************* */
import Loader from '../__utils__/Loader/Loader';

/** ************* IMPORT STYLES FOR LAYOUT COMPONENT ************* */
import './Layouts.scss';

/** ************* IMPORT COMPONENTS ************* */
const Main = lazy(() => import('./main/Main'));
const Barrier = lazy(() => import('./barrier/Barrier'));
const Turnstile = lazy(() => import('./turnstile/Turnstile'));

class Layout extends React.Component {

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
export default connect( null, null )(Layout);