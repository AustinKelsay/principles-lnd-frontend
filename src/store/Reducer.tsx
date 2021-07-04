import {GET_USER, ADD_USER} from './Actions'

const initialState = {
    user: {
        id: null
    }
}

export function Reducer (state:any = initialState, action:any) {
    switch(action.type) {
        case GET_USER: {
            return state.user
        }
        case ADD_USER: {
            console.log(action.payload)
            return {...state, user: action.payload}
        }
        default: return state;
    }
}