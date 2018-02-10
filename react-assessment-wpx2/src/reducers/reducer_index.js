import { combineReducers } from 'redux';
import TaskReducer from './reducer_task';


const rootReducer = combineReducers({
    fullList: TaskReducer,
})

export default rootReducer;