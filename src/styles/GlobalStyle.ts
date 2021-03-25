import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        
    }
    body{
        background: #A9A9A9;
        font-family: 'Chango', cursive;
    }

    button{
        width: 80px;
        height: 35px;
        background-color: white;
        border-color: black;
        margin-left: 10px;
        color: black;
        font-size: 13px;
        font-weight: bold;
    }
    
    input{
        height: 31px;
        width: 220px;
        border-color: black;
    }
`