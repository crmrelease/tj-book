import React from 'react'
import {Col} from 'antd'

function GridCard(props) {
    return (
        <Col lg={6} md={8} xs={24}>
                <div style={{position:'relative'}}>
            <a href={`/book/${props.bookId}`}>
            <img style={{width:'100%', height:'320px'}}src={props.image} />
            <div><h2 style={{ color: 'black', fontFamily:'Georgia',fontSize: '1rem'}} align='center'> {props.title} </h2></div>
            </a>
                </div>
        </Col>    
    )
}

export default GridCard
