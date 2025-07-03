import React from 'react'

export default function Electrotherapy() {
  return (
    <section className="min-h-screen py-20 px-6 bg-[#f7f7f7] text-gray-800">
      <div className="max-w-5xl mx-auto">
        <img
          src="../../electrotherapy.jpg"
          alt="Electrotherapy in Physiotherapy"
          className="w-full h-auto object-cover rounded-lg shadow mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">Electrotherapy in Physiotherapy</h1>
        <h2 className="text-2xl font-semibold mb-6">A Powerful Tool for Pain Relief and Healing</h2>

        <p className="mb-4">
          Electrotherapy is a cutting-edge treatment used in physiotherapy to manage pain, stimulate muscles, and accelerate healing.
          It involves the use of electrical energy to target injured tissues, reduce inflammation, and improve circulation.
          This non-invasive technique is a popular choice for patients seeking effective rehabilitation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Electrotherapy in Physiotherapy</h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>TENS:</strong> Blocks pain signals via nerve stimulation.</li>
          <li><strong>IFT:</strong> Medium-frequency current to reduce pain and swelling.</li>
          <li><strong>EMS:</strong> Activates muscles to prevent atrophy.</li>
          <li><strong>Ultrasound Therapy:</strong> Sound waves for deep tissue repair.</li>
          <li><strong>PEMF:</strong> Enhances healing with electromagnetic fields.</li>
          <li><strong>Galvanic Stimulation:</strong> DC current for acute recovery.</li>
          <li><strong>SWT:</strong> Acoustic pulses for chronic tissue repair.</li>
          <li><strong>Class 4 Laser:</strong> Deep laser healing for inflammation and pain.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Benefits of Electrotherapy</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Effective pain relief for acute and chronic conditions</li>
          <li>Enhanced muscle strength and re-education</li>
          <li>Improved circulation and tissue regeneration</li>
          <li>Reduces inflammation and spasms</li>
          <li>Non-invasive and drug-free solution</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Your Recovery Starts Here</h2>
        <p className="mb-4">
          At Anderson Physiotherapy and Massage Clinic, our skilled physiotherapists customize electrotherapy sessions to match your condition and recovery goals.
          Whether you're recovering from surgery or managing chronic pain, we’re here to help.
        </p>

        <p className="mb-4 font-semibold text-lg">
          Book Your Electrotherapy Session Today
        </p>
        <p className="text-blue-600 font-medium mb-10">
          Boost your recovery with the latest in physiotherapy technology. Let us help you heal, move, and thrive!
        </p>

        {/* Two actual <img> tags side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <img
            src="../../Plantar-fascitis.jpeg"
            alt="Electrotherapy Device"
            className="w-full h-96 object-cover rounded-lg shadow"
          />
          <img
            src="../../Electrotherapy-in-Physiotherapyhome-1.jpg"
            alt="Physiotherapist Performing Electrotherapy"
            className="w-full h-96 object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  )
}
