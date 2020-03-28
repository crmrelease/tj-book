import React, { useState } from 'react'
import { Input, Col, Row, Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Axios from 'axios'
import { Table } from 'antd';


function FindBook() {

    const { Option } = Select;
    const [contentValue,setcontentValue]= useState([])
    const [contentCategory,setcontentCategory]= useState("all")
    const [bookList,setbookList] =useState([])
    
    const columns = [
        {
          title: '제목',
          dataIndex:'title'
        },
        {
            title: '장르',
            dataIndex:'categoryName'
          },
          {
            title: '작가',
            dataIndex:'author'
          },
          {
            title: '출판사',
            dataIndex:'publisher'
          },
        {
          title: '바로가기',
          dataIndex:'itemId',
          render: (itemId) => <a href={`/book/${itemId}`}>도서정보로 이동</a>,
        },
      ];
 

    const body ={
        writer:localStorage.getItem('idKey'),
        searchCategory:contentCategory,
        searchContent:contentValue,
    }
  
        const onSubmit =(e)=>{
            e.preventDefault();
            Axios.post('/book/findbookinfo',body)
            .then(response=>{
                if(response.data.success){
                const obj = JSON.parse(response.data.body)
                const item = obj.item
                let bookListresult=[]
                item.map(key=>{
                    bookListresult.push(key)
                })
                setbookList(bookListresult)
                }else{
                    alert('검색정보 조회 실패')
                }
            })
        }
              
    
        const typing = (e)=>{
            setcontentValue(e.currentTarget.value)
        }
        const selecting =(e)=>{
           setcontentCategory(e)
        }

    return (
        <div>
<div style={{width:'100%', margin: '0'}}>
                <div style={{width:'85%', margin:'2rem auto'}}>
            <h2>도서 검색</h2>
            <hr />
           <div>
           <form style={{display:'flex'}} onSubmit={onSubmit}>
      <Select defaultValue="all" label="전체검색" value={Option.value} style={{ width: '30%' }} onChange={selecting}>
        <Option value="title">제목</Option>
        <Option value="author">작가</Option>
        <Option value="publisher">출판사</Option>
        <Option value="all">전체검색</Option>
        <Input.Search style={{ width: '30%' }} />   
      </Select>
      <Input style={{width:'100%',borderRadius:'5px',height:'32px'}}
                onChange={typing}
                value={contentValue}
                placeholder='검색할 항목을 입력하세요' />
    <Button icon={<SearchOutlined />} style={{width:'10%', height:'32px'}} onClick={onSubmit}>검색</Button>
            </form>
         </div>
    
           </div>

            </div>
            <div style={{width:'85%', margin:'1rem auto'}}>

            <div align='center'>
            <div style={{width:'85%', margin:'1rem auto'}}>
            <h2>검색결과</h2>
            </div>
            <div style={{width:'100%', margin:'1rem  auto'}}>
                {bookList!==null&&
              <Table columns={columns} dataSource={bookList} size="middle" />}
     </div>
        </div>

            </div>
          
        </div>    
    )
}

export default FindBook
