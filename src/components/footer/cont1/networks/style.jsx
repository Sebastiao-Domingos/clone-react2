import styled from 'styled-components'

export const Div = styled.div`
    width:25%;
    
    p{
        font-size:.8rem;
        color:#47536E;
        margin-bottom:1rem;
    }
    >div{
        width:90%;
        display:flex;
        justify-content:space-between;

        >div{
            display:flex;
            justify-content:center;
            align-items:center;
            width:30px;
            height:30px;
            background:#5777ba;
            border-radius:50%;
            margin:0 .5rem ;
            cursor : pointer;
            >svg{
                font-size:.8rem;
                color:#FFF;
            }
        }
    }
    
`;