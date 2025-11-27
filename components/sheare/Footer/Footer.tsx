import React from "react"

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="text-lg font-semibold text-slate-900">FiveStar</div>

        <nav className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm text-slate-700">
          <a href="#features" className="hover:text-sky-600">Features</a>
          <a href="#pricing" className="hover:text-sky-600">Pricing</a>
          <a href="#about" className="hover:text-sky-600">About</a>
          <a href="#contact" className="hover:text-sky-600">Contact</a>
        </nav>

        <div className="text-sm text-slate-500">© {new Date().getFullYear()} FiveStar. All rights reserved.</div>
      </div>
    </footer>
  )
}
