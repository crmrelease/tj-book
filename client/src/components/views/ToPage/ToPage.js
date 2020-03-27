import React,{useEffect, useState} from 'react'
import axios from 'axios'
import MainImage from '../LandingPage/Section/MainImage'
import GridCard from '../Common/GridCard'
import {Row} from 'antd'

function ToPage() {

const[bookInfo,setbookInfo]= useState([])
const[mainBook,setmainBook] = useState(null)

useEffect(() => {
    const body={
        writer:localStorage.getItem('idKey')
    }

    axios.post('/favorite/getfavoriteAll',body)
    .then(response=>{
        if(response.data.success){
            let info =[]
            response.data.favoriteAll.map((key)=>{
                info.push(key.bookId)
            })
        axios.post('/book/bookInfoRandom',info)
        .then(response=>{
        if(response.data.success){
            let bookList =[]
            response.data.result.map(key=>{
                const obj = JSON.parse(key)
                const item = obj.item
                item.map(key=>{
                    bookList.push(key)
                  }) 
                }
            )
            setbookInfo(bookList)
            setmainBook(bookList[0])
        }else{
            alert('좋아하는 책 정보 소환 실패')
        }
    })
        }else{
            alert('좋아하는 책 리스트 소환 실패')
        }
    })

}, [])
             

        return (
        <div style={{width:'100%', margin: '0'}}>
                <div style={{width:'85%', margin:'1rem auto'}}>
            <h2>내가 좋아하는 도서</h2>
            <hr />
            <Row gutter={[16,16]}>
            {bookInfo&& bookInfo.map((movie_key,index)=>(
                    <React.Fragment key={index}>
                        <GridCard 
                        image={movie_key.coverLargeUrl}
                        title={movie_key.title}
                        bookId={movie_key.itemId}
                        />
                    </React.Fragment>
            ))}
        </Row>
            </div>

        </div>
    )
}

export default ToPage

