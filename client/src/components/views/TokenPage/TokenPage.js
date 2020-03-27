import React,{useState} from 'react'

function LoginPage(props) {
    return (<div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center'
        , width: '100%', height: '100vh'
    }}>
        <form style={{ display: 'flex', flexDirection: 'column' }}
        >
            <label>토큰을 발급중입니다. 발급하면 누군가 쓰겠지!</label>
            <label>(화면이 바뀌지 않으면 그냥 홈으로 가시면 됩니다 ㅠㅠ 수정중..)</label>
            <br />
        </form>
    </div>
    )
}

export default LoginPage
