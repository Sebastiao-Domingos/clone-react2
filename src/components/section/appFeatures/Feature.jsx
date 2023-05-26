import { Div } from './style'
import { Title } from '../title/Title'
import { Paragraph } from '../paragraph/Paragraph'
import { Container} from './container/Container'
import { Container2 } from './container2/Container'
import { Container3 } from './container3/Container3'
import { Container4 } from './container4/Container4'
import { Container5 } from './container5/Container5'
import { Container6} from './container6/Container6'

export function Feature() {
    return (
      <Div>
        <Title  text = 'App Features'/>
        <Paragraph  
            text="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
        />
        <Container />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />

        
      </Div>
    )
}
