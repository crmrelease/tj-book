import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action';

function LoginPage(props) {
    const dispatch = useDispatch()
    const [Email,setEmail] =useState("")
    const [Password,setPassword]= useState("")

    const onEmailHandler=(event)=>{
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler=(event)=>{
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();//새로고침 막아주기
        let body ={
            email:Email,
            password:Password
        }
//loginUser= 액션이름, 여기에 body를 넣을 것, action 폴더에 따로 액션을 다 관리할 것
        dispatch(loginUser(body))
       .then(response=>{
           if(response.payload.loginSucess){
               props.history.push('/')
           } else {
            alert('Error')
        }
       })
    }

    return (<div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center'
        , width: '100%', height: '100vh'
    }}>
        <form style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={onSubmitHandler}
        >
            <label>Email</label>
            <input type="email" value={Email} onChange={onEmailHandler} />
            <label>Password</label>
            <input type="password" value={Password} onChange={onPasswordHandler} />
            <br />
            <button type="submit">
                로긴합니다!
            </button>
        </form>
    </div>
    )
}

export default LoginPage
