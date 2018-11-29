import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './components/App';
import NotFound from './components/NotFound';

import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// declare store
const store = createStore(rootReducer);
console.log('store1', store);
store.subscribe(() => console.log('store2', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
