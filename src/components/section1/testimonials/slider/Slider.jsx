import { Div } from './style'
import Card from './card/Card'
import { Buttons } from './buttons/Buttons'
import {p1, p2,p3,p4,p5 } from '../../../../assets/img/testimonials/exportImages'
import { useEffect } from 'react'
export default function Slider() {
  const persons = [
    {
        img:`${p3 }`, name:"Jena Karlis", work :"Store Owner",
        text:"Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
    },
    {
        img:`${p4 }`, name:"Matt Brandon", work :"Freelancer",
        text:"Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
    },
    {
        img:`${p5 }`, name:"John larson", work :"Enterpreneur",
        text:"Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
    },    
    {
        img:`${p1 }`, name:"Saul Goodman", work :"Ceo & Founder",
        text:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
    },
    {
        img:`${p2 }`, name:"Sara Wilsson", work :"Designer",
        text:"Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
    },
    {
        img:`${p3 }`, name:"Jena Karlis", work :"Store Owner",
        text:"Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
    },
    {
        img:`${p4 }`, name:"Matt Brandon", work :"Freelancer",
        text:"Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
    },
    {
        img:`${p5 }`, name:"John larson", work :"Enterpreneur",
        text:"Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
    },
    {
        img:`${p1 }`, name:"Saul Goodman", work :"Ceo & Founder",
        text:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
    },
    {
        img:`${p2 }`, name:"Sara Wilsson", work :"Designer",
        text:"Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
    },
    {
        img:`${p3 }`, name:"Jena Karlis", work :"Store Owner",
        text:"Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
    }, 
  ] 

  useEffect( ()=> {
    const images = document.querySelectorAll(".gallery .item");
    const contentSlider = document.querySelector(".contentSlider");
    const buttons = document.querySelectorAll(".contentButton span");


    let cont = 1545;
    let contButton = 0;
    buttons[contButton].style.background="#5777ba";
    contentSlider.scrollTo({
        top:0,
        left:cont,
    })
    setInterval(() => {
        if( cont <= 4625 ){
            cont += 515;
    
            contentSlider.scrollTo( {
                top:0,
                left:cont ,
                behavior:"smooth",
            })

            if( (cont>=1545 ) && cont  % 2 !== 0 ) {
                contButton++;
            }
            buttons.forEach( ( btn , index ) => {
                if( contButton !== index ){
                    btn.style.background ="#DDDDDD";
                } else {
                    btn.style.background="#5777ba";
                }
            })

        } else {
            contButton =0;
            contentSlider.scrollTo( {
                top:0,
                left:cont ,
                behavior:"smooth",
            })
            cont= 0;
            contentSlider.scrollTo( {
                top:0,
                left:cont ,
            });

        }
    }, 4000);
  } ,[])

  return (
    <Div>
        <div className="contentSlider">
            <div className="gallery">
                { persons.map( ( person , index ) => (
                    <Card 
                        key = { index }
                        img={person.img}
                        name = { person.name }
                        work ={ person.work }
                        text = { person.text }
                    />
                ))} 
            </div>
        </div>
        <Buttons />
    </Div>
  )
}
