// pages/services/SportsInjury.jsx
import React from 'react'

export default function SportsInjury() {
  return (
    <section className="min-h-screen py-20 px-6 bg-[#f8f8f8] text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold mb-6">Sports Injury Rehabilitation</h1>

        <p className="mb-4">
          At <strong>Anderson Physiotherapy and Massage Clinic</strong>, we are experienced in evidence-based sports injury
          rehabilitation designed to help athletes and active individuals recover safely and return to peak performance.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What is Sports Injury Rehabilitation?</h2>
        <p className="mb-4">
          It’s a structured, goal-oriented program tailored to each individual’s needs following an injury sustained
          during physical activity. The focus is on reducing pain, restoring function, and preventing re-injury.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Common Conditions We Treat:</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Muscle strains and ligament sprains</li>
          <li>Tendon injuries (e.g., Achilles, rotator cuff, patellar tendonitis)</li>
          <li>Joint injuries (e.g., ACL tears, meniscus injury, shoulder labrum tear, dislocations)</li>
          <li>Stress fractures</li>
          <li>Post-surgical rehabilitation</li>
        </ul>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <img
            src="https://shawneephysiotherapy.ca/wp-content/uploads/2024/07/WhatsApp-Image-2025-05-30-at-2.04.55-PM-1-1024x768.jpeg"
            alt="Sports Rehab 1"
            className="w-full h-56 object-cover rounded-md shadow"
          />
          <img
            src="https://shawneephysiotherapy.ca/wp-content/uploads/2024/07/WhatsApp-Image-2025-05-30-at-2.04.55-PM-682x1024.jpeg"
            alt="Sports Rehab 2"
            className="w-full h-56 object-cover rounded-md shadow"
          />
          <img
            src="https://shawneephysiotherapy.ca/wp-content/uploads/2024/07/WhatsApp-Image-2025-05-30-at-2.04.52-PM.jpeg"
            alt="Sports Rehab 3"
            className="w-full h-56 object-cover rounded-md shadow"
          />
          <img
            src="https://shawneephysiotherapy.ca/wp-content/uploads/2024/07/WhatsApp-Image-2025-05-30-at-2.04.54-PM.jpeg"
            alt="Sports Rehab 4"
            className="w-full h-56 object-cover rounded-md shadow"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">Our Rehabilitation Approach:</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Assessment & Diagnosis –</strong> Thorough evaluation of the injury, biomechanics, and contributing factors.</li>
          <li><strong>Pain & Inflammation Management –</strong> Modalities such as manual therapy, electrotherapy, and ice/heat application.</li>
          <li><strong>Mobility & Flexibility Restoration –</strong> Gentle range-of-motion exercises and stretching to reduce stiffness.</li>
          <li><strong>Strength & Stability Training –</strong> Progressive resistance exercises targeting affected and supporting muscles.</li>
          <li><strong>Functional & Sport-Specific Training –</strong> Dynamic drills to mimic sport movements, improve coordination and agility.</li>
          <li><strong>Injury Prevention & Education –</strong> Guidance on training load, movement patterns, and return-to-play strategies.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Personalized treatment plans</li>
          <li>Close collaboration with trainers, coaches, and referring physicians</li>
          <li>Modern rehab equipment and techniques</li>
          <li>Focus on long-term recovery and performance optimization</li>
        </ul>

        <p className="font-medium mt-4">
          Whether you’re a recreational athlete or a professional, our goal is to help you return stronger, safer, and smarter.
        </p>
      </div>
    </section>
  )
}
