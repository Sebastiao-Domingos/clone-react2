import { StyledForm } from './style'
import { useState,useEffect,useCallback } from 'react'
export default function Form() {
  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ message, setMessage ] = useState();
  const [ subject , setSubject ] = useState();

  const handleMessage = useCallback( (e) => {
    e.preventDefault();
    alert( 'enviado com sucesso ')
  },[])

  
  return (
    <StyledForm onSubmit = { handleMessage }>
        <input type="text"  placeholder = "Your Name"
          onInput={ e => setName( e.target.value )}
          value={ name }
        />
        <input type="text"  placeholder = "Your Email"
          onInput={ e => setEmail( e.taget.value )}
          value = { email }
        />
        <input type="text"  placeholder = "Subject"
          onInput={ e => setSubject( e.target.value ) }
          value ={ subject }
        />
        <textarea name="message" id="sms" cols="30" rows="7" placeholder ="Message"
          onInput={ e => setMessage( e.target.value ) }
          value = { message }
        ></textarea>
        <input type="submit" value="Send Message" />
    </StyledForm>
  )
}
