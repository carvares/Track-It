import  React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from './style';
import { UserContext } from './../../contexts/userContext';
import { userInfo } from '../../types';

export default function Header(){
 const {userInfo}: {userInfo: userInfo} = useContext(UserContext)
 console.log('header',userInfo) 
 const {email, userName, imgUrl,token } = userInfo
    return(
        <HeaderStyle>
            <Link to={'/home'}><h1>Track It</h1></Link>
            <div>
                <p>{userName}</p>
                <img src={imgUrl} alt="user img" />
            </div>
        </HeaderStyle>
    )
}