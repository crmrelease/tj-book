import React,{useEffect, useState} from 'react'
import axios from 'axios'
import MainImage from './Section/MainImage'
import GridCard from '../Common/GridCard'
import {Row} from 'antd'
import { useSelector } from "react-redux";


function LandingPage(props) {
    
    const[bookState,setbookState]= useState([])
    const[mainBook,setmainBook] = useState(null)
    const user = useSelector(state => state.user)

    const loadItemFun=(body)=>{
        axios.post('/book/bookInfo',body)
        .then(response=>{
            if(response.data.success){
                const obj = JSON.parse(response.data.body)
                const item = obj.item
                const bookList =[]
                item.map(key=>{
                  bookList.push(key)
                })
                setbookState(bookList)
                console.log(bookList)
                setmainBook(bookList[5])
            }
            else{
                console.log(response.data)
                alert('정보조회실패')
            }
        })
    }

    const moreItemFun =(body)=>{
        axios.post('/book/bookInfo',body)
        .then(response=>{
            if(response.data.success){
                const obj = JSON.parse(response.data.body)
                const item = obj.item
                const bookList =[]
                item.map(key=>{
                    bookList.push(key)
                })
                setbookState([...bookState,...bookList])
            }
            else{
                console.log(response.data)
                alert('정보조회실패')
            }
        })
    }


    useEffect(()=>{
        const body={
            query:'베스트셀러'
        }
        loadItemFun(body)
    },[])

    const moreItem =() =>{
        const body={
            query:'올해의'
        }
      moreItemFun(body)
    }

    return (
        <div style={{width:'100%', margin: '0'}}>

            {mainBook!==null&&<MainImage 
                    image={mainBook.coverLargeUrl}
                    title={mainBook.title}
                />}
            
            <div style={{width:'85%', margin:'1rem auto'}}>
            <h2>이런 책들 어때요?</h2>
            <hr />

        <Row gutter={[16,16]}>
            {bookState&& bookState.map((movie_key,index)=>(
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
            
            <div style={{display:'flex', justifyContent:'center'}}>

                <button onClick={moreItem}> 더 보기</button>
            </div>
        </div>
    )
}

export default LandingPage
