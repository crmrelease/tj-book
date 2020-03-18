import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {joinUser} from '../../../_actions/user_action';


function RegisterPage(props) {
    
    const dispatch = useDispatch()
    const [Email,setEmail] =useState("")
    const [Name,setName]= useState("")
    const [Password,setPassword]= useState("")
    const [confirmPassword,setconfirmPassword]= useState("")

    const onNameHandler=(event)=>{
        setName(event.currentTarget.value)
    }
    const onEmailHandler=(event)=>{
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler=(event)=>{
        setPassword(event.currentTarget.value)
    }   
    const onconfirmPasswordHandler=(event)=>{
        setconfirmPassword(event.currentTarget.value)
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        if(Password!==confirmPassword){
            return alert('잘못친듯')
        }
        let body ={
            name:Name,
            email:Email,
            password:Password
        }
        dispatch(joinUser(body))
       .then(response=>{
           console.log(response.payload)
           if(response.payload.success){
               props.history.push('/login')
           } else {
            alert('Error')
        }
       })
    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                
                <label>Name</label>
                <input type="name" value={Name} onChange={onNameHandler} />

                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>confirmPassword</label>
                <input type="password" value={confirmPassword} onChange={onconfirmPasswordHandler} />
                <br />
                <button type="submit">
                    가입합니다!
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
