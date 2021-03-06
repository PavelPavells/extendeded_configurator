/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/**
 * Импорт Компонентов-слоев
 */
import Layouts from './containers/Layouts';

/**
 * Импорт Глобального Стора
 */
import store from './store/store';

/**
 * Импорт стилей
 */
import './App.scss';

class App extends React.PureComponent {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/** 
           * Обертка Приложения
           */}
          <div className="wrapper">
            <Layouts />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;