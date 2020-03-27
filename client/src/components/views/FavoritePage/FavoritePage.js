import React from 'react'
import { Rate, Card } from 'antd';

function FavoritePage() {
    return (
        <div style={{width:'100%', margin: '0'}}>
        <div style={{width:'85%', margin:'1rem auto'}}>
    <h2>내가 평가한 도서</h2>
    <hr />
    <Card title="내가 평가한 도서">
    <p className="site-card-demo-inner-p">내가 평가한 도서</p>
    <Card type="inner" title="5점짜리 도서" extra={<a href="#">더보기</a>}>
    <Rate value='5' disabled={true}/>
    </Card>
    <Card type="inner" title="4점짜리 도서" extra={<a href="#">더보기</a>}>
    <Rate value='4' disabled={true}/>
    </Card>
    <Card type="inner" title="3점짜리 도서" extra={<a href="#">더보기</a>}>
    <Rate value='3' disabled={true}/>
    </Card>
  </Card>,
    </div>

</div>        
    )
}

export default FavoritePage
