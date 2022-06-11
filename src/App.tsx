import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './global';
import Login from './pages/front/login/index';
import SignUp from './pages/front/signup';
import Habits from './pages/home/habits';
import Header from './components/header/index';
import Navbar from './components/navbar/index';

export default function App() {


  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="*" element={<Login/>}/>
      <Route path="sign-up" element={<SignUp/>}/>
      <Route path="home" element={<><Header/>  <Navbar/> <Outlet/></>}>
        <Route path="habits" element={<Habits />}/>
        <Route path="today" element={<Habits />}/>
        <Route path="today" element={<Habits />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
} 


