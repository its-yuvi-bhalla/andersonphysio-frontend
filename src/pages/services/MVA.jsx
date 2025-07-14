// pages/services/MVA.jsx
import React from 'react'

export default function MVA() {
  return (
    <section className="min-h-screen py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Banner Image */}
        <img
          src="../../mva.jpg"
          alt="Motor Vehicle Accident Rehab"
          className="w-full h-[590px] object-cover rounded-xl shadow-lg mb-10"
        />

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Recover Safely and Completely After a Car Accident
        </h1>

        {/* Intro */}
        <p className="mb-6 text-lg leading-relaxed">
          A car accident can disrupt your life in an instant, leaving behind physical pain, emotional stress,
          and uncertainty about recovery. Our clinic specializes in helping individuals recover fully and confidently after a motor vehicle accident (MVA).
          With our experienced rehabilitation team, we ensure your treatment is safe, effective, and fully customized to your needs.
        </p>
        <p className="mb-10 text-lg leading-relaxed">
          Whether you're suffering from whiplash, joint pain, or post-accident stiffness, we’re here to guide you toward full recovery.
        </p>

        {/* Process Section */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our 5-Step Recovery Process</h2>
        <ul className="list-disc pl-6 space-y-3 text-base mb-12">
          <li>
            <span className="font-semibold text-gray-700">Insurance Approval –</span> We help you navigate the insurance process and offer direct billing for approved claims.
          </li>
          <li>
            <span className="font-semibold text-gray-700">Thorough Assessment –</span> A detailed exam of your injuries, pain levels, and function to create a baseline.
          </li>
          <li>
            <span className="font-semibold text-gray-700">Custom Treatment Plan –</span> Tailored rehab programs that may include physiotherapy, massage, and electrotherapy.
          </li>
          <li>
            <span className="font-semibold text-gray-700">Progress Monitoring –</span> Ongoing evaluation of your condition and updates to your treatment.
          </li>
          <li>
            <span className="font-semibold text-gray-700">Discharge & Prevention –</span> Final evaluation with long-term strategies to avoid future injury.
          </li>
        </ul>

        {/* Conditions Treated */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Common Injuries We Treat</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {[
            "Whiplash and neck pain",
            "Lower back and spinal injuries",
            "Joint sprains and strains",
            "Headaches and concussions",
            "Soft tissue damage",
            "Nerve impingement or tingling",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#8ec4f4] p-4 rounded-lg shadow-sm border border-gray-100 text-md font-lg"
              
            >
              {item}
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Choose Our Clinic?</h2>
        <ul className="list-disc pl-6 space-y-3 text-base mb-12">
          <li>Decades of experience in MVA rehabilitation</li>
          <li>Hassle-free insurance handling and direct billing</li>
          <li>Integrated care with physiotherapists, massage therapists, and acupuncturists</li>
          <li>Comfortable, private treatment environment</li>
          <li>Evidence-based, patient-centered care</li>
        </ul>

        {/* Call to Action */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-2 text-blue-800">Start Your Recovery Today</h3>
          <p className="text-base text-gray-700 mb-2">
            Don’t let an accident define your future. With the right care, you can return to the life you love—pain-free and strong.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Reach out to our team to schedule an assessment and begin your healing journey today.
          </p>
          <p className="text-blue-600 font-medium text-base">📞 Call us or 📩 book online — we're ready to help.</p>
        </div>
      </div>
    </section>
  )
}
