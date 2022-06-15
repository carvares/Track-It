import React from 'react';
import Day from '../../day';
import { day } from '../../../types';
import { WeekdaysStyle } from './style';



export default function Weekdays({selectedDays}: {selectedDays: number[]}){
    const days : day[] = [{id: 0, letter: 'S'},{id: 1, letter: 'M'},{id: 2, letter: 'T'},{id: 3, letter: 'W'},{id: 4, letter: 'T'},{id: 5, letter: 'F'},{id: 6, letter: 'S'}]
    

    return(
        <WeekdaysStyle>
        {days.map((each : day)=>{
            return (
                <Day key={each.id} id={each.id} letter={each.letter} selectedDays={selectedDays} />
            )
        })}
        </WeekdaysStyle>
    )
}