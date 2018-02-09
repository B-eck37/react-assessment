import { GETLIST, NEWTASK, DELETETASK, EDITTASK } from '../actions/task_actions';

// const initialState = {
//     fullList: [],
//     task: {},
// }

export default function(state=[], action) {
    console.log('Action Received', action)

    switch (action.type){
            case GETLIST:
            console.log('Action Received', action.payload)
            return {fullList: action.payload.data, ...state}
            case NEWTASK:
            return {fullList: action.payload, ...state}
            case DELETETASK:
            return {fullList: action.payload, ...state}
            case EDITTASK:
            return {fullList: action.payload}
            default:
            return state;
        }
    }


