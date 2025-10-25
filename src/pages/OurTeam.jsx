export default function OurTeam() {
  const teamMembers = [
    {
      name: 'Vinci Gomez',
      title: 'Physiotherapist, B.Sc. PT, MPT',
      image: 'https://shawneephysiotherapy.ca/wp-content/uploads/2024/08/image-4-570x696.jpg',
    },
    {
      name: 'Candice Farren',
      title: 'Physiotherapist, BPT',
      image: 'https://shawneephysiotherapy.ca/wp-content/uploads/2024/08/image-5-570x696.jpg',
    },
    {
      name: 'Candace Dowhy',
      title: 'Massage Therapist',
      image: 'https://shawneephysiotherapy.ca/wp-content/uploads/2024/08/image-5-570x696.jpg',
    },
    {
      name: 'Ria Jasmine De Leon',
      title: 'Physiotherapist',
      image: 'https://shawneephysiotherapy.ca/wp-content/uploads/2024/08/image-5-570x696.jpg',
    },
  ]

  return (
    <section className="bg-[#e2e2e2] py-20 px-4 justify-between">
      <div className="max-w-6xl mx-auto justify-between">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-gray-600 text-lg">
            Compassionate care from dedicated professionals.
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex justify-between gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-4 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover rounded-lg mb-4 size-full"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
