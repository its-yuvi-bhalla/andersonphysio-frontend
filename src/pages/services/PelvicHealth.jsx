// pages/services/PelvicHealth.jsx
import React from 'react'

export default function PelvicHealth() {
  return (
    <section className="min-h-screen py-20 px-6 bg-[#f8f9fa] text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">Pelvic Health Physiotherapy</h1>

        <img
            src="../../pelvic-healt.jpg"
            alt="Pelvic Floor Therapy"
            className="w-full h-96 object-cover rounded-lg shadow-md"
            />

        {/* Content */}
        <div className="space-y-6">
          <p>
            At <strong>Anderson Physiotherapy Clinic</strong>, our dedicated pelvic health physiotherapists are trained to treat a wide range of pelvic floor dysfunctions for both men and women. Pelvic health is essential for core stability, bladder and bowel control, and sexual function, yet it often goes overlooked or untreated.
          </p>

          <h2 className="text-2xl font-semibold text-blue-900">Female Pelvic Health Physiotherapy</h2>
          <p>
            Our female pelvic health program supports women through all life stages. Whether dealing with discomfort during pregnancy, postpartum recovery, or chronic conditions like incontinence and pelvic pain, we provide compassionate and customized care. Common conditions we treat include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Urinary or rectal incontinence</li>
            <li>Pelvic organ prolapse</li>
            <li>Pre-natal and post-natal pelvic care</li>
            <li>Chronic pelvic pain</li>
            <li>Dyspareunia (painful intercourse)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-900">Male Pelvic Health Physiotherapy</h2>
          <p>
            We also offer evidence-based pelvic health treatment for men, addressing concerns such as:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Erectile dysfunction and Peyronie’s disease</li>
            <li>Post-prostatectomy urinary incontinence</li>
            <li>Benign prostatic hyperplasia (BPH)</li>
            <li>Urinary retention or urgency</li>
            <li>Post-micturition dribble (leak after urination)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-900">Treatment Techniques We Use</h2>
          <p>
            Our treatments are designed to improve pelvic floor muscle strength, coordination, and control. Depending on your individual condition, your treatment plan may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pelvic floor muscle re-training and exercises</li>
            <li>Education and lifestyle modifications</li>
            <li>Manual therapy and myofascial release</li>
            <li>Shockwave therapy</li>
            <li>Electrical stimulation</li>
            <li>Therapeutic acupuncture</li>
            <li>Massage therapy for pelvic or surrounding muscles</li>
          </ul>

          <p className="mt-6">
            Our private, supportive environment ensures comfort and dignity throughout your care. Whether you're recovering postpartum, managing incontinence, or addressing sexual dysfunction, our team is here to guide you toward better pelvic health.
          </p>

          <div className="bg-white border border-gray-300 rounded-lg shadow p-6 text-center mt-10">
            <h2 className="text-xl font-semibold mb-2">Book Your Appointment Today</h2>
            <p className="mb-4">Begin your journey to better pelvic health in a safe and supportive space.</p>
            <p className="font-medium text-blue-600">
              📞 Call (825) 415-5403 or 📧 email info@andersonphysiotherapy.ca
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
