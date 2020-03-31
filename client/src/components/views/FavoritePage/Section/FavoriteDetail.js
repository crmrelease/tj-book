import React, { useEffect, useState } from 'react'
import { Rate, Card } from 'antd';
import { Tabs } from 'antd';
import {Row} from 'antd'
import { Table } from 'antd';

function FavoriteDetail(props) {

    const { TabPane } = Tabs;

    let five_list= []
    let four_list= []
    let three_list= []
    let two_list= []
    let one_list= []

    props.favoriteAll.map(key=>{
        if(key.grade===5){
            console.log(key)
            five_list.push(key)
        }
        if(key.grade===4){
            four_list.push(key)
        }
        if(key.grade===3){
            three_list.push(key)
        }
        if(key.grade===2){
            two_list.push(key)
        }
        if(key.grade===1){
            one_list.push(key)
        }    
    })

    const columns = [
        {
          title: '제목',
          dataIndex:'name'
        },
          {
            title: '작가',
            dataIndex:'author'
          },
        {
          title: '바로가기',
          dataIndex:'bookId',
          render: (itemId) => <a href={`/book/${itemId}`}>도서정보로 이동</a>,
        },
      ];
 

    return (
<div>
<Row gutter={[16,16]}>

    <Tabs type="card" style={{width:"100%"}} >
    <TabPane style={{width:"100%"}} tab="5점짜리 도서" key="1">
    <Card type="card" style={{width:"100%"}} title="5점짜리 도서" >
    {five_list!==null&&
    <Table columns={columns} dataSource={five_list} size="middle" />}
    </Card>    
    </TabPane>

    <TabPane tab="4점짜리 도서" key="2">
    <Card type="inner" title="4점짜리 도서">
    {four_list!==null&&
    <Table columns={columns} dataSource={four_list} size="middle" />}
    </Card>
    </TabPane>

    <TabPane tab="3점짜리 도서" key="3">
    <Card type="inner" title="3점짜리 도서" >
    {three_list!==null&&
    <Table columns={columns} dataSource={three_list} size="middle" />}
    </Card>
    </TabPane>

    <TabPane tab="2점짜리 도서" key="4">
    <Card type="inner" title="2점짜리 도서">
    {two_list!==null&&
    <Table columns={columns} dataSource={two_list} size="middle" />}
    </Card>
    </TabPane>

    <TabPane tab="1점짜리 도서" key="5">
    <Card type="inner" title="1점짜리 도서">
    {one_list!==null&&
    <Table columns={columns} dataSource={one_list} size="middle" />}
     </Card>
    </TabPane>

    </Tabs>

    </Row>

  </div>


    )
}

export default FavoriteDetail