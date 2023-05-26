import styled from 'styled-components'

export function Appand() {
  return (
    <Div>
        <h2> Appand </h2>

        <article>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>New York, NY 535022</p>
        </article>
        <article>
            <p><strong>Phone:</strong> +1 5589 55488 55</p>
            <p><strong>Email:</strong> info@example.com</p>
        </article>

    </Div>
  )
}


export const Div = styled.div`
    width:15rem;
    height:20rem;

    h2{
        color:#47536E;
        font-weight:300;
    }
    article:not(:last-child){
        margin:.7rem 0  2rem 0;
    }
    p{
        color:#8A8C95;
        font-size:.8rem;
    }
`;