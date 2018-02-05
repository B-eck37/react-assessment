const initalState = {
    todo: {
        task: '',
        details: '',
        completed: false,
    },
    fullList: [],
}

const ADDTOLIST = 'ADDTOLIST';

export default function reducer(state=initialState, action){
    switch (action.type){
            case ADDTOLIST:
            return {...state, todo: action.payload}
    }
}

