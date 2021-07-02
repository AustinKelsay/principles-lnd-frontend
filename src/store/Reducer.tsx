import {GET_USER, ADD_USER} from './Actions'

type UserState = {
    user: object;
    }

const initialState = {
    user: {

    }
}

export function Reducer (state:UserState = initialState, action:any) {
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