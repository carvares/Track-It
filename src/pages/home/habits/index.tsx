import React, { useState } from 'react';
import HabitCreate from '../../../components/habit/habitCreate';
import { HabitsStyle } from './style';

export default function Habits(){

    const [habitForm, setHabitForm] = useState(false)

    return (
        <HabitsStyle>
            <button onClick={()=>{setHabitForm(!habitForm)}}>+</button>
           {habitForm? <HabitCreate/>: null}
        </HabitsStyle>
    )
}