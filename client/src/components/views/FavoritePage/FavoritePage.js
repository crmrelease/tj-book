import React, { useEffect, useState } from 'react'
import FavoriteDetail from './Section/FavoriteDetail'
import axios from 'axios'

function FavoritePage() {

    const [favoriteAll,setfavoriteAll] = useState([])
    const body={writer:localStorage.getItem('idKey')}
    let info =[]
    let cover =[]
    let zip = (a1, a2) => a1.map((x, i) => [ x, a2[i] ]); 
  
    useEffect(() => {
    
    axios.post('/rate/getrateAll',body)
    .then(response=>{
        if(response.data.success){
            response.data.rateAll.map((key)=>{
                info.push({bookId:key.bookId, grade:key.grade})
            })
        axios.post('/book/bookInfoRandom',info)
        .then(response=>{
        if(response.data.success){
            response.data.result.map(key=>{
                const obj = JSON.parse(key)
                const item = obj.item
                item.map(key=>{
                    cover.push({coverSmallUrl:key.coverSmallUrl, name:key.title})
                  }) 
                }
            )
            let combinedResult = zip(info, cover);
            //setfavoriteAll(combinedResult)

        }else{
            alert('별점매긴 책 정보 소환 실패')
        }
    })
        }else{
            alert('별점매긴 책 리스트 소환 실패')
        }
    })
      }, [])

      

    return (
        <div style={{width:'100%', margin: '0'}}>
        <div style={{width:'85%', margin:'2rem auto'}}>
    <h2>내가 평가한 도서</h2>
    <hr />
        <FavoriteDetail
        name={favoriteAll.name}
        coverSmallUrl={favoriteAll.coverSmallUrl}
        grade={favoriteAll.grade}
        bookId={favoriteAll.bookId}
        />
    </div>

</div>        
    )
}

export default FavoritePage

