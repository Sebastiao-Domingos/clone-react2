import { StyledContainer } from './style'
import  Item  from './item/Item'
import photo from '../../../../assets/img/features.svg'
import { FaReact ,FaCube  } from 'react-icons/fa'
export function Container(){

    return (
        <StyledContainer>

            <div id='contItem'>
                <Item title ="Corporis voluptates sit" 
                icon={ <FaReact/>}
                text ="Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
                />
                <Item 
                    icon={ <FaCube/>}
                    title = 'Ullamco laboris nisi'
                    text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
                />
                <Item title ="Labore consequatur"
                    icon={ <FaReact/>}
                    text="Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
                />
                <Item 
                    icon={ <FaReact/>}
                    title = 'Beatae veritatis'
                    text="Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta"
                />
                <Item 
                    icon={ <FaReact/>}
                    title= "Molestiae dolor"
                    text="Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte"
                />
                <Item 
                    icon={ <FaReact/>}
                    title = "Explicabo consectetur"
                    text="Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore"
                />
            </div>
            <img  src ={photo} alt="ola como vai"/>

        </StyledContainer>
    )
}