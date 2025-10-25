import React from 'react'

export default function Ria() {
  return (
    <section className="min-h-screen py-16 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-[17px] leading-relaxed">
        {/* Name and Title */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold">Ria Jasmine De Leon</h1>
          <p className="text-lg text-gray-600">Physiotherapist</p>
        </div>

        {/* Floating Image */}
        <div className="float-left mr-6 mb-4 w-60">
          <img
            src="/Ria.jpeg"
            alt="Ria Jasmine De Leon"
            className="rounded-xl shadow-md w-full object-cover h-80"
          />
        </div>

        {/* Biography */}
        <p>
          Ria is a dedicated physiotherapist serving the Calgary community, committed to evidence-based practice to help
          patients achieve optimal recovery and return to full function. She has certifications in concussion management
          and treatment for low back pain and possesses expertise in manipulation of the rib, cervical, and thoracic spine
          to effectively address musculoskeletal dysfunction.
        </p>
        <p>
          She is also highly experienced in managing complex recovery pathways, including cases involving Motor Vehicle
          Accidents (MVA) and the Workers’ Compensation Board (WCB), ensuring thorough and effective rehabilitation for
          all patients.
        </p>

        {/* Services Section */}
        <div className="mt-10 clear-left">
          <h2 className="text-2xl font-semibold mb-2">Physiotherapy Services</h2>
          <div className="grid sm:grid-cols-2 gap-y-1">
            <ul className="list-disc pl-6 space-y-1">
              <li>Comprehensive Physiotherapy Assessments & Treatments</li>
              <li>Complex & Multi-Region Rehabilitation Programs</li>
              <li>Seniors Physiotherapy and Mobility Care</li>
              <li>Motor Vehicle Accident (MVA) Recovery Programs</li>
              <li>WCB & Disability Rehabilitation</li>
            </ul>
            <ul className="list-disc pl-6 space-y-1">
              <li>Concussion & Neurological Rehabilitation</li>
              <li>Shockwave Therapy & Soft Tissue Management</li>
              <li>Custom Foot Orthotics & Posture Correction</li>
              <li>Manual Therapy & Exercise Prescription</li>
              <li>Patient Education & Long-Term Recovery Planning</li>
            </ul>
          </div>
        </div>

        {/* Approach */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
          <p>
            At Anderson Physiotherapy, Ria focuses on restoring function and movement through evidence-based methods,
            manual therapy, and individualized treatment plans. Her approach ensures every patient receives effective
            and compassionate care tailored to their recovery goals.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-white border border-gray-300 rounded-lg shadow p-6 text-center mt-7 max-w-4xl">
          <h2 className="text-xl font-semibold mb-2">Book Your Assessment with Ria Jasmine De Leon Today</h2>
          <p className="font-medium text-blue-600">
            📞 Call (825) 415-5406 or 📧 email info@andersonphysiotherapy.ca
          </p>
        </div>
      </div>
    </section>
  )
}
