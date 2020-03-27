import React,{useEffect, useState} from 'react'
import axios from 'axios'
import MainImage from './Section/MainImage'
import GridCard from '../Common/GridCard'
import {Row} from 'antd'

function LandingPage(props) {
    
    const[bookState,setbookState]= useState([])
    const[mainBook,setmainBook] = useState(null)

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
            query:'어린왕자'
        }
        loadItemFun(body)
    },[])

    const moreItem =() =>{
        const body={
            query:'오렌지나무'
        }
      moreItemFun(body)
    }

    const onClickHandler =()=>{
        axios.get('auth/logout').then(response=>{
                console.log(response.data)
                if(response.data.logoutSucess){
                    localStorage.clear()
                    props.history.push("/login")
                }else{
                    alert('로그아웃이 실패')
                }
        })
    }

    return (
        <div style={{width:'100%', margin: '0'}}>

            {mainBook!==null&&<MainImage 
                    image={mainBook.coverLargeUrl}
                    title={mainBook.title}
                    description={mainBook.description} 
                />}
            
            <div style={{width:'85%', margin:'1rem auto'}}>
            <h2>추천하는 도서</h2>
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
            <button onClick={onClickHandler}>로그아웃</button>
        </div>
    )
}

export default LandingPage
