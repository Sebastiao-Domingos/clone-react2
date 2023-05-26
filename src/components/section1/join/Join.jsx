import { Div } from './style'
import { Text } from '../text/Text'
export function Join() {
  return (
    <Div>
        <Text 
            title = "Join Our Newsletter"
            text = "Tamen quem nulla quae legam multos aute sint culpa legam noster magna"
        />
        <div className = 'inputSubscribe'>
            <input type="text" name="subscribe" id="subscribe" />
            <button >Subscribe</button>
        </div>

    </Div>
  )
}
