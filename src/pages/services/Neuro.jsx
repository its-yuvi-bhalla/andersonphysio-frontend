// pages/services/NeuroPhysiotherapy.jsx
import React from 'react'

export default function NeuroPhysiotherapy() {
  return (
    <section className="min-h-screen py-20 px-6 bg-[#f8f8f8] text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold mb-8">Neuro Physiotherapy</h1>

        {/* First block with image on the left */}
        <div className="md:flex items-start gap-6">
          <img
            src="../../neuro.jpg"
            alt="Neurological Therapy Session"
            className="md:w-1/2 w-full h-auto rounded-lg shadow mb-6 md:mb-0"
          />
          <div className="flex-1">
            <p className="mb-4">
              People surviving conditions such as Stroke, Multiple Sclerosis, Neuro diseases, Paralysis, Muscular
              Dystrophy, Guillain-Barre Syndrome, Parkinson’s disease, etc. have disorders of the nervous system.
              These individuals often need to relearn basic motor skills due to damage in the brain, spinal cord, or
              peripheral nerves.
            </p>
            <p className="mb-4">
              Neuro physiotherapy focuses on regaining essential skills to improve independence in daily activities,
              such as walking, sitting, and personal care.
            </p>
          </div>
        </div>

        {/* Second block with image on the right */}
        <div className="md:flex flex-row-reverse items-start gap-6">
          <img
            src="https://shawneephysiotherapy.ca/wp-content/uploads/2024/07/WhatsApp-Image-2025-05-29-at-10.38.46-AM-1024x683.jpeg"
            alt="Neuro Rehab Exercise"
            className="md:w-1/2 w-full h-auto rounded-lg shadow mb-6 md:mb-0"
          />
          <div className="flex-1">
            <p className="mb-4">
              At Anderson Physiotherapy Clinic, we follow a <strong>4-step standardized neurological assessment</strong> to
              design an effective treatment plan tailored to each patient’s condition.
            </p>
            <p className="mb-4">Our treatment strategies include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Education and promotion of self-management</li>
              <li>Hands-on physiotherapy (e.g. joint mobilizations, soft tissue techniques)</li>
              <li>Balance and gait retraining</li>
              <li>Sensory and motor re-education</li>
              <li>Pain management strategies</li>
              <li>Practice of daily living activities</li>
              <li>Caregiver training for safe movement and positioning</li>
            </ul>
            <p className="mt-4">
              Our goal is to help patients restore strength, relearn movements, and regain independence with
              compassionate, evidence-based care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
