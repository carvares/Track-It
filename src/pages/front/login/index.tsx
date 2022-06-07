import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../style';
export default function Login(){
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const navigate = useNavigate();
    return(
        <Container>
            <div>
            <h1>Track It</h1>
                <form>
                    <input type="email" placeholder='E-mail' value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                    <input type="text" placeholder='Password' value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}}/>
                    <button type='submit'>Sign In</button>
                    <button onClick={()=>{navigate('/sign-up')}}>Sign Up</button>
                </form>
            </div>
        </Container>
    )
}
