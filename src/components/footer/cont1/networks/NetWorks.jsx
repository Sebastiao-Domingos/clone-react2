import { Div } from './style'
import { FaFacebook,FaTwitter , FaInstagram , FaSkype } from 'react-icons/fa'
export default function NetWorks() {
  return (
    <Div>
        <h3>Our Social Networks</h3>
        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
        <div>
            <div>
                <FaTwitter />
            </div>
            <div>
                <FaFacebook />
            </div>
            <div>
                <FaInstagram />
            </div>
            <div>
                <FaSkype />
            </div>
            <div>
                <FaTwitter />
            </div>
        </div>
    </Div>
  )
}
