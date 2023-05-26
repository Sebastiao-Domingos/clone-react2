import styled from 'styled-components';

export const Li = styled.li`
    position:relative;
    width:100%;
    min-height:4rem;
    background:#FFF;
    padding:1rem;
    margin:.7rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    &:hover > h5 {
        color:#5777ba;
    }
    span ,h5{ cursor: pointer}
    span{
        position:absolute;
        right:20px;
        top:10px;
        font-size:1.5rem;
        &:hover{
            color:#5777ba;
        }
    }
    h5{
        color:${ props => props.showed ? "#5777ba" : "#343A40"};
        font-weight:300;
        margin-bottom:1rem;
    }
    p{
        color:#555A61;
        font-size:15px;
    }
    
`;