import React from 'react'

export default function VinciGomez() {
  return (
    <section className="min-h-screen py-16 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-[17px] leading-relaxed">
        {/* Name and Title */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold">Vinci Gomez</h1>
          <p className="text-lg text-gray-600">Physiotherapist, B.Sc. P.T, MPT</p>
        </div>

        {/* First Floating Image - Left */}
        <div className="float-left mr-6 mb-4 w-60">
          <img
            src="https://shawneephysiotherapy.ca/wp-content/uploads/2024/08/image-4-570x696.jpg"
            alt="Vinci Gomez"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        {/* Paragraphs wrapping first image */}
        <p>
          Vinci is a skilled physiotherapist with experience working with diverse populations, including those with
          motor vehicle accidents, sports injuries, and chronic pain. He completed his Master’s in Physiotherapy with
          a specialization in Neurorehabilitation.
        </p>
        <br />
        <p>
          Vinci has practiced extensively in the Kingdom of Bahrain and in Canada, treating patients with stroke, brain
          injuries, spinal cord injuries, and chronic pain. His experience includes supervising neuro vestibular rehab
          teams and working with veterans in BC and Alberta.
        </p>
        <br />
        <p>
          He is known for building rapport with patients from all backgrounds and creating a supportive environment
          using his clinical skills and sense of humor. Vinci believes in manual therapy, individualized exercise
          prescription, and patient education to ensure long-term recovery.
        </p>

        {/* Second Floating Image - Right */}
        <div className="float-right ml-6 mt-7 mb-4 w-60 ">
          <img
            src="https://shawneephysiotherapy.ca/wp-content/uploads/2024/07/WhatsApp-Image-2025-05-30-at-2.04.54-PM.jpeg"
            alt="Clinic work"
            className="rounded-xl shadow-md w-full object-cover h-auto"
          />
        </div>
<br />
        {/* Paragraphs wrapping second image */}
        <p>
          He is certified in <strong> Dry Needling </strong> and <strong> Vestibular Rehabilitation Therapy</strong> and is deeply committed to personalized
          care. Vinci integrates clinical precision with compassion, focusing on trust and communication as pillars of
          his treatment.
        </p>
        <br />
        <p>
          Keeping up with modern research and techniques is a priority for him. He is continuously expanding his
          expertise through professional development and active research.
        </p>
        <br />
        <p>
          Outside the clinic, Vinci enjoys spending time with his two sons on the soccer field, exploring scenic routes
          on his motorcycle, and taking road trips with his family.
        </p>

        {/* Expertise Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Expertise</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Manual therapy</li>
            <li>Individualized exercise prescription</li>
            <li>Patient education</li>
            <li>Dry needling</li>
            <li>Vestibular Rehab (Vertigo & Dizziness)</li>
            <li>Concussion Rehabilitation</li>
            <li>GLAD Hip and Knee Management</li>
            <li>Joint Replacement Rehab</li>
            <li>Knee patellofemoral disorders</li>
            <li>Elbow tendinopathies (tennis/golfer’s elbow)</li>
            <li>Carpal tunnel syndrome (conservative & post-surgical)</li>
          </ul>
        </div>

        {/* Approach */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Approach</h2>
          <p>
            Vinci values individualized, patient-centered care and believes strong professional relationships are key
            to successful rehabilitation. He continuously upgrades his knowledge through research and education.
          </p>
        </div>

        {/* Interests */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Personal Interests</h2>
          <p>
            Vinci loves spending time with family, exploring new places, enjoying good food, and indulging his passion
            for sports cars and motorcycles.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-white border border-gray-300 rounded-lg shadow p-6 text-center mt-7 max-w-4xl">
          <h2 className="text-xl font-semibold mb-2">Book Your Assessment with Vinci Gomez Today</h2>
          <p className="font-medium text-blue-600">
            📞 Call (825) 415-5403 or 📧 email info@andersonphysiotherapy.ca
          </p>
        </div>
      </div>
    </section>
  )
}
