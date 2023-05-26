import { StyledDiv} from './style'
import { Title4 } from '../titles/Title4'
import { Paragraph } from '../../paragraph/Paragraph'
import photo from '../../../../assets/img/details-2.png'
export function Container3(){

    return (
        <StyledDiv>
            <div>
                <Title4 
                    text="Corporis temporibus maiores provident"
                />
                <p className ='italic'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Paragraph 
                    text="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                />
                <Paragraph
                    text="Inventore id enim dolor dicta qui et magni molestiae. Mollitia optio officia illum ut cupiditate eos autem. Soluta dolorum repellendus repellat amet autem rerum illum in. Quibusdam occaecati est nisi esse. Saepe aut dignissimos distinctio id enim."
                />

            </div>
            <img src={photo} alt="" />
        </StyledDiv>
    )
}