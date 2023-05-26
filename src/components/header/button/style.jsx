import styled from 'styled-components'

export const StyledButton = styled.a`
    padding:.7rem 1rem;
    background:rgb(71, 83, 110);
    color:#ffff;
    border-radius:.2rem;
    transition:all .7s;
    z-index:-1;
    
    &:not( :first-child ) {
        margin-left:2rem;
    }
    &:hover{
        background:#5777ba;
    }

    span{
        margin-left:.5rem;
    }
    svg{
        font-size:1rem;
    }

`