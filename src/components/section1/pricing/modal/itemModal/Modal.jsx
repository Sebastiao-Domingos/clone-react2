import { Div } from "./style"
import { Icon } from '../../../../section/appFeatures/icon/Icon'

export default function Modal({ title , money , time , itens ,pos}) {
  function handleScroll(){
    window.scrollTo( {
      top:0,
      left:0,
      behavior:"smooth",
    })
  }
  return ( 
    <Div key = {pos} pos = { pos }>
      <div>
          <h3>{title }</h3>
          <h2>${money}</h2>
          <span>{time}</span>
          <ul>
              { itens.map( ( item , index ) => (
                <li key ={ index } > <Icon /> {item} </li>
              ))}
          </ul>
          <button  onClick = { handleScroll }> Get Started </button>
      </div>
    </Div>
  )
}
