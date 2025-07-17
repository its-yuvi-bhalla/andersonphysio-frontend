import { Link } from "react-router-dom"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src='https://i.imgur.com/bjr36Kn_d.webp?maxwidth=760&fidelity=grand' alt="SFC Logo" className="w-40 mb-4 shadow-lg rounded-lg" />
          <p className="text-sm text-center md:text-left text-white/80">
            Your recovery, Our priority
          </p>
        </div>

        {/* Office Info */}
        <div>
          <h4 className="font-semibold text-white mb-3">Office</h4>
          <p>Canada</p>
          <p>11440 Braeside Dr SW Unit 29,</p>
          <p>Calgary, AB, T2W 3N4</p>
          <a href="mailto:info@andersonphysiotherapy.ca" className="block mt-2 hover:underline text-white/90">
            info@andersonphysiotherapy.ca
          </a>
          <a
            href="tel:8254155406"
            className="hidden sm:inline-block text-sm font-semibold text-white hover:text-white/70"
          >
            (825) 415-5406
          </a>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-white/70">Home</Link></li>
            <li><Link to="/about" className="hover:text-white/70">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white/70">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white/70">Contact Us</Link></li>
          </ul>
        </div>

        {/* Hours & Social */}
        <div>
          <h4 className="font-semibold text-white mb-3">Working hours</h4>
          <p>Saturday: 9 AM – 4 PM</p>
          <p>Mon–Fri: 9 AM – 6 PM</p>
          <p>Sunday: closed</p>

          <div className="mt-4">
            <p className="mb-2 font-medium">Get in touch</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61577674028556&mibextid=wwXIfr&rdid=769dk7m7a7HcXMHB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16aUTXoSNp%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/70">
        <p>
          <span className="font-semibold text-white">Anderson Physiotherapy <br />
            </span>© 2025. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
