
import styled from 'styled-components';

interface Iprops{
    clicked: boolean;
}

export const DayStyle = styled.div<Iprops>`
        width: 40px;
        aspect-ratio: 1/1;
        border: 1px solid #343434;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.clicked? '#7cadfc': '#ffffff'};
    
`