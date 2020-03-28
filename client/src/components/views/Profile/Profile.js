import React from 'react'
import { Descriptions, Badge } from 'antd';


function Profile() {
    return (
        <div style={{width:'100%', margin: '0'}}>
                <div style={{width:'85%', margin:'2rem auto'}}>
            <h2>{localStorage.getItem('name')}님, 환영합니다</h2>
            <hr />
            <Descriptions title="프로필" layout="vertical" bordered>
    <Descriptions.Item label="이름">{localStorage.getItem('name')}</Descriptions.Item>
    <Descriptions.Item label="이메일">{localStorage.getItem('email')}</Descriptions.Item>
    <Descriptions.Item label="지역">미정</Descriptions.Item>
    <Descriptions.Item label="최애 장르">미정</Descriptions.Item>
    <Descriptions.Item label="최애 작가">미정</Descriptions.Item>
    <Descriptions.Item label="상태">
      <Badge status="processing" text="로그인중" />
    </Descriptions.Item>
    <Descriptions.Item label="유저 분석">
    {localStorage.getItem('name')}님은 xx장르를 가장 선호하고, xx,xx장르에도 관심이 많네요.
    작가의 경우에는 xxx님을 가장 좋아하시고, xxx,xxx님도 좋아하시는군요  
    </Descriptions.Item>
  </Descriptions>,
        

        
        </div>

</div>
    )
}

export default Profile
