import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">도서 검색</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/didbook">내가 읽은 책</a>
    </Menu.Item>
    <Menu.Item >
      <a href="/tobook">내가 읽고 싶은 책</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu