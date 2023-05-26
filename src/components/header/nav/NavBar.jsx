import { StyledNav, KeyBackground } from './style'
import { useEffect , useState,useRef,useCallback } from 'react';
export function NavBar() {
    const navRef = useRef();
    const [ pageY , setPageY ]  = useState(1);

    window.addEventListener( 'scroll' , () => {
        const page = window.scrollY ;
        if( page ===0 )
            setPageY(1);
        else
            setPageY( page );
  
    }) 
    function handleHome( e ){
        e.target.style.color="#5777ba";
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth",
        })
    }
    function handleApp( e ){
        e.target.style.color="#5777ba"
        window.scrollTo( {
            top:600,
            left:0,
            behavior:"smooth",
        })
    }
    function handleGallery( e ){
        e.target.style.color="#5777ba";
        window.scrollTo({
            top:3450,
            left:0,
            behavior:"smooth",
        })
    }

    const handlePricing = useCallback(
      (e) => {
        
        window.scrollTo({
            top:4870,
            left:0,
            behavior:"smooth",
        })
      },[])

    const handleFAQ = useCallback( () => {
        window.scrollTo({
            top:5590,
            left:0,
            behavior:"smooth",
        })
    },[])

    const handleContact = useCallback( ()=> {
        window.scrollTo( {
            top:6300,
            left:0,
            behavior:"smooth",
        })
    },[])
    
    return (
        <>
        { pageY && (
            <StyledNav pageY = { pageY } ref = { navRef } >
                <span>Appland</span>
    
                <ul>
                    <li onClick ={ handleHome } >
                        Home
                    </li>
                    <li onClick ={ handleApp }>App Features</li>
                    <li  onClick = { handleGallery }>Gallery</li>
                    <li  onClick ={ handlePricing }>Pricing</li>
                    <li  onClick ={ handleFAQ }>F.A.Q</li>
                    <li  onClick ={ handleContact }>Contact Us</li>
                    <li id="get" >Get Started</li>
                </ul>
            </StyledNav>

        ) }
    </>
    )
}