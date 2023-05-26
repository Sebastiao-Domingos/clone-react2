import { StyledHeader } from './styles'
import { Button } from './button/Button'
import { NavBar } from './nav/NavBar'
import { FaApple ,FaGooglePlay } from 'react-icons/fa'
import fhoto from '../../assets/img/hero-img.png'
export function Header() {

    return (
        <StyledHeader>
            <NavBar />
            <div className ='content'>
                <div ClassName = 'text'>
                    <h1>App landing page template</h1>
                    <h2>
                    Lorem ipsum dolor sit amet, tota senserit percipitur ius 
                    ut, usu et fastidii forensibus voluptatibus. His ei nihil feugait
                    </h2>

                    <div>
                        <Button 
                            icon = { <FaGooglePlay /> }
                            text='Google Play'
                        />

                        <Button 
                            icon={ <FaApple />}    
                            text = 'App Store'
                        />
                    </div>
                </div>
                <img src={ fhoto } alt="bacground" />
            </div>
        </StyledHeader>
    )
}