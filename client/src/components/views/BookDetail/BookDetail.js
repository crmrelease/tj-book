import React,{useEffect, useState} from 'react'
import axios from 'axios'


function BookDetail(props) {

    let bookId = props.match.params.bookId
    const[bookState,setbookState]= useState([])

    useEffect(() => {
        const body={bookId:bookId}
        axios.post('/book/bookInfoDetail',body)
        .then(response=>{
            if(response.data.success){
                const obj = JSON.parse(response.data.body)
                console.log(obj.item)
                //setbookState(bookList)
            }
            else{
                console.log(response.data)
                alert('정보조회실패')
            }
        })

    }, [])

    return (
        <div style={{width:'85%', margin:'1rem auto'}}>
            
        </div>
    )
}

export default BookDetail
