import styled from 'styled-components'
export const StyledForm = styled.form`
    width:50%;
    height:26rem;
    display:flex;
    flex-direction:column;

    input,textarea{
        margin-bottom:1rem;
        padding:12px;
        border:1px solid #F1F3F6;
        outline:0;
        &:focus{
            border-color:#5777ba;
        }
    }
    input[ type="submit"]{
        width:10rem;
        border-radius:20px;
        margin:.5rem auto;
        color:#5777ba;
        background:transparent;
        border:2px solid #5777ba;
        transition:all .7s ease-in-out;
        &:hover{
            background:#5777ba;
            color:#ffff;
        }
    }
`;