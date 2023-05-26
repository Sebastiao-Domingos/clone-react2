import { Div } from './style'

export default function Item({ Icon , title , text1,text2 , index }) {
  return (
    <Div key ={ index}>
        < Icon />
        <h5>{title}</h5>
        <p>{ text1 }</p>
        <p>{ text2 }</p>
    </Div>
  )
}
