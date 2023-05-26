import { Li } from './style'
import { useRef , useState } from 'react'
export default function Item( {title , text , pos }) {
  const ref = useRef();
  const [ showed ,setShowed ] = useState( false )

  function handleRef(e){
    const listQuestions = document.querySelectorAll('.listQuestion p');
    const titles = document.querySelectorAll('.listQuestion h5');
    const icons = document.querySelectorAll('.listQuestion span');
    listQuestions.forEach( ( question , index ) => {
      if( index !== e ){
        question.style.display = 'none';
        titles[ index ].style.color="#343A40";
        icons[ index ].style.transform ="rotate(0deg)"
      } 
    })
    
    setShowed( !showed );
    if( !showed )
      ref.current.style.transform="rotate(180deg)";
    else
      ref.current.style.transform="rotate(0deg)";
  }

  return (
    <Li showed ={showed} key ={ pos}>
      <span onClick ={ handleRef } ref ={ ref }> v </span>
      <h5  onClick ={ ()=> handleRef( pos ) }> {title}</h5>
      { showed &&(
        <p >
          { text }
        </p>
      )}
    </Li>
  )
}
