"use client"

import React from 'react'
import Link from 'next/link'
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from '@/lib/constants'
import { socials } from '@/lib/siteData'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Fivester</h3>
            <p className="text-gray-400 text-sm mb-4">
              Premium hardware & electrical solutions for homes and businesses across Saudi Arabia.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-white font-semibold">Location:</span> <span>Al Jishah, Al-Ahsa Governorate, Eastern Province, Saudi Arabia</span>
              </p>
              <p className="text-gray-400">
                <span className="text-white font-semibold">WhatsApp:</span> <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">+966 50 306 9108</a>
              </p>
              <p className="text-gray-400">
                <span className="text-white font-semibold">Email:</span> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-blue-400">{CONTACT_EMAIL}</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="/legal/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/legal/returns" className="hover:text-white transition">Returns Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <div className="space-y-3">
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition">
                <FaFacebook className="text-lg mr-2" /> Facebook
              </a>
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition">
                <FaInstagram className="text-lg mr-2" /> Instagram
              </a>
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition">
                <FaTwitter className="text-lg mr-2" /> Twitter
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition">
                <FaLinkedin className="text-lg mr-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fivester. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/legal/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/legal/returns" className="hover:text-white transition">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer