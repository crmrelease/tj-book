import axios from 'axios';
import {LOGIN_USER,JOIN_USER,AUTH_USER,TOKEN_USER} from './types'

export function loginUser(dataToSubmit){
    const request =  axios.post('/auth/login',dataToSubmit).then(response=>response.data)
    //서버에서 받은 데이터 저장
    //const token_request = axios.post('/token',dataToSubmit).then(response=>response.data)
    return{
        type:LOGIN_USER,
        payload:request,
        //token:token_request 
        //원래 이렇게 리턴해야함. 타입이 앞으로 많아질거기 떄문에 따로 떼자
    }
}
export function tokenUser(dataToSubmit){
        const request = axios.post('/token',dataToSubmit).then(response=>response.data)
        return{
            type:TOKEN_USER,
            payload:request
        }
}


export function joinUser(dataToSubmit){
    const request =  axios.post('/auth/join',dataToSubmit).then(response=>response.data)
    return{
        type:JOIN_USER,
        payload:request
    }
}


export function auth(){
    const request =  axios.get('/token/userInfo').then(response=>response.data)
    return{
        type:AUTH_USER,
        payload:request
    }
}