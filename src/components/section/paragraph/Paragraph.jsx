import styled from 'styled-components'

export function Paragraph({ text }){
    return (
        <P>
            { text }
        </P>
    )
}

const P = styled.p`
    color:#585a61;
    font-family:"Open Sans",sans-serif;
    text-align:center;
`