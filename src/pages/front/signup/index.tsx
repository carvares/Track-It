import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import PasswordInput from '../../../components/inputs/passwordInput';
import { Container } from '../style';

import 'react-toastify/dist/ReactToastify.css';

export default function SignUp(){
    const [userEmail, setUserEmail] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [imgUrl, setImgUrl] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const notify = () =>  toast.info('opa, foi!',{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true
    })

    const navigate = useNavigate();

    function submitForm(event: React.FormEvent<HTMLFormElement>){
        event?.preventDefault()
        notify()
    }

    return(
        <Container userPassword={ userPassword} confirmPassword={confirmPassword}>
            <div>
            <h1>Track It</h1>
                <form onSubmit={(event)=>{submitForm(event)}}>
                    <input type="email" placeholder='E-mail' value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                    <input type="text" placeholder='Name' value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                    <input type="url" placeholder='Image url' value={imgUrl} onChange={(e)=>{setImgUrl(e.target.value)}}/>
                    <PasswordInput userPassword={userPassword} setUserPassword={setUserPassword} placeholder={'enter the password'}/>
                    <PasswordInput userPassword={confirmPassword} setUserPassword={setConfirmPassword} placeholder={'confirm the password'}/>
                    <button type='submit' >Sign In</button>
                    <button onClick={()=>{navigate('/sign-up')}}>Sign Up</button>
                    <ToastContainer/>
                </form>
            </div>
        </Container>
    )
}
