import styled,{ keyframes } from 'styled-components'

const comeText = keyframes`
    0%{ top:200px ; opacity:0; }
    100%{ top: 0 ; opacity:1 ;}
`
const comeImage = keyframes`
    0%{ left:-100px ; opacity:0;}
    100%[ left:0; opacity:1;]
`
export const StyledContainer = styled.div`
    position:relative;
    width:100%;
    height:38rem;
    display:flex;
    z-index:-1;

    >img , >div{ position:absolute; top:0;}
    >img{
        left:0;
        width:22rem;
        height:37rem;
        z-index:-1;
        animation: ${ comeImage } 1.4s forwards ease-in-out;
    }
    >div{
        right:0;
        width:65%;
        padding-top:3rem;
        z-index:-1;
        animation: ${ comeText } 1.4s forwards ease-in-out;
        >p{
            text-align:left;
            margin:1rem 0;
        }
        ul {
            li{
                color:#585a61;
                list-style:none;
                margin:.5rem 0;
                padding-left:1.7rem;
            }
        }
    }



`