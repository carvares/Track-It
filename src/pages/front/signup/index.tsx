import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import PasswordInput from '../../../components/inputs/passwordInput';
import { Container } from '../style';

import 'react-toastify/dist/ReactToastify.css';
import { server } from './../../../utils/axios';

export default function SignUp(){
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [imgUrl, setImgUrl] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const notify = () =>  toast.warning('Passwords must match',{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        
    })

    const navigate = useNavigate();

    function sendForm(event: React.FormEvent<HTMLFormElement>){
        event?.preventDefault()
        toast.clearWaitingQueue()
        if(password !== confirmPassword) return notify()
        const body = {
            email,
            password,
            userName,
            imgUrl
        }
        toast.promise(
            server.post('sign-up', body),
            {
                pending:'creating your account',
                success: {
                    render(){
                        navigate('../home')
                        return 'accont created!'
                    }
                },
                error:  {
                    render({data}){
                        console.log(data)
                       if(data.response.status === 409) return `email already taken`
                       return 'test'
                    }
                }
            }

        )
    }

    return(
        <Container userPassword={ password} confirmPassword={confirmPassword}>
            <div>
            <h1>Track It</h1>
                <form onSubmit={(event)=>{sendForm(event)}}>
                    <input type="email" required placeholder='E-mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="text" required minLength={3} maxLength={25} placeholder='Name' value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                    <input type="url" required placeholder='Image url' value={imgUrl} onChange={(e)=>{setImgUrl(e.target.value)}}/>
                    <PasswordInput userPassword={password} setUserPassword={setPassword} placeholder={'Password'}/>
                    <PasswordInput  userPassword={confirmPassword} setUserPassword={setConfirmPassword} placeholder={'Confirm password'}/>
                    <button type='submit'>Sign Up</button>
                    <Link to='/sign-in'>Already have an account? just sign-in!</Link>
                    <ToastContainer limit={1} draggablePercent={80}/>
                </form>
            </div>
        </Container>
    )
}
