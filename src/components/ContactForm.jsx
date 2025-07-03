import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: '',
    message: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(
        'https://anderson-physio-backend.vercel.app/api/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      )
      if (!res.ok) throw new Error('Failed to send message')
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredContact: '',
        message: '',
      })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="w-full mx-auto mb-16 max-w-2xl mt-4 p-8 rounded-2xl shadow-2xl">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Contact Us</h2>
      <p className="text-center text-gray-600 mb-8">
        We'd love to hear from you. Please fill out the form below and our team will get back to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          name="phone"
          type="tel"
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="preferredContact"
          value={formData.preferredContact}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Preferred Contact Method</option>
          <option value="Phone">Phone</option>
          <option value="Email">Email</option>
        </select>

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-center mt-2 font-medium">
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center mt-2 font-medium">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  )
}
