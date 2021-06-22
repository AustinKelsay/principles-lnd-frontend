import {GET_USER, ADD_USER} from './Actions'

const initialState = {
    user: {}
}

export function Reducer (state = initialState, action:any) {
    switch(action.type) {
        case GET_USER: {
            return state.user
        }
        case ADD_USER {
            return {...state, user: action.apyload}
        }
        default: return state;
    }
}