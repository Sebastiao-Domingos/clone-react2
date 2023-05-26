import { Div } from './style'

export default function Card({ name,work , text,img,key  }) {
  return (
    <Div key = { key } className = "item">
        <div>
            <img src={img} alt="funcionarios da empresas.." />
            <div>
                <h3> {name }</h3>
                <h4>{ work }</h4>
                <p>
                    { text }
                </p>
            </div>
        </div>
    </Div>
  )
}

