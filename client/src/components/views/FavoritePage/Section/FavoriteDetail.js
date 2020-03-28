import React, { useEffect, useState } from 'react'
import { Rate, Card } from 'antd';
import GridCard from '../../Common/GridCard';

function FavoriteDetail(props) {
    const[bookRate1,setbookRate1]= useState([])
    const[bookRate2,setbookRate2]= useState([])
    const[bookRate3,setbookRate3]= useState([])
    const[bookRate4,setbookRate4]= useState([])
    const[bookRate5,setbookRate5]= useState([])
    
    return (
        <div>
<Card title="내가 평가한 도서">
<p className="site-card-demo-inner-p">내가 평가한 도서</p>
<Card type="inner" title="5점짜리 도서" extra={<a href="#">더보기</a>}>
<GridCard 

/>
</Card>
<Card type="inner" title="4점짜리 도서" extra={<a href="#">더보기</a>}>
<GridCard

/>
</Card>
<Card type="inner" title="3점짜리 도서" extra={<a href="#">더보기</a>}>
<GridCard

/>
</Card>
<Card type="inner" title="2점짜리 도서" extra={<a href="#">더보기</a>}>
<GridCard

/>
</Card>
<Card type="inner" title="1점짜리 도서" extra={<a href="#">더보기</a>}>
<GridCard
/>
</Card>
</Card>
    </div>

    )
}

export default FavoriteDetail