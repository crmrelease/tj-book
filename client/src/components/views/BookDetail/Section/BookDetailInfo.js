import React from 'react'
import {Descriptions, Badge} from 'antd';

function BookDetailInfo(props) {
    return (
        <Descriptions title="도서정보" bordered>
            <Descriptions.Item label="제목">{props.title}</Descriptions.Item>
            <Descriptions.Item label="발간일">{props.pubDate}</Descriptions.Item>
            <Descriptions.Item label="가격">{props.priceStandard}원</Descriptions.Item>
            <Descriptions.Item label="판매여부">{props.saleStatus}</Descriptions.Item>
            <Descriptions.Item label="장르">{props.categoryName}</Descriptions.Item>
            <Descriptions.Item label="출판사">{props.publisher}</Descriptions.Item>
            <Descriptions.Item label="작가">{props.author}</Descriptions.Item>
            <Descriptions.Item label="인터파크 평점" span={2}>
            <Badge status="processing" text={props.customerReviewRank} /></Descriptions.Item>
        </Descriptions>
    )
}

export default BookDetailInfo
