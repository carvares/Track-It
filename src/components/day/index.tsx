import React, { useState } from 'react';
import { Iday } from '../../interfaces';
import { DayStyle } from './style';


export default function Day(day: Iday){

    const [clicked, setClicked] = useState<boolean>(false)

    return(
        <DayStyle clicked={clicked} onClick={()=>{setClicked(!clicked)}}>{day.letter}</DayStyle>
    )
}