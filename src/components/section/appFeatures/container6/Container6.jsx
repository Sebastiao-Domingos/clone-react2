import { Container } from './style'
import { Title } from '../../title/Title'
import { Paragraph } from '../../paragraph/Paragraph'
import { Gallery } from './gallery/Gallery'
export function Container6() {


    return(
        <Container>
            <Title 
                text="Gallery"
            />
            <Paragraph 
                text = "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
            />
            <Gallery />
        </Container>
    )
}