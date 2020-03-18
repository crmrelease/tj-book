import {LOGIN_USER, TOKEN_USER} from '../_actions/types'
import {JOIN_USER} from '../_actions/types'
import {AUTH_USER} from '../_actions/types'


export default function(state={},action){
    switch(action.type){
        case LOGIN_USER:
            return {...state,loginSuccess:action.payload}
            break;
        case TOKEN_USER:
            return {...state,tokenSuccess:action.payload}
            break;
        case JOIN_USER:
            return {...state,joinSuccess:action.payload}
            break;
        case AUTH_USER:
            return {...state,userData:action.payload}
            break;
        default:
            return state;
        }
}
