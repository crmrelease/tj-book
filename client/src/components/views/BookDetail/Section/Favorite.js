import React,{useEffect, useState} from 'react'
import { Rate } from 'antd';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Button } from 'antd';


function Favorite(props) {

const [favorite,setfavorite]=useState(0)
const [rate,setrate]=useState("")
const ratelist = ['ㅆㅎㅌㅊ','ㅎㅌㅊ','ㅍㅌㅊ','ㅅㅌㅊ','ㅆㅅㅌㅊ']

useEffect(() => {
    const body={
        writer:localStorage.getItem('idKey'),
        bookId:props.bookId,
    }
    Axios.post('/rate/getrate',body)
    .then(response=>{
        if(response.data.result[0]!=null){
            setrate(response.data.result[0].grade)
        }
    })

    Axios.post('/favorite/getfavorite',body)
    .then(response=>{
        if(response.data.favoritenumber){
            setfavorite(response.data.favoritenumber.length)
        }
    })

}, [])
   
const addRate=(value)=>{
    setrate(value)   
    const body={
            writer:localStorage.getItem('idKey'),
            bookId:props.bookId,
            grade:value.toString()
        }
        Axios.post('/rate/addrate',body)
        .then(response=>{
            if(response.data.success){
                console.log(response.data)
            }else{
                alert('평점 저장 실패')
            }
        })
    }

    const addFavorite=()=>{
        const body={
            writer:localStorage.getItem('idKey'),
            bookId:props.bookId,
        }
        Axios.post('/favorite/addfavorite',body)
        .then(response=>{
            if(response.data.like){
                console.log(response.data)
                setfavorite(favorite+1)
            }else if(response.data.cancel){
                console.log(response.data)
                setfavorite(favorite-1)
            }
            else{
                alert('좋아요 저장 실패')
            }
        })
    }


    return (
        <div>
         <div style={{margin:'1rem auto'}}>
       <a>별점을 주세요!</a> {rate?<Rate value={rate} defaultValue={rate} onChange={addRate} tooltips={ratelist}/>
       :<Rate value={rate} onChange={addRate} tooltips={ratelist}/>}
       </div>
       <div style={{margin:'1rem auto'}}>
       <Button type='Primary' style={{float:'right'}} onClick={addFavorite}>{favorite}명이 이 책을 좋아합니다</Button>       
           </div>     
       </div>
    )
}

export default Favorite
