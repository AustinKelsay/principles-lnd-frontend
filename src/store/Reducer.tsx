import {GET_USER, ADD_USER} from './Actions'

const initialState = {
    user: {
        id: 0
    }
}

export function Reducer (state:any = initialState, action:any) {
    switch(action.type) {
        case GET_USER: {
            return state.user
        }
        case ADD_USER: {
            return {...state, user: action.apyload}
        }
        default: return state;
    }
}