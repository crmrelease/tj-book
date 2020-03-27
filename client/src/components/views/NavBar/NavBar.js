import React, { useState } from 'react';
import LeftMenu from './sections/LeftMenu';
import RightMenu from './sections/RightMenu';
import { Drawer, Button, icon } from 'antd';
import './sections/NavBar.css';
import { BrowserRouter } from 'react-router-dom';

const logo = require('../../../asset/logo.png')

//const logo = require('../../../assets/youtube_logo_download_sns.png')

function NavBar() {
    const [visible, setVisible] = useState(false)
  
    const showDrawer = () => {
      setVisible(true)
    };
  
    const onClose = () => {
      setVisible(false)
    };
  
    return (
      
      <nav className="menu" style={{ position: 'fixed', zIndex: 1, width: '100%', height:'10%' }}>
        <div className="menu__logo">
          <a href="/" ><img src={logo} style={{width:'140%'}}/></a>
        </div>
        <div className="menu__container">
        <BrowserRouter>
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={showDrawer}
          >
            <icon type="align-right" />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu mode="inline" />
            <RightMenu mode="inline" />
          </Drawer>
          </BrowserRouter>
        </div>
      </nav>
    )
  }
  
  export default NavBar