import React, { useEffect, useState } from 'react'
import { Rate, Card } from 'antd';
import GridCard from '../../Common/GridCard';
import { Tabs } from 'antd';
import {Row} from 'antd'

function FavoriteDetail(props) {

    const { TabPane } = Tabs;

    let five_list= []
    let four_list= []
    let three_list= []
    let two_list= []
    let one_list= []

    props.favoriteAll.map(key=>{
        if(key.grade==5){
            five_list.push(key)
        }
        if(key.grade==4){
            four_list.push(key)
        }
        if(key.grade==3){
            three_list.push(key)
        }
        if(key.grade==2){
            two_list.push(key)
        }
        if(key.grade==1){
            one_list.push(key)
        }    
    })
    console.log(five_list)
    console.log(four_list)
    console.log(three_list)
    console.log(two_list)
    console.log(one_list)

    
    return (
<div>
<Row gutter={[16,16]}>

    <Tabs type="card">
    <TabPane tab="5점짜리 도서" key="1">
    <Card type="card" title="5점짜리 도서" >
    {five_list&&five_list.map((key)=>(<GridCard 
    bookId={key.bookId} image={key.coverLargeUrl} title={key.name}
    />))}
    </Card>    
    </TabPane>

    <TabPane tab="4점짜리 도서" key="2">
    <Card type="inner" title="4점짜리 도서">
    {four_list&&four_list.map((key)=>(<GridCard 
    bookId={key.bookId} image={key.coverLargeUrl} title={key.name}
    />))}
    </Card>
    </TabPane>

    <TabPane tab="3점짜리 도서" key="3">
    <Card type="inner" title="3점짜리 도서" >
    {three_list&&three_list.map((key)=>(<GridCard 
    bookId={key.bookId} image={key.coverLargeUrl} title={key.name}
    />))}
    </Card>
    </TabPane>

    <TabPane tab="2점짜리 도서" key="4">
    <Card type="inner" title="2점짜리 도서">
    {two_list&&two_list.map((key)=>(<GridCard 
    bookId={key.bookId} image={key.coverLargeUrl} title={key.name}
    />))}
    </Card>
    </TabPane>

    <TabPane tab="1점짜리 도서" key="5">
    <Card type="inner" title="1점짜리 도서">
    {one_list&&one_list.map((key)=>(<GridCard 
    bookId={key.bookId} image={key.coverLargeUrl} title={key.name}
    />))}
    </Card>
    </TabPane>

    </Tabs>

    </Row>

  </div>


    )
}

export default FavoriteDetail