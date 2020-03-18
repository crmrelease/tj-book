import React,{useEffect} from 'react'
import axios from 'axios'


function LandingPage(props) {
    
    useEffect(()=>{
        axios.get('/api/hello')
        .then(response=>console.log(response.data))    
    },[])

    const onClickHandler =()=>{
        axios.get('auth/logout').then(response=>{
                console.log(response.data)
                if(response.data.logoutSucess){
                    props.history.push("/login")
                }else{
                    alert('로그아웃이 실패')
                }
        })
    }

    return (
        <div>
            LandingPage
            <button onClick={onClickHandler}>로그아웃</button>
        </div>
    )
}

export default LandingPage
