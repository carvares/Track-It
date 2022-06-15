import React, { useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import { useContext } from 'react';
import { UserContext } from './../../contexts/userContext';
import { userInfo } from '../../types';

export default function Home(){
    const navigate = useNavigate()
    const {userInfo}: {userInfo: userInfo} = useContext(UserContext)
    useEffect(()=>{
        if(!userInfo.token) return navigate('../')
        navigate('./habits')
    },[])
    return(
        <><Header/>  <Navbar/> <Outlet/></>
    )
}