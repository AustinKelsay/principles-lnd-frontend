import {GET_USER, ADD_USER} from './Actions'

type User = {
    id: number
}

const initialState:User = {
    id: 0
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