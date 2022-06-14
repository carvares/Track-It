import React, { useState } from 'react';
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { PasswordInputStyle } from './style';

type InputProps = {
  userPassword: string;
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

export default function PasswordInput({userPassword, setUserPassword, placeholder}:InputProps): JSX.Element{
    const [showPassword, setShowPassword] = useState(false);
    return(
       <PasswordInputStyle>
         <input type={showPassword? "text": "password"} required placeholder={placeholder} value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}}/>
         <span onClick={()=>{setShowPassword(!showPassword)}}>{showPassword? <AiOutlineEye/>: <AiOutlineEyeInvisible/>}</span>
       </PasswordInputStyle>
    )
}