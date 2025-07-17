import AboutIntroSection from '../components/AboutIntroSection'
import FeaturedServices from '../components/FeaturedServices'
import DirectBillingPartners  from '../components/DirectBillingPartners'
import ContactForm from '../components/ContactForm'
import OurTeamSection from '../components/OurTeamSection'


export default function About() {
  return (
    <>
      <AboutIntroSection />
      <FeaturedServices text='Featured Services'/>
      <DirectBillingPartners/>
      <OurTeamSection/>
      <ContactForm/>
    </>
  )
}
