import axios from 'axios';

export const GETLIST = 'GETLIST';
export const NEWTASK = 'NEWTASK';
export const DELETETASK = 'DELETETASK';
export const EDITTASK = 'EDITTASK';
export const COMPLETED = 'COMPLETED';


export function getTasks(){
    let url = 'https://practiceapi.devmountain.com/api/tasks';
    let ask = axios.get(url)
    console.log('Request:', ask)
        return {
            type: GETLIST,
            payload: ask
        }
}

export function newTask(title){
    let url = 'https://practiceapi.devmountain.com/api/tasks';
    let fresh = axios.post(url, title)
    console.log('Request', fresh)
    return {
        type: NEWTASK,
        payload: fresh
    }
}

export function deleteTask(id){
    var gone = axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`)
    return {
      type: DELETETASK,
      payload: gone,
    };
  };

export function taskEdited(id, body){
    var edited = axios.patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, body)
    return {
        type: EDITTASK,
        payload: edited
    }
}
export function toggleComplete(id){
    console.log(id)
    var complete = axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`)
    return {
        type: COMPLETED,
        payload: complete
    }
}