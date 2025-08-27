import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Main pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import OurTeam from './pages/OurTeam'

// Service detail pages
import MVA from './pages/services/MVA'
import PostSurgery from './pages/services/PostSurgery'
import WCB from './pages/services/WCB'
import Electrotherapy from './pages/services/Electrotherapy'
import Acupuncture from './pages/services/Acupuncture'
import Concussion from './pages/services/Concussion'
import PelvicHealth from './pages/services/PelvicHealth'
import Massage from './pages/services/Massage'
import Neuro from './pages/services/Neuro'
import SportsInjury from './pages/services/SportsInjury'
import ScrollToTop from './components/utils/ScrollToTop'
import VinciGomez from './pages/about/VinciGomez'
import CandiceFarren from './pages/about/CandiceFarren'
import Orthotics from './pages/services/Orthotics'

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourTeam" element={<OurTeam />} />

        {/* Service detail routes */}
        <Route path="/services/mva" element={<MVA />} />
        <Route path="/services/post-surgery" element={<PostSurgery />} />
        <Route path="/services/wcb" element={<WCB />} />
        <Route path="/services/electrotherapy" element={<Electrotherapy />} />
        <Route path="/services/acupuncture" element={<Acupuncture />} />
        <Route path="/services/concussion-rehabilitation" element={<Concussion />} />
        <Route path="/services/pelvic-health" element={<PelvicHealth />} />
        <Route path="/services/massage-therapy" element={<Massage />} />
        <Route path="/services/neuro" element={<Neuro />} />
        <Route path="/services/sports-injury" element={<SportsInjury />} />
        <Route path="/services/orthotics" element={<Orthotics />} />
        

        {/* team members */}
        <Route path="/about/vinci-gomez" element={<VinciGomez />} />
        <Route path="/about/candice-farren" element={<CandiceFarren />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
