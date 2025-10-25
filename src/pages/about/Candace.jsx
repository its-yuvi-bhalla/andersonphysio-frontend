import React from 'react'

export default function Candace() {
  return (
    <section className="min-h-screen py-16 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-[17px] leading-relaxed">
        {/* Name and Title */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold">Candace Dowhy</h1>
          <p className="text-lg text-gray-600">Registered Massage Therapist</p>
        </div>

        {/* Floating Image */}
        <div className="float-left mr-6 mb-4 w-60">
          <img
            src="/Candace.jpeg"
            alt="Candace Dowhy"
            className="rounded-xl shadow-md w-full object-cover h-80"
          />
        </div>

        {/* Biography */}
        <p>
          Candace Dowhy is a highly skilled Registered Massage Therapist with a passion for helping clients live
          pain-free, balanced, and revitalized lives. A proud graduate of Robertson College’s Massage Therapy program in
          Winnipeg, Manitoba (2018), Candace relocated to Calgary, Alberta, where she began her professional journey in
          massage therapy.
        </p>
        <p>
          While completing her studies, Candace conducted in-depth research on low back pain and sciatica—knowledge that
          empowered her to relieve her own sciatic discomfort and equipped her with advanced, targeted techniques to help
          others manage and overcome similar conditions.
        </p>
        <p>
          Her hands-on expertise is backed by a strong understanding of anatomy, therapeutic methods, and
          client-centered care. Candace’s practice incorporates a wide range of modalities tailored to meet each client’s
          unique needs, such as Swedish Massage, Deep Tissue Massage, Prenatal & Postpartum Massage, Pediatric Massage,
          TMJ Treatment, Cupping Therapy, Hot Stone Therapy, Acupressure & Meridian Massage, and Aromatherapy.
        </p>
        <p>
          Always committed to growth, Candace is expanding her expertise into reflexology, allowing her to offer clients
          an even broader range of therapeutic options for relaxation, pain relief, and whole-body wellness.
        </p>
        <p>
          Since November 2018, Candace has been a proud member in good standing with the Massage Therapy Association of
          Alberta (MTAA). Her dedication to ongoing professional development ensures her clients benefit from the most
          effective, up-to-date techniques.
        </p>
        <p>
          Known for her compassionate approach, personalized treatments, and commitment to holistic wellness, Candace is
          devoted to helping each individual achieve their optimal state of health and well-being.
        </p>

        {/* Services Section */}
        <div className="mt-10 clear-left">
          <h2 className="text-2xl font-semibold mb-2">Massage Therapy Services</h2>
          <div className="grid sm:grid-cols-2 gap-y-1">
            <ul className="list-disc pl-6 space-y-1">
              <li>Relaxation & Therapeutic Massage (30–90 min)</li>
              <li>Deep Tissue Massage</li>
              <li>Hot Stone Massage</li>
              <li>Prenatal & Postpartum Massage</li>
              <li>Senior Massage Therapy</li>
            </ul>
            <ul className="list-disc pl-6 space-y-1">
              <li>Acupressure & Meridian Massage</li>
              <li>TMJ and Neck Tension Treatment</li>
              <li>Cupping Therapy</li>
              <li>Aromatherapy & Essential Oil Massage</li>
              <li>Reflexology (in training)</li>
            </ul>
          </div>
        </div>

        {/* Approach */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
          <p>
            At Anderson Physiotherapy, Candace believes in creating a personalized, restorative experience for every
            client. Her sessions blend advanced techniques with a gentle, therapeutic touch—helping relieve tension,
            reduce stress, and restore overall balance to the body and mind.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-white border border-gray-300 rounded-lg shadow p-6 text-center mt-7 max-w-4xl">
          <h2 className="text-xl font-semibold mb-2">Book Your Massage with Candace Dowhy Today</h2>
          <p className="font-medium text-blue-600">
            📞 Call (825) 415-5406 or 📧 email info@andersonphysiotherapy.ca
          </p>
        </div>
      </div>
    </section>
  )
}
