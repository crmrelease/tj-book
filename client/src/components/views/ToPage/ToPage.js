import React,{useEffect, useState} from 'react'
import axios from 'axios'
import MainImage from '../LandingPage/Section/MainImage'
import GridCard from '../Common/GridCard'

function ToPage() {

const [bookInfo,setbookInfo] = useState([])
const[mainBook,setmainBook] = useState(null)

useEffect(() => {
    const body={
        writer:localStorage.getItem('idKey')
    }
    axios.post('/favorite/getfavoriteAll',body)
    .then(response=>{
        if(response.data.success){
            setbookInfo(response.data.favoriteAll)
            console.log(response.data.favoriteAll)
        }else{
            alert('좋아하는 책 정보 소환 실패')
        }
    })

    // let info=[]
    // bookInfo.map((key)=>{
    //     info.push(key.bookId)
    // })
    const test=[246345154,220950289]

    axios.post('/book/bookInfoRandom',test)
    .then(response=>{
        if(response.data.success){
            console.log(response.data)
        }else{
            alert('좋아하는 책 정보 소환 실패')
        }
    })
}, [])
    //         const obj = JSON.parse(response.data.result_info)
    //         const item = obj.item
    //         const bookList =[]
    //         item.map(key=>{
    //           bookList.push(key)
    //         })
    //         setbookInfo(bookList)
    //         setmainBook(bookList[0])
    //     }
    //     else{
    //         console.log(response.data)
    //         alert('정보조회실패')
    //     }
    // })


        return (
        <div style={{width:'100%', margin: '0'}}>
            
            {mainBook!==null&&<MainImage 
                    image={mainBook.coverLargeUrl}
                    title={mainBook.title}
                    description={mainBook.description} 
                />}

                <div style={{width:'85%', margin:'1rem auto'}}>
            <h2>내가 좋아요 누른 책</h2>
            <hr />
            </div>

            <div style={{display:'flex', justifyContent:'center'}}>
            <button onClick> 더 보기</button>
            </div>
        </div>
    )
}

export default ToPage

