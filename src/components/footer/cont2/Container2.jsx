import { Div } from './style' 
import { useCallback } from 'react'
export default function Container2() {
  
  const handler = useCallback(
    () => {
      window.scrollTo( {
        top:0,
        left:0,
        behavior : "smooth",
      })
    },[])
  
  return (
    <Div>
      <p>© Copyright <strong>Appland</strong>. All Rights Reserved</p>
      <p>Designed by <a href="#">BootstrapMade</a></p>
      <button onClick = { handler }>Up</button>
    </Div>
  )
}
