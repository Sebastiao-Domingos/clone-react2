import { StyledContainer } from './style'
import photo from '../../../../assets/img/details-4.png'
import { Title4 } from '../titles/Title4'
import { Paragraph } from '../../paragraph/Paragraph'
import { Icon } from '../icon/Icon'
export function Container5(){


    return (
        <StyledContainer>
            <div>
                <Title4 
                    text ="Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in"
                />
                <Paragraph 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Paragraph 
                    text="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                />
                <ul>
                    <li>
                        <Icon />   Et praesentium laboriosam architecto nam .
                    </li>
                    <li><Icon />     Eius et voluptate. Enim earum tempore aliquid. Nobis et sunt consequatur. Aut repellat in numquam velit quo dignissimos et.</li>
                    <li> <Icon />      Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                </ul>
            </div>
            <img src={ photo } alt="como estas ...." />
        </StyledContainer>
    )
}