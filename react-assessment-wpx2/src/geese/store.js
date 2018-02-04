import { createStore } from 'redux';
import reducer from './reducer';

export default createStore(
    reducer, 
    windw.__REDUX_DEVTOOLS_EXTENSION__&&
    windw.__REDUX_DEVTOOLS_EXTENSION__()
);