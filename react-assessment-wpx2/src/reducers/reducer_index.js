import { combineReducers } from 'redux';
import TaskReducer from './reducer_task';


const rootReducer = combineReducers({
    fullList: TaskReducer,
    // newTask: NewReducer
})

export default rootReducer;