import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../style';


export default function SignUp(){
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const navigate = useNavigate();
    return(
        <Container>
            <div>
            <h1>Track It</h1>
                <form>
                    <input type="email" placeholder='E-mail' value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                    <input type="text" placeholder='Name' value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}}/>
                    <input type="url" placeholder='Image url' value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                    <input type="password" placeholder='Enter a password' value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}}/>
                    <input type="password" placeholder='Confirm the password' value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}}/>
                    <button type='submit'>Sign In</button>
                    <button onClick={()=>{navigate('/sign-up')}}>Sign Up</button>
                </form>
            </div>
        </Container>
    )
}
