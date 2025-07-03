import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass =
    'block px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition font-medium'
  const active = ({ isActive }) =>
    isActive ? `${linkClass} text-blue-700 bg-blue-50` : linkClass

  return (
    <header className="bg-white shadow sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://i.imgur.com/UeV6PiK_d.webp?maxwidth=760&fidelity=grand"
            alt="Anderson Physiotherapy Logo"
            className="h-14 sm:h-20 w-auto object-contain"
          />
          <span className="sr-only">Anderson Physiotherapy</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" end className={active}>
            Home
          </NavLink>
          <NavLink to="/about" className={active}>
            About
          </NavLink>
          <NavLink to="/services" className={active}>
            Services
          </NavLink>
          <NavLink to="/contact" className={active}>
            Contact
          </NavLink>
        </nav>

        {/* Phone Number */}
        <a
          href="tel:8254155403"
          className="hidden md:inline-block text-sm font-semibold text-gray-700 hover:text-blue-700"
        >
          (825) 415-5403
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            <NavLink to="/" end className={active} onClick={() => setMobileOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={active} onClick={() => setMobileOpen(false)}>
              About
            </NavLink>
            <NavLink to="/services" className={active} onClick={() => setMobileOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/contact" className={active} onClick={() => setMobileOpen(false)}>
              Contact
            </NavLink>
            <a
              href="tel:8254155403"
              className="mt-2 text-sm font-medium text-gray-800 hover:text-blue-700"
            >
              📞 (825) 415-5403
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
