// pages/services/orthotics.jsx
import React from 'react'
import { Link } from 'react-router-dom'


export default function Orthotics() {
  return (
    <section className="min-h-screen py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Custom Orthotics for Foot Support and Alignment
        </h1>

        {/* Intro */}
        <p className="mb-6 text-lg leading-relaxed">
          Custom orthotics are foot supports designed to match your foot shape and walking pattern.
          They can help redistribute pressure, support arches, and assist with alignment.
          Our team assesses your needs and provides a device that fits your daily footwear and activities.
        </p>
        <p className="mb-10 text-lg leading-relaxed">
          Orthotics may be useful for work, sport, or everyday use.
          The goal is a comfortable fit that supports movement during regular tasks.
        </p>

        {/* What They Are */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">What Are Custom Orthotics?</h2>
        <p className="mb-8 text-lg leading-relaxed">
          Custom orthotics are inserts made from your measurements.
          Materials and stiffness vary based on activity level, footwear type, and clinical findings.
          They are different from over-the-counter insoles because they are shaped from your assessment.
        </p>

        {/* Signs You Might Benefit */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Common Reasons People Choose Orthotics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {[
            'Foot fatigue during standing or walking',
            'Arch soreness or heel discomfort',
            'Shin or knee irritation with activity',
            'Uneven shoe wear patterns',
            'Recurring calluses or forefoot pressure',
            'Postural alignment concerns starting at the feet',
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#8ec4f4] p-4 rounded-lg shadow-sm border border-gray-100 text-md"
            >
              {item}
            </div>
          ))}
        </div>

        {/* How It Works */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Fitting and Care Process</h2>
        <ul className="list-disc pl-6 space-y-3 text-base mb-12">
          <li>
            <span className="font-semibold text-gray-700">Assessment –</span> History, footwear review, and gait analysis to understand your goals and pressure points.
          </li>
          <li>
            <span className="font-semibold text-gray-700">Measurements –</span> Foot measurements or a 3D impression to capture structure and alignment.
          </li>
          <li>
            <span className="font-semibold text-gray-700">Device Selection –</span> Material and design are chosen based on activity level and footwear style.
          </li>
          <li>
            <span className="font-semibold text-gray-700">Fitting –</span> Initial fitting with comfort checks and guidance on gradual break-in.
          </li>
          <li>
            <span className="font-semibold text-gray-700">Follow-Up –</span> Review of comfort, function, and any adjustments if needed.
          </li>
        </ul>

        {/* Conditions Supported */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Conditions Orthotics May Support</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {[
            'Plantar fascia irritation',
            'Flat arches or high arches',
            'Achilles tendon irritation',
            'Shin discomfort with activity',
            'Knee tracking concerns',
            'Forefoot overload or metatarsalgia',
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#8ec4f4] p-4 rounded-lg shadow-sm border border-gray-100 text-md"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Types of Orthotics */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Types and Materials</h2>
        <ul className="list-disc pl-6 space-y-3 text-base mb-12">
          <li>Everyday supports for walking and standing</li>
          <li>Sport-focused designs for running or field activities</li>
          <li>Dress shoe profiles for lower-volume footwear</li>
          <li>Varied materials (soft, semi-rigid, rigid) based on comfort and activity</li>
          <li>Top covers selected for cushioning, grip, and durability</li>
        </ul>

        {/* Care & Coverage */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Care and Coverage</h2>
        <ul className="list-disc pl-6 space-y-3 text-base mb-12">
          <li>Gradual break-in is recommended to allow your feet to adapt</li>
          <li>Rotate footwear when possible and keep inserts dry and clean</li>
          <li>Coverage varies by plan; itemized receipts can be provided on request</li>
        </ul>
        <Link
                to="https://andersonphysiotherapy.janeapp.com/"
                className="mt-6 mx-auto inline-block bg-[#dce2f9] text-black px-6 py-3 rounded shadow hover:bg-blue-800 hover:text-white transition"
              >
                Book an appointment
        </Link>
      </div>
    </section>
  )
}
