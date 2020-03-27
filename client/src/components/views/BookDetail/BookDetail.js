import React,{useEffect, useState} from 'react'
import axios from 'axios'
import MainImage from '../LandingPage/Section/MainImage'
import BookDetailInfo from './Section/BookDetailInfo'
import Comment from './Section/Comment'
import Favorite from './Section/Favorite'

function BookDetail(props) {

    let bookId = props.match.params.bookId
    const[bookState,setbookState]= useState([])
    const [commentAll,setcommentAll]=useState([])

    const refreshFunction =(newComment)=>{
        setcommentAll(commentAll.concat(newComment))
    }

    useEffect(() => {
        const body={bookId:bookId}
        axios.post('/book/bookInfoDetail',body)
        .then(response=>{
            if(response.data.success){
                const obj = JSON.parse(response.data.body)
                setbookState(obj.item[0])
            }
            else{
                alert('정보조회실패')
            }
        })

        axios.post('/comment/getAllcomment',body)
        .then(response=>{
            if(response.data.success){
                setcommentAll(response.data.commentData)
            }else{
                alert('정보조회실패')
            }
        })

    }, [])

    return (
        <div>
            <MainImage 
             image={bookState.coverLargeUrl}
             title={bookState.title}
             description={bookState.description} />
        <div style={{width:'85%', margin:'1rem auto'}}>

        <div style={{display:'flex', justifyContent:'flex-end'}}>
        <Favorite bookId={bookId}/>
        </div>

        <BookDetailInfo 
        title={bookState.title}
        pubDate={bookState.pubDate}
        priceStandard={bookState.priceStandard}
        saleStatus={bookState.saleStatus}
        categoryName={bookState.categoryName}
        publisher={bookState.publisher}
        author={bookState.author}
        customerReviewRank={bookState.customerReviewRank}
        />
        <div style={{margin:'2rem auto'}}>
        <Comment
        refreshFunction={refreshFunction}
        bookId={props.match.params.bookId}
        comment={commentAll}
        title={bookState.title}
        />


</div>
<br />
        
        <div style={{display:'flex', justifyContent:'center', margin:'2rem'}}>
      
        </div>

        </div>
        </div>
    )
}

export default BookDetail
