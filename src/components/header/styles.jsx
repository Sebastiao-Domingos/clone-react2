import styled , { keyframes } from 'styled-components'
import fhoto from '../../assets/img/hero-img.png'

const come = keyframes`
    from{ top : 200px ; opacity:0}
    to{ top:0 ; opacity:1;}
`
export const StyledHeader = styled.header`
    position:relative;
    width:100%;
    height:103vh;
    display:flex;
    overflow:hidden;


    &::before{
        position:absolute;
        z-index:-1;
        top:-60%;
        left:60%;
        transform:rotate(-140deg);
        content:'';
        background:#e8ecf5;
        width:50%;
        height:100rem;
    }

    >div{
        position:relative;
        width:83%;
        min-height:20rem;
        margin:9rem auto;
        display:flex!important;
        justify-content:space-between;
        >img{
            right:0;
            width:35rem;
            height:28rem;
        }
        >img , >div{
            position:absolute;
            z-index:-1;
            animation: ${ come } 1.5s forwards;
        }
        >div{
            left:0;
            top:200px;
            width:45%;
            height:28rem;

            h1{
                color: #5777ba;
                font-weight:500;
                font-family:'Poppins' ,sans-serif;
                font-size:48px;
                margin: 5rem 0 1rem 0;
            }
            h2{
                font-family:'Raleway', sans-serif;
                color:#515f7d;
                font-weight:200;
                font-size:1.2rem;
            }
            >div{
                margin-top:4rem;
            }
        }
        
    }

`

/**
 *     z-index: -1;
    background-color: #e8ecf5;
    transform: skewY(135deg);
 */