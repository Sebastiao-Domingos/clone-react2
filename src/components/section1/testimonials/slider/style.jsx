import styled from 'styled-components'

export const Div = styled.div`
    width:100%;
    height:20rem;


    .contentSlider{
        width:100%;
        height:15rem;
        padding-left:5rem;
        display:flex;
        align-items:center;
        padding-left:1rem; 
        overflow-x:auto;
        &::-webkit-scrollbar{
            display:none;
        }

        >div.gallery{
            display:flex;
            flex-flow:row nowrap;
            gap:1.5rem;
        }
    }
`;