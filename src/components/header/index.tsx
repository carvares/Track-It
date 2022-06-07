import  React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from './style';

export default function Header(){

    return(
        <HeaderStyle>
            <Link to={'/home'}><h1>Track It</h1></Link>
            <div>
                <p>name</p>
                <img src="https://webbin.com.br/wp-content/uploads/2019/11/rick-morty-5.jpg" alt="user img" />
            </div>
        </HeaderStyle>
    )
}