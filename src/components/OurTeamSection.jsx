const teamMembers = [
  {
    name: 'Vinci Gomez',
    title: 'Physiotherapist, B.Sc. PT, MPT',
    image: 'https://shawneephysiotherapy.ca/wp-content/uploads/2024/08/image-4-570x696.jpg',
    href: "/about/vinci-gomez"
  },
  {
    name: 'Candice Farren',
    title: 'Physiotherapist, BPT',
    image: 'https://shawneephysiotherapy.ca/wp-content/uploads/2024/08/image-5-570x696.jpg',
    href: "/about/candice-farren"
  },
  {
      name: 'Candace Dowhy',
      title: 'Massage Therapist',
      image: 'Candace.jpeg',
      href: "/about/candace-dowhy"

    },
    {
      name: 'Ria Jasmine De Leon',
      title: 'Physiotherapist',
      image: 'Ria.jpeg',
      href: "/about/Ria-jasmine-de-leon"

    },
]

export default function OurTeamSection() {
  return (
    <section className="bg-white py-20 px  text-center flex">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">Trusted Experts</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
  {teamMembers.map((member, index) => (
    <a
      key={index}
      href={member.href}
      className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-64 h-64 rounded-full object-cover shadow-lg"
      />
      <h3 className="mt-5 text-xl font-semibold text-gray-800">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.title}</p>
    </a>
  ))}
</div>

      </div>
    </section>
  )
}
