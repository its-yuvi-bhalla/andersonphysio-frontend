import FeaturedServices from '../components/FeaturedServices'
import ServiceCarousel from '../components/ServiceCarousel'

export default function Services() {
  return (
    <>
      <ServiceCarousel />
      <section className="bg-white py-16 px-4 shadow-2xl">
    <div className="max-w-5xl mx-auto text-center space-y-6">
    <h2 className="text-4xl font-bold text-gray-800">Exceptional Care from Trusted Professionals</h2>
    <p className="text-lg text-gray-600">
      At Anderson Physiotherapy, we take pride in delivering a holistic, patient-centered approach to rehabilitation and wellness.
      Our team of licensed professionals brings decades of combined experience and a deep commitment to helping you heal, recover, and regain strength.
    </p>
    <p className="text-lg text-gray-600">
      We believe that no two patients are the same — that’s why we personalize every treatment plan to suit your body, your goals, and your lifestyle.
      From physiotherapy and massage to concussion rehab and dry needling, our range of services is designed to support your complete physical well-being.
    </p>
    <p className="text-lg text-gray-600">
      Whether you're recovering from surgery, coping with a sports injury, or simply aiming to improve your quality of life,
      our state-of-the-art facility and compassionate team are here to guide you every step of the way.
    </p>
    <p className="text-lg text-gray-600">
      Discover the difference that expert care can make — because at Anderson Physiotherapy, your health is our passion.
    </p>
  </div>
</section>
      <FeaturedServices text='Extensive knowledge and skill in'/>
    </>
  )
}
