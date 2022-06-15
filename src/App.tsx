import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './global';
import Login from './pages/front/login/index';
import SignUp from './pages/front/signup';
import Habits from './pages/home/habits';

import UserContextProvider from './contexts/userContext';
import Home from './pages/home/index';

export default function App() {


  return (
    <UserContextProvider>
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="*" element={<Login/>}/>
      <Route path="sign-up" element={<SignUp/>}/>
      <Route path="home" element={<Home/>}>
        <Route path="habits" element={<Habits />}/>
        <Route path="today" element={<Habits />}/>
        <Route path="today" element={<Habits />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </UserContextProvider>
  )
} 


