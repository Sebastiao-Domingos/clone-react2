import { StyledDiv } from './style'
import photo from '../../../../assets/img/details-1.png'
import { Paragraph } from '../../paragraph/Paragraph'
import { Icon } from  '../icon/Icon'
export function Container2(){


    return (
        <StyledDiv>
            <img src={ photo } alt="ola como estas ....." />
            <div className = 'content'>
                <h4>
                    Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                </h4>
                <p className ="italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul>
                    <li> <Icon />  Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li> <Icon /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li> <Icon /> Iure at voluptas aspernatur dignissimos doloribus repudiandae.</li>
                    <li> <Icon /> Est ipsa assumenda id facilis nesciunt placeat sed doloribus praesentium.</li>
                </ul>

                <Paragraph 
                    text="Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita omnis eum consequatur non. Sed in asperiores aut repellendus. Error quisquam ab maiores. Quibusdam sit in officia"
                />

            </div>
        </StyledDiv>
    )
}