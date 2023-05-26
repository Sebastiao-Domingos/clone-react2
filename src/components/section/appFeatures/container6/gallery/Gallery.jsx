import { Div } from './style'
import photo1 from '../../../../../assets/img/gallery/gallery-1.png'
import photo2 from '../../../../../assets/img/gallery/gallery-2.png'
import photo3 from '../../../../../assets/img/gallery/gallery-3.png'
import photo4 from '../../../../../assets/img/gallery/gallery-4.png'
import photo5 from '../../../../../assets/img/gallery/gallery-5.png'
import photo6 from '../../../../../assets/img/gallery/gallery-6.png'
import photo7 from '../../../../../assets/img/gallery/gallery-7.png'
import photo8 from '../../../../../assets/img/gallery/gallery-8.png'
import photo9 from '../../../../../assets/img/gallery/gallery-9.png'
import photo10 from '../../../../../assets/img/gallery/gallery-10.png'
import photo11 from '../../../../../assets/img/gallery/gallery-11.png'
import photo12 from '../../../../../assets/img/gallery/gallery-12.png'
import { useRef,useEffect,useState  } from 'react';


export const Gallery = () => {
    const imgs = [photo10 ,photo11,photo12, photo1 ,photo2, photo3 , photo4, photo5, photo6, photo7,photo8,photo9,photo10 ,photo11,photo12,photo1 ,photo2, photo3,photo4 ];
    const gallery = useRef();
    
    useEffect( ()=> {
        gallery.current.scrollTo( {
            left:80,
        })
    } , [])

    useEffect( ()=> {
        const images = document.querySelectorAll('.gallery img');
        const labels = document.querySelectorAll('.content-labels span')
        let cont =80;
        let contImg = 3;
        images[contImg].style.border="7px solid #5777ba";
        images[contImg].style.transform="scale(1.1)"
        images[contImg].style.zIndex='1';
        labels[ contImg - 3 ].style.background='#5777ba';

        setInterval(() => {
            if( cont < 2200 ){
                cont += 200 ;
                contImg++;
                gallery.current.scrollTo({
                    left:cont,
                    behavior:"smooth",
                })

                labels.forEach( ( label , index ) => {
                    if( (contImg - 3) !== index ) {
                        label.style.background="#EFF2F8";
                    }else {
                        label.style.background="#5777ba";
                    }
                });

                images.forEach( ( img , index  ) => {
                    
                    if( index === contImg ) {
                        img.style.border="7px solid #5777ba";
                        img.style.transform="scale(1.1)"
                        img.style.zIndex='1';

                    }else {
                        img.style.border="none";
                        img.style.transform="scale(1)"
                        img.style.zIndex='0';

                    }
                } )

            }else{
                cont += 200 ;
                gallery.current.scrollTo({
                    left:cont,
                    behavior:"smooth",
                })
                cont=80;
                contImg = 3;
                gallery.current.scrollTo({
                    left:cont,
                })

                images[contImg].style.border="10px solid #5777ba";
                images[contImg].style.transform="scale(1.1)"
                images[contImg].style.zIndex='1';
                labels[ contImg - 3 ].style.background='#5777ba';
                labels[ labels.length-1 ].style.background='#EFF2F8';

            } 
        }, 4000);
    },[])

    return (
        <Div>
            <div  ref={ gallery } className ="gallery">
                { imgs.map( (img ,index  ) => (
                    <img src={ img } alt="ola como..." key={ index } />
                ))
                }
            </div>
            <article className ="content-labels">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </article>
        </Div>
    )
} 