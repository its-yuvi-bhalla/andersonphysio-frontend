// pages/services/Massage.jsx
import React from 'react'

export default function Massage() {
  return (
    <section className="min-h-screen py-20 px-6 bg-[#f9f9f9] text-gray-800">
      <div className="max-w-5xl mx-auto space-y-10">
        <img
          src="../../massage.jpg"
          alt="Massage Therapy"
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />

        <h1 className="text-4xl font-bold">Massage Therapy at Anderson Physiotherapy</h1>

        <p className="text-lg">
          Massage therapy can have many varied benefits, including relieving muscular tension, improving range of motion,
          mitigating chronic pain, reducing stress or anxiety, boosting your immune system, improving sleep patterns,
          stimulating circulation and improving the speed at which your body heals. On top of that — it just plain feels good!
          Our goal is to keep you moving and feeling your best.
        </p>

        <p className="text-lg">
          Our massage therapists are trained in a variety of techniques including therapeutic massage, relaxation massage,
          cupping therapy, and hot stone massage to suit your individual needs.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
            {/* Content */}
  <div className="md:w-1/2 w-full">
    <h2 className="text-2xl font-semibold mb-4">Our Massage Therapy Services</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-800">
      <li><strong>Deep Tissue Massage –</strong> Targets deep muscle layers to relieve tension and chronic pain.</li>
      <li><strong>Relaxation Massage –</strong> A gentle, soothing massage to promote relaxation and stress relief.</li>
      <li><strong>Therapeutic Massage –</strong> A combination of techniques to aid recovery from injuries and discomfort.</li>
      <li><strong>Hot Stone Massage –</strong> Uses heated stones to relax muscles and enhance circulation.</li>
      <li><strong>Cupping Therapy –</strong> A specialized technique to release tight muscles and improve mobility.</li>
      <li><strong>Prenatal Massage –</strong> Safe and effective massage for expectant mothers to ease pregnancy-related discomfort.</li>
    </ul>
  </div>
  {/* Image */}
  <div className="md:w-1/2 w-full">
    <img
      src="https://shawneephysiotherapy.ca/wp-content/uploads/2024/07/Rectangle-3661-913x1024.jpg"
      alt="Massage Therapy"
      className="w-full h-96 object-cover rounded-lg shadow"
    />
  </div>

  
</div>


        <div>
          <h2 className="text-2xl font-semibold mb-4">Benefits of Massage Therapy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reduces muscle pain and stiffness</li>
            <li>Supports injury recovery</li>
            <li>Enhances blood circulation</li>
            <li>Lowers stress and anxiety</li>
            <li>Improves flexibility and movement</li>
            <li>Promotes overall relaxation and well-being</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Book Your Massage Today</h2>
          <p className="mb-3">Take the first step in your wellness journey.</p>
          <p className="text-blue-600 font-medium">📞 Call (825) 415-5403 or 📧 Email info@andersonphysiotherapy.ca</p>
        </div>
      </div>
    </section>
  )
}
