import React from 'react'
import { Link } from 'react-router-dom' // or 'next/link' if using Next.js

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6 text-center">
      <h1 className="text-6xl font-bold mb-4 text-gray-700">404</h1>
      <h2 className="text-3xl font-semibold mb-3">Oops! Page Not Found</h2>
      <p className="max-w-lg text-gray-600 mb-6">
        It seems the page you’re looking for has moved, doesn’t exist, or was never here.  
        Don’t worry — let’s get you back to better movement and wellness.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition"
      >
        Return to Home
      </Link>
    </section>
  )
}
