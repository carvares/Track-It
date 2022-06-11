import styled from 'styled-components';

type Iprops = {
    userPassword?: string;
    confirmPassword?: string;
    value?: string;
}
export const Container = styled.div<Iprops>`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap');

    display:flex;
    justify-content:center;
    align-items:center;
    width: 100vw;
    height:100vh;
    background: linear-gradient(135deg, #7cadfc ,#568ce3);
    &> div{
        display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 500px;

    h1{
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
        font-size: 3rem;
        color: #ffffff;
        margin-bottom: 15px;

    }
    form{
        display: flex;
        flex-direction: column;
        height:500px;
        align-items: center;

        input{
            width:100%;
            height:40px;
            border: none;
            border-radius: 5px;
            padding: 5px;
            margin: 7px 0 ;
            :hover{
                background-color: #cccccc;
            }
        }
        .confirmPassword {
            border: ${props => props.userPassword === props.confirmPassword? 'none': 'solid 2px red'}
        }
        button{
            height: 35px;
            width: 150px;
            border:none;
            border-radius:5px;
            background-color: #ffffff;
            font-family: 'Ubuntu', sans-serif;
            font-size: 1rem;
            color: #568ce3;
            margin: 7px 0 ;
            :hover{
                background-color: #cccccc;
                transition: 0.3s;
                cursor: pointer;
            }
        }
        }
    }
`