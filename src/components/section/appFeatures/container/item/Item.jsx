import { Div } from './style'

function Item( {title  , text, icon}) {
  return (
    <Div>
        { icon }
        <div>
            <h4>{title}</h4>
            <p>{text }</p>
        </div>
    </Div>
  )
}

export default Item