import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordInput from '../../../components/inputs/passwordInput';
import { Container } from '../style';
export default function Login(){
    const [userEmail, setUserEmail] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')

    const navigate = useNavigate();
    return(
        <Container>
            <div>
            <h1>Track It</h1>
                <form>
                    <input type="email" placeholder='E-mail' value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                    <PasswordInput userPassword={userPassword} setUserPassword={setUserPassword} placeholder={"Password"} />
                    <button type='submit'>Sign In</button>
                    <button onClick={()=>{navigate('/sign-up')}}>Sign Up</button>
                </form>
            </div>
        </Container>
    )
}
