export default function ServiceCard({ title, blurb }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
      {/* image placeholder */}
      <div className="bg-gray-200 h-40 w-full" />
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{blurb}</p>
      </div>
    </div>
  )
}
