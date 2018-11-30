import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './components/App';
import NotFound from './components/NotFound';
import TvShow from './components/TvShow';

import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store: ', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="tv-show" component={TvShow} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
