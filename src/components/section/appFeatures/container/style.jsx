import styled , {keyframes }from 'styled-components'


const come = keyframes`
    from{ 
        right:-100px;
        opacity:0;
    }
    to{
        opacity:1;
        right:0;
    }
`
const comeText = keyframes`
    from{ 
        top:150px;
        opacity:0;
    }
    to{
        opacity:1;
        top:2.5rem;
    }
`
export const StyledContainer = styled.div`
    position:relative;
    width:100%;
    height:40rem;
    padding-top:3rem;
    display:flex;
    overflow:hidden;
    z-index:-1;

    >div,>img{
        position:absolute;
        z-index:-1;
    }
    >div#contItem{
        left:0;
        padding-top:4rem;
        width:65%;
        height:20vh;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        align-items:center;
        animation:${ comeText } 1.5s forwards;
    }
    >img{
        right:0;
        top:2.5rem;
        width:40%;
        height:30rem;
        animation: ${ come } 1.5s forwards;
    }
`
