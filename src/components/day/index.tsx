import React, { useState } from 'react';
import { day } from '../../types';
import { DayStyle } from './style';


export default function Day(day: day & {selectedDays: number[]}){

    const [clicked, setClicked] = useState<boolean>(false)
    function selectDay(){
        
        if(!clicked){
            day.selectedDays.push(day.id)
            
        }
        if(clicked){

            const idIndex = day.selectedDays.findIndex(element => element === day.id)
            day.selectedDays.splice(idIndex, 1)
            
        }
        setClicked(!clicked)
        console.log(day.selectedDays)
    }

    return(
        <DayStyle clicked={clicked} onClick={selectDay}>{day.letter}</DayStyle>
    )
}