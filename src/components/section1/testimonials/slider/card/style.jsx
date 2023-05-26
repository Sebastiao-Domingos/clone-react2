import styled from 'styled-components'

export const Div = styled.div`
    width:490px;
    border:none;
    >div{
        width:90%;
        height:14rem;
        position:relative;
        margin:auto;
        box-shadow:0 0 10px #aab6d0;
        background:#FFF;  
        border-radius:3px;
        >div {
            width:80%;
            margin:auto;
            padding-top:2rem;

            h3{
            margin-bottom:.5rem;
            color:#111;
            font-size:18px;
            font-weight:bold;
            }
            h4{
                color:rgba(88, 90, 97, 0.6);
                font-weight:300;
                font-size:.9rem;
                margin-bottom:1rem;
            }
            p{
                color:#585a61;
                font-style:italic;
                font-weight:300;
                font-size:15px;
                text-align:justify;
            }

        }
        >img{
            position:absolute;
            top:2rem;
            left:-45px;
            width:80px;
            height:80px;
            border-radius:5px;
            border :5px solid #FFF;
        }
        
    }

`;