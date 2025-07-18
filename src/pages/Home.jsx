import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import ServiceCarousel from '../components/ServiceCarousel'
import ExcellenceSection from '../components/ExcellenceSection'
import WhatWeOffer from '../components/WhatWeOffer'
import HomeVisitBanner from '../components/HomeVisitBanner'

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-[url('https://i.imgur.com/PmP4j5T_d.webp?maxwidth=1520&fidelity=grand')] bg-cover bg-center min-h-[90vh] bg-no-repeat text-white">
        <div className="bg-black/30 min-h-[90vh] flex items-center">
          <div className="max-w-7xl mx-auto w-full px-4 grid md:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold leading-tight">
                Move Better. Live Better.
              </h1>
              <p className="mt-4">
                Evidence-based physiotherapy in a welcoming clinic environment.
              </p>
              <Link
                to="https://andersonphysiotherapy.janeapp.com/"
                className="mt-6 inline-block bg-[#dce2f9] text-black px-6 py-3 rounded shadow hover:bg-blue-800 hover:text-white transition"
              >
                Book an appointment
              </Link>
            </div>

            {/* Right info card */}
            <div className="hidden md:flex flex-col justify-center bg-white/90 p-6 rounded shadow text-blue-900">
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose Anderson Physiotherapy?
              </h2>
              <ul className="space-y-2 text-sm">
                <li>✔️ Evidence-Based Physiotherapy</li>
                <li>✔️ Friendly & Experienced Therapists</li>
                <li>✔️ Same-Day & Weekend Appointments</li>
                <li>✔️ Direct Billing Available</li>
              </ul>
              <p className="mt-6 italic text-sm text-gray-700">
                "My shoulder pain is gone and I feel stronger than ever!" – Happy Patient
              </p>
            </div>
          </div>
        </div>
      </section>
      <ServiceCarousel/>
      <ExcellenceSection/>
      <WhatWeOffer/>
      <HomeVisitBanner/>
      <ContactForm/>
    </>
  );
}
