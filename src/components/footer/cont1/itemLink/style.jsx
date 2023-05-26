import styled from  'styled-components'

export const Div = styled.div`
    width:10rem;
    min-height:10rem;
    
    ul{
        list-style:none;
        padding-left : .5rem;
        li{
            margin:1rem 0;

            a{
                text-decoration:none;
                color:#8A8C95;
                font-size:.8rem;

                span{
                    color:#6e81a8;
                    font-weight:700
                }
            }
        }
    }
    
`;