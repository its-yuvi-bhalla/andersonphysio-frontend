// src/components/AboutIntroSection.jsx

export default function AboutIntroSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 flex flex-col lg:flex-row items-center gap-12">
      <img
        src="./therapistabout.jpg"
        alt="Therapist working with patient"
        className="w-full max-w-md rounded-xl shadow-lg"
      />
      <div className="max-w-2xl">
        <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">
          Recover, Restore, Revitalize at
        </p>
        <h2 className="text-4xl leading-snug mb-4">
          Anderson Physiotherapy & Massage Therapy Clinic
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Anderson Physiotherapy and Massage Clinic, we are committed to
          your health and wellness. Our experienced team of physiotherapists
          and massage therapists provide personalized treatment plans tailored
          to your needs, ensuring you recover sooner and regain mobility.
          Whether you're dealing with chronic pain, sports injuries, or
          post-surgical rehab — we’re here to help.
        </p>
      </div>
    </section>
  )
}
