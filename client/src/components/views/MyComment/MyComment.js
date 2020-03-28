import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Table } from 'antd';

function MyComment() {

  const [MyComment,setMyComment]= useState([])
  const body={writer:localStorage.getItem('idKey')}

  useEffect(() => {
    axios.post('/comment/getMycomment',body)
    .then(response=>{
        if(response.data.success){
          setMyComment(response.data.commentData)
        }else{
            alert('정보조회실패')
        }
    })
  }, [])
 
    const columns = [
        {
          title: '제목',
          dataIndex:'bookTitle'
        },
        {
          title: '코멘트',
          dataIndex:'content'
        },
        {
          title: '바로가기',
          dataIndex:'bookId',
          render: (bookId) => <a href={`/book/${bookId}`}>도서정보로 이동</a>,
        },
      ];
 
    return (
      <div style={{width:'100%', margin: '0'}}>
     <div style={{width:'85%', margin:'2rem auto'}}>
            <h2>내가 남긴 코멘트</h2>
            <hr/>
            </div>
            <div style={{width:'85%', margin:'1rem auto'}}>
              {MyComment!==null&& 
              <Table columns={columns} dataSource={MyComment} size="middle" />}
     </div>
            
        </div>
    )
}

export default MyComment
