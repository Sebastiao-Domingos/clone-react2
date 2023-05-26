import { Div } from "./style"
import { Appand } from './appand/Appand'
import  Item  from './itemLink/Item'
import  NetWorks from "./networks/NetWorks"
export default function Container1() {
  return (
    <Div>
        <div  className = 'cont1'> 
            <Appand />
            <Item 
                title = "Useful Links"
                array = {['Home' , "About Us" , "Services" ,"Terms of service","Privacy policy"]}
            />
            <Item 
                title ="Our Services"
                array ={["Web Design","Web Development","Product Management","Marketing","Graphic Design"]}
            />
            <NetWorks />
        </div>
    </Div>
  )
}
