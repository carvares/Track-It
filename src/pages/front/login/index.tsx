import { AxiosResponse, AxiosError } from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import PasswordInput from '../../../components/inputs/passwordInput';
import { Container } from '../style';
import { server } from './../../../utils/axios';
import { useContext } from 'react';
import { UserContext } from './../../../contexts/userContext';
import { userInfo } from '../../../types';

export default function Login(){
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {setUserInfo}: {setUserInfo: React.Dispatch<React.SetStateAction<userInfo>>} = useContext(UserContext)

    const navigate = useNavigate();

    const notify = () =>  toast.warning('wrong email or password',{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        
    })

    async function signIn(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        const body ={
            email,
            password
        }
       try{
        const result: AxiosResponse = await server.post('/sign-in', body)
        console.log(result.data)
          
        setUserInfo(result.data)
        navigate('home')
       }
       catch(err: any | AxiosError){
        console.log(err)
        if(err.response?.status === 401) notify()
        toast.clearWaitingQueue()
       }
    }
    return(
        <Container>
            <div>
            <h1>Track It</h1>
                <form onSubmit={event=>signIn(event)}>
                    <input type="email" required placeholder='E-mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <PasswordInput userPassword={password} setUserPassword={setPassword} placeholder={"Password"} />
                    <button type='submit'>Sign In</button>
                    <Link to='/sign-up'>First time here? creat an account!</Link>
                    <ToastContainer limit={1}/>   
                </form>
            </div>
        </Container>
    )
}
