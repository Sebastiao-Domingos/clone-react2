import styled from 'styled-components'

export function Title( { text }){
    return (
        <H2> {text }</H2>
    )
}

const H2 = styled.h2`
    text-align:center;
    color:#5777ba;
    margin-bottom:2rem;
    font-size:2rem;
    font-weight:500;

`