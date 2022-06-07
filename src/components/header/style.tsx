import  styled  from 'styled-components';

export const HeaderStyle =  styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 75px;
    background: linear-gradient(135deg, #7cadfc ,#568ce3);
    padding: 0 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    z-index:1;
    h1{
        font-size: 2rem;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
        color: #ffffff;
    }
    img{
        width: 50px;
        aspect-ratio: 1/1;
        margin: 0 0 0 15px;
        border-radius: 25px;
    }
    div{
        display: flex;
        align-items:center;
        p{
            font-family: 'Ubuntu', sans-serif;
            font-size: 1.3rem;
            color: #ffffff;
        }
    }
`