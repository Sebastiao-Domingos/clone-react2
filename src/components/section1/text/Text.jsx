import { Div } from './style'
import { Paragraph } from '../../section/paragraph/Paragraph'
import { Title } from '../../section/title/Title'
export function Text( { title , text }) {
  return (
    <Div>
      <Title  text ={ title }/>
      <Paragraph  text = {text }/>
    </Div>
  )
}
