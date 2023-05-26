
import  styled,{ keyframes } from 'styled-components';

export const KeyBackground = keyframes`
    0%{
        background:transparent;
        box-shadow:none;
    }
    100%{
        background:#ffffff;
        box-shadow:0 0 4px #585a61;
    }
`
const KeyBackground1 = keyframes`
    0%{
        background:#ffffff;
        box-shadow:0 0 4px #585a61;
    }
    100%{
        background:transparent;
        box-shadow:none;
    }
    `
export const StyledNav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 9% ;
    background:transparent;
    animation: ${ props => ( props.pageY>15 ) ? KeyBackground : KeyBackground1} 1.4s forwards;
    z-index:1000;
    >span{
        color:#5777ba;
        font-size:2rem;
        font-weight:300;
    }
    >ul {
        list-style:none;
        display:flex;
        align-items:center;
        
        li{
            text-decoration:none;
            color:#515f7d;
            font-size:.9rem;
            cursor:pointer;
    
            &:hover{
                color:#5777ba;
            }
            &:not( :last-child ) {
                margin-right:2rem;
            }
        }
        li#get{
            position:relative;
            padding:.8rem 1.4rem;
            background:#5777ba;
            border-radius:2rem;
            color:#ffff;
            &::before{
                position:absolute;
                content:'';
                top:0;
                left:0;
                width:100%;
                height:100%;
                border-radius:2rem;
                background:transparent;
                transition:all  .5s ease-in-out;
            }
            &:hover::before{
                background:rgba(255, 255, 255, .2); 
            }
            
        }
    }
` 