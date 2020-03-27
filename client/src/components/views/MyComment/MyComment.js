import React,{useEffect, useState} from 'react'
import axios from 'axios'

function MyComment() {


    return (
      <div style={{width:'100%', margin: '0'}}>
     <div style={{width:'85%', margin:'1rem auto'}}>
            <h2>내가 남긴 감상평</h2>
            
            </div>

            <div style={{display:'flex', justifyContent:'center'}}>
            <button onClick> 더 보기</button>
            </div>
        </div>
    )
}

export default MyComment
