import styled from 'styled-components'

export const Div = styled.div`
    position:absolute;
    left:-12%;
    top:12rem;
    width:130%;
    height:27rem;

    >div ,>article{
        display:flex;
    }
    >div{
        width:100%;
        height:30rem;
        justify:center;
        align-items:center;
        overflow-x:hidden;

        >img{
            width:15rem;
            height:25rem;
            border-radius:25px;
        }
    }
    >article{
        justify-content:space-between;
        align-items:center;
        width:16rem;
        height:2rem;
        margin: 1rem auto;

        >span{
            width:12px;
            height:12px;
            border-radius:50%;
            background:#EFF2F8;  
        }
        >span:first-child{
            background:#5777ba;
        }
    }
`