const insurers = [
  { name: 'Canada Life', img: 'th-insurer-Canada-life-EN.webp' },
  { name: 'Alberta Blue Cross', img: 'the-physio-care-insurer-alberta-blue-cross.webp' },
  { name: 'Manulife', img: 'the-physio-care-insurer-manulife-en-logo.webp' },
  { name: 'Sun Life', img: 'the-physio-care-insurer-sunlife.webp' },
  { name: 'Maximum Benefit', img: 'the-physio-care-insurer-maximum-benefit-en-logo.webp' },
  { name: 'People Corporation', img: 'the-physio-care-people-corporation-logo-en.webp' },
  { name: 'Medavie Blue Cross', img: 'mbc-logo-en.png' },
  { name: 'GreenShield', img: 'Screenshot_1-1.png' },
  { name: 'Empire Life', img: 'logo-1.png' },
  { name: 'Desjardins', img: 'Desjardins-Insurance.png' },
  { name: 'D.A. Townley', img: 'the-physio-care-da-townley-logo.webp' },
  { name: 'BPA', img: 'the-physio-care-insurer-bpa-logo-green.webp' },
  { name: 'Equitable', img: 'Equitable.svg' },
  { name: 'GroupHEALTH', img: 'GH_Logo_BLUE-410x91.webp' },
  { name: 'GroupSource', img: 'GroupSource_40-years_colour_130x75.webp' },
]

export default function DirectBillingPartners() {
  return (
   <section className="bg-white py-16 px-4 text-center border shadow-4xl rounded-xl">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">
        Participating Direct Billing Insurers
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
        {insurers.map(({ name, img }, index) => (
          <div key={index} className="space-y-2">
            <img
              src={`./insurers/${img}`}
              alt={name}
              className="h-12 mx-auto object-contain"
              loading="lazy"
            />
            <p className="text-sm text-gray-600">{name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
