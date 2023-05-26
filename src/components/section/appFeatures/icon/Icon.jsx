import styled from 'styled-components'

export function Icon(){
    return (
        <Span>
        </Span>
    )
}

const Span = styled.span`
    position:relative;

    &::before{
        position:absolute;
        content:"";
        top:7px;
        transform:rotate(40deg);
        left:-1.5rem;
        width:6px;
        height:2px;
        background:#5777ba;
        border-radius:2px;
    }
    
    &::after{
        position:absolute;
        content:"";
        top:5px;
        transform:rotate(-45deg);
        left:-1.3rem;
        width:10px;
        height:2px;
        background:#5777ba;
        border-radius:2px;
    }
`