import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware,combineReducers } from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import userReducer from './redux/actions/userReducer';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [logger];

const rootReducer = combineReducers({
userReducer
});

const store = createStore(rootReducer, composeEnhances(applyMiddleware(...middlewares)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.register();