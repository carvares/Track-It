import { AxiosResponse, AxiosError } from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import PasswordInput from '../../../components/inputs/passwordInput';
import { Container } from '../style';
import { server } from './../../../utils/axios';
export default function Login(){
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

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
          
        console.log(result)
       }
       catch(err: any | AxiosError){
        if(err.response.status === 401) notify()
        toast.clearWaitingQueue()
       }
       navigate('home')
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
