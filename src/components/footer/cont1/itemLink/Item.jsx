import { Div } from './style'

export default function Item({ title , array  }) {
  return (
    <Div>
        <h3>{title }</h3>
        <ul>
            { array.map( ( item , index )=> (
                <li><a href="#"><span>{">"}</span> {item}</a></li>
            ))}
        </ul>
    </Div>

  )
}
