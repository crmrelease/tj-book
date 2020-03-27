import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import { useSelector} from 'react-redux';
import CommentList from './CommentList'

function Comment(props) {
    const [contentValue,setcontentValue]=useState("")

    const body ={
        writer:localStorage.getItem('idKey'),
        bookId:props.bookId,
        content:contentValue,
        bookTitle:props.title
    }

    const typing = (e)=>{
        setcontentValue(e.currentTarget.value)
    }
    
    const onSubmit =(e)=>{
        e.preventDefault();
        Axios.post('/comment/addComment',body)
        .then(response=>{
            if(response.data.success){
                setcontentValue("")
                props.refreshFunction(response.data.result)
            }
            else{
                alert('코멘트 전달 실패')
            }
        })
    }
    
    return (
        <div>
            <form style={{display:'flex'}} onSubmit={onSubmit}>
                <textarea
                style={{width:'100%',borderRadius:'5px'}}
                onChange={typing}
                value={contentValue}
                placeholder='댓글 여기에 쓰세여'
                />
            <br/>
            <button style={{width:'20%', height:'52px'}} onClick={onSubmit}>댓글등록</button>
            </form>
           
            <br/>
            <p>댓글</p>
            <hr/>
            {props.comment&&props.comment.map((key)=>(
                <CommentList 
                comment={key}/>
            ))}

        </div>
    )
}

export default Comment
