import styled ,{ keyframes } from 'styled-components'

const comeText = keyframes`
    0%{ opacity:0 ; top:200px}
    100%{ opacity:1 ; top:0;}
`
const comeImage = keyframes`
    from{ opacity:0; right:-100px ;}
    to{ opacity:1; right:0;}
`
export const StyledDiv = styled.div`
    position:relative;
    width: 100%;
    height:25rem;
    display:flex;
    z-index:-1;

    >img , >div{
        position:absolute;
        z-index:-1;
        top:0;
    }
    >img{
        width:20rem;
        height:22rem;
        top:-2.5rem;
        right:0;
        animation:${ comeImage } 1.5s forwards;
    }
    >div{
        width:66%;
        left:0;
        animation:${ comeText } 1.5s forwards;
    }
    p{
        text-align:left;
        margin-bottom:1rem;
    }
    p.italic{
        font-style:italic;s
    }


`