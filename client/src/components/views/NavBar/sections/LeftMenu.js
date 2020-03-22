import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">메뉴1(홈)</a>
    </Menu.Item>
    <Menu.Item key="subscription">
      <a href="/subscription">메뉴2</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu