import React from 'react'

export default function CandiceFarren() {
  return (
    <section className="min-h-screen py-16 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-[17px] leading-relaxed">
        {/* Name and Title */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold">Candice Farren</h1>
          <p className="text-lg text-gray-600">Physiotherapist, BPT</p>
        </div>

        {/* Floating Image */}
        <div className="float-left mr-6 mb-4 w-60">
          <img
            src="https://shawneephysiotherapy.ca/wp-content/uploads/2024/08/image-5-570x696.jpg" // Replace with Candice's actual image path
            alt="Candice Farren"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        {/* Biography */}
        <p>
          Candice is a dedicated physiotherapist with a Bachelor’s degree in Physiotherapy. She aims to deliver
          high-quality care with her extensive experience in orthopedics, women’s pelvic health, neuromuscular
          rehabilitation, temporomandibular joint (TMJ) rehabilitation, concussion rehabilitation, and
          cardio-respiratory care.
        </p>
        <p>
          She completed her Bachelor’s in Physiotherapy in 2003, after which she worked at Breach Candy Hospital,
          Mumbai, gaining experience in orthopedics, neuromuscular care, cardio-respiratory therapy, and the surgical ICU.
        </p>
        <p>
          From 2004 to 2016, Candice practiced physiotherapy in the Kingdom of Bahrain. She now continues her
          physiotherapy career in orthopedics, with a focus on identifying the root causes of movement dysfunction and
          retraining the body through optimal movement patterns.
        </p>
        <p>
          Candice believes strongly in evidence-based practice and uses an individualized, patient-centered approach.
          She understands that every person has different needs, goals, and expectations. Her treatment incorporates
          manual therapy, exercise programs, functional dry needling, education, soft tissue work, and joint
          mobilizations.
        </p>
        <p className="clear-left">
          She encourages patients to adopt exercise as a lifestyle to bring about long-lasting, positive functional
          outcomes. When not at work, Candice enjoys spending time with her family and exploring new places.
        </p>

        {/* Expertise Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Expertise</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Orthopedics</li>
            <li>Women’s pelvic health</li>
            <li>Neuromuscular rehabilitation</li>
            <li>Temporomandibular joint rehabilitation</li>
            <li>Concussion rehabilitation</li>
            <li>Cardio-respiratory care</li>
            <li>Manual therapy</li>
            <li>Exercise therapy</li>
            <li>Functional dry needling</li>
            <li>Multimodal treatment planning</li>
          </ul>
        </div>

        {/* Approach */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
          <p>
            At Anderson Physiotherapy, we provide personalized care and address each patient’s unique needs through
            collaborative treatment. Candice’s care is rooted in evidence-based practice, focusing on manual therapy,
            exercise, education, and functional outcomes to help patients return to a pain-free lifestyle.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-white border border-gray-300 rounded-lg shadow p-6 text-center mt-7 max-w-4xl">
          <h2 className="text-xl font-semibold mb-2">Book Your Assessment with Candice Farren Today</h2>
          <p className="font-medium text-blue-600">
            📞 Call (825) 415-5403 or 📧 email info@andersonphysiotherapy.ca
          </p>
        </div>
      </div>
    </section>
  )
}
