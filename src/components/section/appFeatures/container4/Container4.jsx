import { StyledContainer } from './style'
import photo from '../../../../assets/img/details-3.png'
import { Title4 } from '../titles/Title4'
import { Paragraph } from '../../paragraph/Paragraph'
import { Icon } from '../icon/Icon'
export function Container4(){


    return (
        <StyledContainer>
            <img src={ photo } alt="como estas ...." />
            <div>
                <Title4 
                    text = "Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas"
                />
                <Paragraph 
                    text ="Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque."
                />

                <ul>
                    <li>
                        <Icon />   Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li><Icon />     Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li> <Icon />      Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                </ul>

                <Paragraph 
                    text = "Qui consequatur temporibus. Enim et corporis sit sunt harum praesentium suscipit ut voluptatem. Et nihil magni debitis consequatur est."
                />
                <Paragraph 
                    text="Suscipit enim et. Ut optio esse quidem quam reiciendis esse odit excepturi. Vel dolores rerum soluta explicabo vel fugiat eum non."
                />


            </div>
        </StyledContainer>
    )
}