import React,{useState} from 'react'

function LoginPage(props) {
    return (<div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center'
        , width: '100%', height: '100vh'
    }}>
        <form style={{ display: 'flex', flexDirection: 'column' }}
        >
            <label>토큰을 발급중입니다. 발급하면 누군가 쓰겠지!</label>
            <br />
        </form>
    </div>
    )
}

export default LoginPage
