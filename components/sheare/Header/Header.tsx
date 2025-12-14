"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  // Initialize on client to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mounted) return;

    function handleClickOutside(e: MouseEvent) {
      if (!open) return;
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, mounted]);

  return (
    <header ref={ref} className="w-full bg-white border-b border-[#CED4DA] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-5 flex items-center justify-between gap-4">
        {/* Logo - Left */}
        <Link href="/" className="shrink-0">
          <img
            src="/logo.jpeg"
            alt="Fivestar Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav - Center */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <NavLinks />
        </nav>

        {/* WhatsApp Button - Right (Desktop) */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-[#00843D] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#006630] transition shrink-0"
        >
          WhatsApp
        </a>

        {/* Hamburger / Close (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="md:hidden ml-auto w-8 h-8 flex flex-col justify-center items-center shrink-0"
        >
          <span
            className={`absolute h-[2.5px] w-6 bg-[#0F0F0F] rounded transition-transform duration-300 
              ${open ? "rotate-45" : "-translate-y-2"}`}
          />
          <span
            className={`absolute h-[2.5px] w-6 bg-[#0F0F0F] rounded transition-all duration-300 
              ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-[2.5px] w-6 bg-[#0F0F0F] rounded transition-transform duration-300 
              ${open ? "-rotate-45" : "translate-y-2"}`}
          />
        </button>
      </div>

      {/* Mobile Menu - only render on client to avoid hydration mismatch */}
      {mounted && open && (
        <nav className="md:hidden bg-white border-t border-[#CED4DA] shadow-md flex flex-col py-2">
          <NavLinks mobile onItemClick={() => setOpen(false)} />
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 my-2 bg-[#00843D] text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-[#006630] transition"
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;

const NavLinks = ({
  mobile = false,
  onItemClick,
}: {
  mobile?: boolean;
  onItemClick?: () => void;
}) => {
  const base = "text-[#0F0F0F] hover:text-[#00843D] transition font-medium";
  const mobileClasses = "px-4 py-3 border-b border-[#CED4DA] text-base";
  const desktopClasses = "text-sm";

  const handleClick = () => {
    if (mobile && onItemClick) onItemClick();
  };

  return (
    <>
      <Link href="/" onClick={handleClick} className={`${base} ${mobile ? mobileClasses : desktopClasses}`}>
        Home
      </Link>
      <Link href="/products" onClick={handleClick} className={`${base} ${mobile ? mobileClasses : desktopClasses}`}>
        Products
      </Link>
      <Link href="/services" onClick={handleClick} className={`${base} ${mobile ? mobileClasses : desktopClasses}`}>
        Services
      </Link>
      <Link href="/galary" onClick={handleClick} className={`${base} ${mobile ? mobileClasses : desktopClasses}`}>
        Galary
      </Link>
      <Link href="/about" onClick={handleClick} className={`${base} ${mobile ? mobileClasses : desktopClasses}`}>
        About
      </Link>
      <Link href="/faq" onClick={handleClick} className={`${base} ${mobile ? mobileClasses : desktopClasses}`}>
        FAQ
      </Link>
      <Link href="/contact" onClick={handleClick} className={`${base} ${mobile ? mobileClasses : desktopClasses}`}>
        Contact
      </Link>
    </>
  );
};
