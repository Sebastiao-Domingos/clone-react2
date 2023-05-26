import styled from 'styled-components'

export const Div = styled.div`
    position:relative;
    width:100%;
    background:#EFF2F8;
    padding: 1.5rem 9%;
    display:flex;
    justify-content:space-between;

    p{
        font-size:.8rem;
        color:#47536E;
        a{
            text-decoration:none;
            color:#5777ba;
        }
    }
    button{
        position:absolute;
        right:1rem;
        width:2.2rem;
        height:2.2rem;
        border-radius:50%;
        background:#5777ba;
        color:#FFF;
    }
`;