import styled from 'styled-components'

export const Div = styled.div`
    width:100%;
    height:16rem;
    background:#EFF2F8;
    padding:.2rem; 
    display:flex;
    flex-direction:column; 

    h2{
        color:#47536E;
        font-size:1.4rem;
        margin:0;
    }
    P{
        font-size:.9rem;
        margin-top:1rem;
    }
    .inputSubscribe {
        position:relative;
        margin: 0 auto;
        width:35rem;
        border-radius:20px;
        background:#FFF;
        box-shadow:0 0 10px #DDDD;
        padding:7px 1rem;
        border-radius: 30px;

        >input{
            padding:7px;
            width:81%;
        }
        >button {
            position:absolute;
            top:0;
            right:0;
            height:100%;
            background:#5777ba;
            padding: 0 1.4rem;
            color:#FFF;
            border-radius: 30px;
            font-size:1rem;
            &::before{
                position:absolute;
                content:"";
                border-radius:30px;
                width:0%;
                height:100%;
                top:0;
                left:0;
                background:rgba( 0 ,0,0,.2);
                transition:all .5s ease-in-out;
            }
            &:hover::before{
                width:100%;
            }
        }
    }
`;