import React from 'react'

export default function Concussion() {
  return (
    <section className="min-h-screen py-20 px-6 bg-[#f9f9f9] text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Vestibular Section */}
<div>
  <h1 className="text-4xl font-bold mb-6">Vestibular Rehabilitation</h1>
  <div className="flex flex-col md:flex-row gap-6 items-start">
    {/* Image on the left */}
    <img
      src="https://shawneephysiotherapy.ca/wp-content/uploads/2024/07/WhatsApp-Image-2025-05-30-at-2.23.19-PM.jpeg"
      alt="Vestibular Rehabilitation"
      className="w-full md:w-[45%] h-auto object-cover rounded-md shadow"
    />
    
    {/* Text on the right */}
    <div className="flex-1 text-gray-800">
      <p className="mb-4">
        At <strong>Anderson Physiotherapy Clinic</strong>, our specialized vestibular physiotherapists are highly trained in diagnosing and treating a variety of balance and dizziness-related disorders, including vertigo. We understand how disorienting and disruptive these symptoms can be to your daily life, and we’re here to provide compassionate, results-driven care.
      </p>
      <p className="mb-4">
        Vertigo is one of the most common vestibular disorders and can feel like the room is spinning, rocking, or tilting—even while you're completely still. These episodes may come and go, or persist for hours or days, depending on the cause. Vertigo can be accompanied by nausea, vomiting, sweating, blurred vision, and difficulty with coordination or walking.
      </p>
      <p className="mb-4">
        Often, vertigo is a symptom of an underlying issue with the inner ear or the parts of the brain that control balance and spatial orientation. Conditions such as BPPV (Benign Paroxysmal Positional Vertigo), vestibular neuritis, and labyrinthitis are frequently treated using physiotherapy.
      </p>
      <p className="mb-4">
        Vestibular rehabilitation is a specialized form of physiotherapy that involves custom-tailored exercises designed to retrain the brain to compensate for inner ear dysfunction. These exercises help improve gaze stability, posture, and balance while reducing symptoms like dizziness, unsteadiness, and motion sensitivity.
      </p>
      <p className="mb-4">
        With the right therapy plan, many patients experience a significant reduction in symptoms and regain their confidence in walking, working, and participating in day-to-day activities. Our team at Anderson is committed to guiding you every step of the way toward a safer, steadier life.
      </p>
      <p className="mb-4">
        Vestibular rehabilitation physiotherapy involves tailored exercises that retrain the brain to compensate for inner ear dysfunction, improving balance, reducing fall risk, and enhancing overall stability.
      </p>
    </div>
  </div>
</div>


        {/* Concussion Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Concussion Rehabilitation</h2>
          <p className="mb-4 font-medium text-lg text-blue-900">
            Helping You Recover from Concussion Safely and Completely
          </p>
          <p className="mb-4">
            A concussion is a type of mild traumatic brain injury (mTBI) that can affect your physical, cognitive, and
            emotional well-being. At <strong>Anderson Physiotherapy</strong>, we offer structured rehabilitation to
            support recovery—whether your concussion was from sports, a fall, a car accident, or a workplace injury.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Common Concussion Symptoms:</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Headaches or pressure in the head</li>
            <li>Dizziness or balance problems</li>
            <li>Blurred vision or sensitivity to light/noise</li>
            <li>Fatigue or difficulty concentrating</li>
            <li>Memory issues or brain fog</li>
            <li>Irritability, anxiety, or mood changes</li>
            <li>Nausea or disrupted sleep</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Our Program Includes:</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Comprehensive neurological and physical assessment</li>
            <li>Gradual return-to-activity plans (Learn, Work, Play)</li>
            <li>Visual and vestibular therapy</li>
            <li>Cervical spine and posture treatment</li>
            <li>Sub-symptom aerobic exercise therapy</li>
            <li>Cognitive pacing and symptom monitoring</li>
            <li>Education and family support</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-2">What to Expect:</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><strong>Initial Evaluation –</strong> A full assessment of symptoms, history, and lifestyle needs</li>
            <li><strong>Personalized Recovery Plan –</strong> Tailored treatment based on recovery stage</li>
            <li><strong>Collaborative Care –</strong> Communication with physicians, specialists, or schools/workplaces</li>
            <li><strong>Safe Return Guidance –</strong> Gradual re-introduction to activity using evidence-based methods</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Why Choose Our Concussion Clinic?</h3>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Certified experts in concussion and post-concussion care</li>
            <li>Comprehensive, holistic recovery plans</li>
            <li>Physical, cognitive, and emotional support</li>
            <li>Strong emphasis on education and safe reintegration to life</li>
          </ul>

          <p className="mt-4 font-medium">
            If you’re recovering from a concussion, early and appropriate care can make all the difference.
          </p>
          <p className="mb-6">
            Let us help you heal, regain confidence, and get back to the activities you love.
          </p>

          <div className="bg-white border border-gray-300 rounded-lg shadow p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Book Your Assessment Today</h2>
            <p className="mb-4">Take the first step in your vestibular or concussion recovery journey.</p>
            <p className="font-medium text-blue-600">
              📞 Call (825) 415-5406 or 📧 email info@andersonphysiotherapy.ca
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
