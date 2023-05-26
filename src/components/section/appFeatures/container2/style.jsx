import styled ,{ keyframes } from 'styled-components'

const comeImage = keyframes`
    from{
        left:-100px;
        opacity:0;
    }
    to{
        left:0;
        opacity:1;
    }
`
const comeText = keyframes`
    from{
        top:100px;
        opacity:0;
    }
    to{
        top:0;
        opacity:1;
    }
`

export const StyledDiv = styled.div`
    position:relative;
    width:100%;
    min-height:30rem;
    display:flex;
    justify-content:space-between;
    color:#585a61;
    z-index:-1;

    img{
        position:absolute;
        left:0;
        top:0;
        width:30%;
        height:25rem;
        z-index:-1;
        animation:${ comeImage } 1.4s forwards;
    }
    >div.content {
        position:absolute;
        right:0;
        width:70%;
        padding-left:2rem;
        z-index:-1;
        animation : ${ comeText } 1.4s forwards;

        h4{
            margin-bottom:1rem;
            font-size:2rem;
            color:#47536E;
        }

        p{
            text-align:left;
            margin-bottom:1.5rem;
        }
        >p.italic{
            font-style:italic;
        }

        ul{
            margin-bottom:2rem;
            li{
                list-style:none;
                margin:1rem 0;
                padding-left:1.6rem;
            }
        }
    }

`