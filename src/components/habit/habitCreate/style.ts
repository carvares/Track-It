
import  styled  from 'styled-components';

export const HabitCreateStyle = styled.form`
    width: 85%;
    height: 200px;
    border: 1px solid #454545;
    border-radius: 5px;
    display: flex;
    flex-direction:column;
    align-items:center;
    margin: 0 auto;
    position: relative;
    input{
        width: 90%;
        height: 35px;
        margin: 30px;
        border: 1px solid #454545;
        border-radius: 5px;
    }
    button{
        position: absolute;
        bottom: 20px;
        right: 20px;
        width: 70px;
        aspect-ratio: 2/1;
    }
`