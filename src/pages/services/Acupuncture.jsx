import React from 'react'

export default function Acupuncture() {
  return (
    <section className="min-h-screen py-20 px-6 bg-[#f7f7f7] text-gray-800">
      <div className="max-w-5xl mx-auto">
        <img
          src="../../acupuncture.jpeg"
          alt="Acupuncture and Dry Needling"
          className="w-full h-auto object-cover rounded-lg shadow mb-8"
        />

        <h1 className="text-4xl font-bold mb-6">Acupuncture & Dry Needling Therapy</h1>

        <p className="mb-4">
          Acupuncture is a traditional Chinese medicine technique that involves inserting fine needles into specific points of the body to relieve pain, reduce inflammation, and restore balance. In physiotherapy, it is often used to manage musculoskeletal pain, release muscle tension, and promote natural healing by stimulating the nervous system.
        </p>

        <p className="mb-6">
          Dry needling is a modern treatment technique used by physiotherapists to target muscle trigger points, reduce pain, and restore movement. It involves inserting thin, sterile needles into tight muscle, scar tissue, or knots. This stimulates blood flow and releases muscle tension—highly effective for chronic pain, sports injuries, and muscle tightness.
        </p>

        {/* Call to action box */}
        <div className="bg-white border border-gray-300 rounded-lg shadow p-6 mt-10 text-center">
          <h2 className="text-xl font-semibold mb-2">Ready to Feel Better?</h2>
          <p className="mb-4">Book your acupuncture or dry needling session with our licensed physiotherapists today.</p>
          <p className="font-medium text-blue-600">
            📞 Call us at (825) 415-5403 or 📧 email info@andersonphysiotherapy.ca
          </p>
        </div>
      </div>
    </section>
  )
}
