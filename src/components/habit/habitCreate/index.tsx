import React, { useState } from 'react';
import Weekdays from '../weekdays';
import { HabitCreateStyle } from './style';

export default function HabitCreate(){
    const [habitName, setHabitName] = useState<string>('')
    
    return(
        <HabitCreateStyle>
            <input type="text" placeholder='Habit name' value={habitName} onChange={(e)=>{setHabitName(e.target.value)}}/>
            <Weekdays />
            <button>Create</button>
        </HabitCreateStyle>
    )
}