import styled from 'styled-components'

export const Div = styled.div`
    width:20rem;
    height:25rem;
    background:#FFFFFF;
    border-radius:5px;
    box-shadow:0 0 20px #DDDDDD;
    display:flex;
    transform: ${ props => props.pos ===1 ? "scale(1.1)":"scale(1)"};
    z-index: ${ p => p.pos===1 ? 1 : 0};
    >div{
        width:80%;
        height:21rem;
        margin:auto;
        display:flex;
        flex-direction:column;

        button, h2,h3{
            text-align:center;
            font-weight:400
        }
        h3{
            font-size:1.7rem;
            color:#585A61;
            margin-bottom:1rem;
        }
        h2{
            color:#5777ba;
            font-size:3rem;
        }
        span{ 
            color:#BABABA;
            text-align:center;
            font-size:14px;
        }
        ul{
            margin-top:.8rem;
        }
        ul li{
            list-style:none;
            color:#999999;
            padding-left:2rem;
            font-size:15px;
            margin-top:.7rem;
        }
        button{
            width:8rem;
            margin:2rem auto;
            padding:10px 0;
            border-radius:20px;
            background:${ props => ( props.pos === 1) ? "#5777ba":"#47536E"};
            color:#FFFFFF;
            transition:all .5s ease-in-out;
            cursor:pointer;
            &:hover{
                background:#5777ba;
            }
        }

        
    }

`;