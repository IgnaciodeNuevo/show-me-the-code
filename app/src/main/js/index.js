import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';
import store from './store/store';

/*
While creating a store, we will inject the initial state we received from the server to our app.
 */
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <HashRouter>
          <Component />
        </HashRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('reactbody'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line
    const nextApp = require('./app').default;
    render(nextApp);
  });
}

// module.hot.accept('./reducers', () => {
//   // eslint-disable-next-line
//   const nextRootReducer = require('./reducers/index');
//   store.replaceReducer(nextRootReducer);
// });
