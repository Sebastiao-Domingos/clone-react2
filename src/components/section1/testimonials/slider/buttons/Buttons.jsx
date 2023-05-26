import styled from 'styled-components'

export  function Buttons() {
  return (
    <Div className ="contentButton">
        <span></span>
        <span></span>
        <span></span>
    </Div>
  )
}

const Div = styled.div`
    width:5rem;
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:3rem;

    >span{
        width:12px;
        height:12px;
        border-radius:50%;
        border:none;
        background:#DDDDDD;
        margin:0 5px;
    }
`
