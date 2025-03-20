"use client"

import React, { useState } from "react"
import { Instagram, Twitter, Youtube, Facebook, Music2 } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { UserMenu } from "./UserMenu"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Tours", path: "/tours" },
  { name: "Music", path: "/music" },
  { name: "Videos", path: "/videos" },
  { name: "Store", path: "/store" },
  { name: "Contact", path: "/contact" },
]

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/franciscoherrera",
    color: "hover:text-pink-500",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/franciscoherrera",
    color: "hover:text-blue-400",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@FranciscoHerreraOfficial",
    color: "hover:text-red-600",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/franciscoherrera",
    color: "hover:text-blue-600",
  },
  {
    icon: Music2,
    label: "Spotify",
    href: "https://open.spotify.com/artist/franciscoherrera",
    color: "hover:text-green-500",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close menu when user navigates or presses Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg">
      <div className="max-w-[1920px] mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - removed excessive negative margin */}
          <Link to="/" className="flex items-center gap-4 text-white group">
            <div className="flex items-center gap-6">
              <span className="text-[42px] text-red-600 group-hover:text-red-500 transition-colors">🎸</span>
              <div className="flex items-baseline">
                <span className="text-6xl font-black tracking-tighter text-red-600 group-hover:text-red-500 transition-colors">
                  FH
                </span>
                <span className="text-4xl font-black tracking-widest ml-1">STUDIOS</span>
              </div>
            </div>
          </Link>

          {/* Mobile & Tablet Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              className="text-white hover:text-red-500 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {/* Simple hamburger icon that matches the screenshot */}
              <div className="w-6 flex flex-col gap-1.5">
                <span className="block h-0.5 w-6 bg-current"></span>
                <span className="block h-0.5 w-6 bg-current"></span>
                <span className="block h-0.5 w-6 bg-current"></span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="border-l border-white/20 h-8 ml-16 mr-8" />
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white text-2xl font-bold hover:text-red-500 transition relative ${location.pathname === item.path
                    ? "text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-red-500"
                    : ""
                  } flex items-center gap-2`}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-l border-white/20 h-8 mx-4" />
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform hover:scale-110 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={28} />
                </a>
              ))}
            </div>
            {/* UserMenu with proper spacing */}
            <div className="isolate ml-4 mr-8">
              {" "}
              {/* Added ml-4 mr-8 */}
              <UserMenu />
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Menu Dropdown */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed top-20 right-0 w-[280px] bg-black border-l border-t border-white/20 transition-all duration-300 ${isOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"
            }`}
          style={{
            maxHeight: "calc(100vh - 5rem)",
            overflowY: "auto",
            boxShadow: isOpen ? "-4px 0 20px rgba(0, 0, 0, 0.5)" : "none",
          }}
          aria-hidden={!isOpen}
        >
          {/* Navigation Items */}
          <div className="py-4">
            {navItems.map((item, index) => (
              <>
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-white text-xl font-bold px-6 py-4 hover:bg-white/10 ${location.pathname === item.path ? "bg-white/10 border-l-4 border-red-600" : ""
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {index < navItems.length - 1 && <div className="h-[1px] bg-white/20 w-full" />}
              </>
            ))}
          </div>

          {/* Thick Divider */}
          <div className="h-[2px] bg-white/20 w-full" />

          {/* User Account Section */}
          <div className="px-6 py-4">
            <UserMenu />
          </div>

          {/* Thick Divider */}
          <div className="h-[2px] bg-white/20 w-full" />

          {/* Social Media Section */}
          <div className="px-6 py-6">
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className="grid grid-cols-5 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

