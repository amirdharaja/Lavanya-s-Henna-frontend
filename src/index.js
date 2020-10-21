import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Reducer from './store/reducers/reducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';

const store = createStore(Reducer, applyMiddleware(thunk));


const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
