import {
  Cross,
  HeartPulse,
  Brain,
  Syringe,
  Activity,
  Hospital,
  Footprints,
  Car
} from 'lucide-react'

const services = [
  {
    icon: <Cross className="w-8 h-8 text-[#4e9763]" />,
    title: 'Physiotherapy / Pelvic Health Therapy',
    desc: 'Pelvic physiotherapy strengthens muscles, relieves pain, and restores function for better well-being.',
    href: '/services/pelvic-health',
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-[#4e9763]" />,
    title: 'Massage Therapy',
    desc: 'Massage therapy relieves tension, reduces pain, and promotes relaxation through targeted muscle manipulation.',
    href: '/services/massage-therapy',
  },
  {
    icon: <Brain className="w-8 h-8 text-[#4e9763]" />,
    title: 'Vestibular & Concussion Rehab',
    desc: 'Vestibular and concussion rehab improves balance, reduces dizziness, and restores focus through specialized exercises.',
    href: '/services/concussion-rehabilitation',
  },
  {
    icon: <Syringe className="w-8 h-8 text-[#4e9763]" />,
    title: 'Acupuncture / Dry Needling',
    desc: 'Acupuncture and dry needling release pain, relax tension, and promote healing through precise needle placement.',
    href: '/services/acupuncture',
  },
  {
    icon: <Footprints className="w-8 h-8 text-[#4e9763]" />,
    title: 'Custom Orthotics',
    desc: 'Individually designed foot orthotics to improve posture, reduce pain, and support mobility for everyday comfort.',
    href: '/services/orthotics',
  },
  {
    icon: <Hospital className="w-8 h-8 text-[#4e9763]" />,
    title: 'Post-Surgery Rehab',
    desc: 'Accelerated recovery plans to restore movement, reduce pain, and regain independence after surgery.',
    href: '/services/post-surgery',
  },
  {
    icon: <Car className="w-8 h-8 text-[#4e9763]" />,
    title: 'Motor Vehicle Accident (MVA) Rehabilitation',
    desc: 'Comprehensive recovery programs for injuries caused by car accidents, focusing on pain relief, mobility restoration, and long-term wellness.',
    href: '/services/mva',
  },
  {
    icon: <Activity className="w-8 h-8 text-[#4e9763]" />,
    title: 'WCB Rehabilitation',
    desc: 'Comprehensive work injury rehab services under Workers’ Compensation Board programs.',
    href: '/services/wcb',
  },
]

export default function FeaturedServices(opts) {
  return (
    <section className="bg-white py-20 px-4 shadow-4xl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">{opts.text}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center space-y-4 block"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

