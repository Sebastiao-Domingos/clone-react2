import Modal  from './itemModal/Modal'
import { Div } from './style'

export default function Content() {
  const itens =[
    {
      title : 'Free', money: '0',time:'per mounth',
      lists : [
        " Quam adipiscing vitae proin",'Nec feugiat nisl pretium',' Nulla at volutpat diam uteera',"Pharetra massa massa ultricies"," Massa ultricies mi quis hendrerit"
      ]
    },
    {
      title : 'Business', money: '29',time:'per mounth',
      lists : [
        "Quam adipiscing vitae proin"," Nec feugiat nisl pretium"," Nulla at volutpat diam uteera","Pharetra massa massa ultricies"," Massa ultricies mi quis hendreri"
      ]
    },    {
      title : 'Developer', money: '49',time:'per mounth',
      lists : [
        " Quam adipiscing vitae proin"," Nec feugiat nisl pretium"," Nulla at volutpat diam uteera"," Pharetra massa massa ultricies"," Massa ultricies mi quis hendrerit"
      ]
    }
  ]
  return (
    <Div>
        { itens.map( ( item , index  ) => (
          <Modal 
            title ={ item.title }
            money = { item.money }
            itens = { item.lists}
            time ={ item.time }
            pos = { index }
          />
        ))}
    </Div>
  )
}
