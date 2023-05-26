import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Raleway' ,sans-serif;
        border:none;

    }
    h2,h3,h4{
        font-family:'Raleway',sans-serif;
    }
    p{
        line-height:1.5;
    }
    body{
        overflow-x:hidden;
    }
    button{
        cursor: pointer;
    }

`