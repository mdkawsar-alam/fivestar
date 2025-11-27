import React from "react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Fivester</h3>
            <p className="text-gray-400">Your trusted hardware & electrical solutions partner in Saudi Arabia.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="text-gray-400 hover:text-white transition">Home</a>
              <a href="#products" className="text-gray-400 hover:text-white transition">Products</a>
              <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
              <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                  WhatsApp: +966 XX XXXX XXXX
                </a>
              </p>
              <p className="text-gray-400">
                <a href="mailto:support@fivestarsa.com" className="hover:text-white transition">
                  Email: support@fivestarsa.com
                </a>
              </p>
              <p className="text-gray-400">📍 Riyadh, Saudi Arabia</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <nav className="space-y-2">
              <a href="/legal/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="/legal/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</a>
              <a href="/legal/returns" className="text-gray-400 hover:text-white transition">Return Policy</a>
              <a href="/faq" className="text-gray-400 hover:text-white transition">FAQ</a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Social Media & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Fivester. All rights reserved.</p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a href="#facebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition text-xl">
                f
              </a>
              <a href="#twitter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition text-xl">
                𝕏
              </a>
              <a href="#instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition text-xl">
                📷
              </a>
              <a href="#linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition text-xl">
                in
              </a>
              <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition text-xl">
                💬
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
