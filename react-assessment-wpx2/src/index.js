import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {HashRouter as HR} from 'react-router-dom';
import App from './App';
import reducers from './reducers/reducer_index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <HR>
    <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>
    </HR>
, document.getElementById('root'));
// registerServiceWorker();
