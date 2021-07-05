import {GET_USER, ADD_USER} from './Actions'

type User = {
    admin: number | null,
    cert: string,
    host: string,
    id: number,
    macaroon: string,
    password: string,
    pubkey: string,
    username: string,
}


const initialState:User = {
    admin: 0,
    cert: '',
    host: '',
    id: 0,
    macaroon: '',
    password: '',
    pubkey: '',
    username: '',
}

export function Reducer (state:any = initialState, action:any) {
    switch(action.type) {
        case GET_USER: {
            return state
        }
        case ADD_USER: {
            console.log(action.payload)
            return {state: action.payload}
        }
        default: return state;
    }
}