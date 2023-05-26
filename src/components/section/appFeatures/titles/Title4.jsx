import styled from 'styled-components'

export function Title4({text }){

    return(
        <Title>
            { text }
        </Title>
    )
}

const Title = styled.h4`
    margin-bottom:1rem;
    font-size:2rem;
    color:#47536E;

`