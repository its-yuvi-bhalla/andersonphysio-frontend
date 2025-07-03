// components/ExcellenceSection.jsx

export default function ExcellenceSection() {
  return (
    <section className="bg-[#ffffff] py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left content */}
        <div>
          <h2 className="text-4xl leading-tight text-gray-900">
            Excellence in care,<br />delivered with pride
          </h2>
          <p className="mt-6 text-gray-700 text-sm leading-relaxed">
            Anderson Physiotherapy and Massage Clinic offers patient-centered care, including manual therapy, shockwave therapy, acupuncture, dry needling, and massage therapy. Our experienced team helps patients recover from injuries, manage pain, and improve mobility and well-being.
          </p>
        </div>

        {/* Right image */}
       <div>
  <img
    src="./back-massage.jpg"
    alt="Back Massage"
    className="rounded-lg shadow-md w-full h-72 object-cover"
  />
</div>

      </div>
    </section>
  )
}
