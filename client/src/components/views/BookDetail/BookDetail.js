import React,{useEffect, useState} from 'react'
import axios from 'axios'
import MainImage from '../LandingPage/Section/MainImage'
import BookDetailInfo from './Section/BookDetailInfo'
import Comment from './Section/Comment'

function BookDetail(props) {

    let bookId = props.match.params.bookId
    const[bookState,setbookState]= useState([])
    const [commentAll,setcommentAll]=useState([])

    useEffect(() => {
        const body={bookId:bookId}
        axios.post('/book/bookInfoDetail',body)
        .then(response=>{
            if(response.data.success){
                const obj = JSON.parse(response.data.body)
                console.log(obj.item)
                setbookState(obj.item[0])
            }
            else{
                console.log(response.data)
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
        bookId={props.match.params.bookId}
        comment={commentAll}
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
