import { GETLIST, NEWTASK, DELETETASK, EDITTASK, COMPLETED } from '../actions/task_actions';


export default function(state=[], action) {
    console.log('Action Received', action)

    switch (action.type){
            case GETLIST:
            console.log('Action Received', action.payload)
            return [...state, action.payload.data]
            case NEWTASK:
            return [action.payload.data, ...state]
            case DELETETASK:
            return [action.payload.data, ...state]
            case EDITTASK:
            return [action.payload.data, ...state]
            case COMPLETED:
            return [action.payload.data, ...state]
            default:
            return state;
        }
    }


