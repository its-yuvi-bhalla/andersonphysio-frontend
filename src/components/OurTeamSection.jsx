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
]

export default function OurTeamSection() {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">Best Experts</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.href}
              className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-72 h-72 rounded-full object-cover shadow-lg"
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
