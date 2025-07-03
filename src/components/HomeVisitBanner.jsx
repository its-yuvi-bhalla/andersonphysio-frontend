import { Link } from "react-router-dom"

export default function HomeVisitBanner() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center md:text-left">
          Home visits available
        </h2>
        <Link
          to="https://www.onthegorehab.ca/"
          target="_blank"
          className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full transition font-medium shadow"
        >
          Visit us
        </Link>
      </div>
    </section>
  )
}
