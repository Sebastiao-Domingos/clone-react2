import { Section } from './style'
import { Testimonials  } from './testimonials/Testimonials'
import { Pricing } from './pricing/Pricing'
import Question from './question/Question'
import Contact from './contact/Contact'
import { Join } from './join/Join'
import { Footer } from '../footer/Footer'
export function Section1() {
  return (
    <Section>
        <Testimonials />
        <Pricing />
        <Question />
        <Contact />
        <Join />
        <Footer />
    </Section>
  )
}
