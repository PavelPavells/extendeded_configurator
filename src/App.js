/** ************* IMPORT DEPENDENCIES ************* */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/** ************* IMPORT COMPONENTS ************* */
import Layouts from './containers/Layouts';

/** ************* IMPORT STORE ************* */
import store from './store/store';

/** ************* IMPORT STYLES FOR APP COMPONENT ************* */
import './App.scss';

class App extends React.PureComponent {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/** ************* WRAPPER-CONFIGURATOR ************* */}
          <div className="wrapper">
            <Layouts />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;