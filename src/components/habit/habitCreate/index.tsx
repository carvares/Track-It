import React, { useState } from 'react';
import Weekdays from '../weekdays';
import { HabitCreateStyle } from './style';
import { server } from './../../../utils/axios';
import { useContext } from 'react';
import { UserContext } from './../../../contexts/userContext';
import { userInfo } from '../../../types';
import { AxiosRequestConfig } from 'axios';

export default function HabitCreate(){
    const [habitName, setHabitName] = useState<string>('')
    const {userInfo}:{userInfo: userInfo} = useContext(UserContext)
    const selectedDays: number[] = []

    function createHabit(event: React.FormEvent){
        event.preventDefault()

        const body = {habitName,selectedDays}
        const config:AxiosRequestConfig = {
            headers:{
                'Authorization':`Bearer ${userInfo.token}`
            }
        }

        server.post('/habits',body, config )
    }
    return(
        <HabitCreateStyle onSubmit={event => {createHabit(event)}}>
            <input type="text" placeholder='Habit name' value={habitName} onChange={(e)=>{setHabitName(e.target.value)}}/>
            <Weekdays selectedDays={selectedDays}/>
            <button type='submit'>Create</button>
        </HabitCreateStyle>
    )
}