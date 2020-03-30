import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import TokenPage from './components/views/TokenPage/TokenPage';
import NavBar from "./components/views/NavBar/NavBar";
import BookDetail from "./components/views/BookDetail/BookDetail";
import ToBook from "./components/views/ToPage/ToPage";
import DidBook from "./components/views/FavoritePage/FavoritePage";
import MyComment from "./components/views/MyComment/MyComment";
import FindBook from "./components/views/FindBook/FindBook";
import Profile from "./components/views/Profile/Profile";
import Auth from './hoc/auth';


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}> 
      <NavBar />
<div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
  <Switch>
          <Route exact path="/" component={Auth(LandingPage,null)}/>
          <Route exact path="/login" component={Auth(LoginPage,false)}/>
          <Route exact path="/join" component={Auth(RegisterPage,false)}/>
          <Route exact path="/book/:bookId" component={Auth(BookDetail,true)}/>
          <Route exact path="/token" component={Auth(TokenPage,false)}/>
          <Route exact path="/tobook" component={Auth(ToBook,true)}/>
          <Route exact path="/didbook" component={Auth(DidBook,true)}/>
          <Route exact path="/mycomment" component={Auth(MyComment,true)}/>
          <Route exact path="/find" component={Auth(FindBook,true)}/>
          <Route exact path="/profile" component={Auth(Profile,true)}/>


          
  </Switch>
</div>
</Suspense>
  );
}

export default App;
