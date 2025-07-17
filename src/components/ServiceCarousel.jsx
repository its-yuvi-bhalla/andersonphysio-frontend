import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'   // ⬅️ add

const services = [
  {
    title: "Motor Vehicle Accident (MVA) Injury Rehabilitation",
    category: "MVA",
    img: "./mva.jpg",
  },
  {
    title: "Post-Surgery Rehabilitation in Calgary",
    category: "Post-surgery",
    img: "./post-surgery.jpeg",
  },
  {
    title: "WCB Injury Rehabilitation",
    category: "WCB",
    img: "./wcb.jpg",
  },
  {
    title: "Electrotherapy in Physiotherapy",
    category: "Electrotherapy",
    img: "./electrotherapy.jpg",
  },
  {
    title: "Acupuncture/ Dry Needling Therapy",
    category: "Acupuncture",
    img: "./acupuncture.jpeg",
  },
  {
    title: "Vestibular and Concussion Rehabilitation",
    category: "Concussion Rehabilitation",
    img: "./concussion.jpg",
  },
  {
    title: "Pelvic Health Physiotherapy",
    category: "Pelvic health",
    img: "./pelvic-health.jpg",
  },
  {
    title: "Massage Therapy",
    category: "Massage therapy",
    img: "./massage.jpg",
  },
  {
    title: "Neuro Physiotherapy",
    category: "Neuro",
    img: "./neuro.jpg",
  },
  {
    title: "Sports Injury Rehabilitation",
    category: "Sports Injury",
    img: "https://shawneephysiotherapy.ca/wp-content/uploads/2024/07/WhatsApp-Image-2025-05-30-at-2.04.54-PM.jpeg",
  },
]

export default function ServiceCarousel() {
  const scrollRef = useRef()
  const navigate  = useNavigate()

  const scroll = dir => {
    const { current } = scrollRef
    if (current) current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' })
  }

  // helper to slugify category => url
  const toSlug = str => str.toLowerCase().replace(/ /g, '-')

  return (
    <section className="py-16 bg-[#f1f1f1] relative scrollbar-hide shadow-xl">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* title */}
        <div className="flex justify-around items-center mb-6">
          <h2 className="text-4xl font-bold">Our Services</h2>
        </div>

        {/* left btn */}
        <button onClick={() => scroll('left')} className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-white border border-gray-200 hover:bg-gray-100 rounded-full p-2 shadow ring-1 ring-gray-300">
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* cards */}
        <div ref={scrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {services.map((s, i) => (
            <div
              key={i}
              onClick={() => navigate(`/services/${toSlug(s.category)}`)}   
              className="cursor-pointer min-w-[300px] h-[320px] bg-cover bg-center bg-gray-300 text-white flex flex-col justify-end p-4 rounded-lg relative overflow-hidden"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full shadow">
                {String(i + 1).padStart(2, '0')}.
              </div>
              <div className="relative">
                <h3 className="text-xl font-bold leading-snug">{s.title}</h3>
                <p className="text-sm text-gray-200 mt-1">{s.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* right btn */}
        <button onClick={() => scroll('right')} className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-white border border-gray-200 hover:bg-gray-100 rounded-full p-2 shadow ring-1 ring-gray-300">
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  )
}
