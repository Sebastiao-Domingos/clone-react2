import { Div } from './style'
import { Text } from '../text/Text';
import Content from './questions/Content'

export default function Question() {
  return (
    <Div>
        <Text 
            title ="Frequently Asked Questions"
            text ="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas"
        />
        <Content />
    </Div>
  )
}
