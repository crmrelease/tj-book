import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/find">도서 검색</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/didbook">내가 평가한 도서</a>
    </Menu.Item>
    <Menu.Item >
      <a href="/tobook">내가 좋아하는 도서</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu