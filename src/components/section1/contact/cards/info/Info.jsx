import { Div } from './style'
import Item from './item/Item'
import { FaPhone , FaClock } from 'react-icons/fa'

export default function Info() {
    
    const infoItems = [
        { icon : FaPhone , title:"Address" ,text1 :"A108 Adam Street ",text2:"New York, NY 535022" },
        { icon : FaClock , title:"Call us" ,text1 : "+1 5589 55488 55" ,text2:"+1 5589 22548 64"},
        { icon : FaPhone , title:"Email us" ,text1 : "contact@example.com " ,text2:"info@example.com" },
        { icon : FaClock , title:"Working hours" ,text1 : "Mon - Fri: 9AM to 5PM ",text2:" Sunday: 9AM to 1PM" }

    ]
  return (
    <Div>
        { infoItems.map( (item , index ) =>(
            <Item 
                Icon ={ item.icon } 
                title={ item.title }
                text1 ={ item.text1 }
                text2 ={ item.text2 }
                index = { index}
            />

        ) )}

    </Div>
  )
}
