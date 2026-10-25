"use client"
import { useState, useEffect } from "react"
import FadeDown from "./animations/FadeDown"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme")
    const isCurrentlyDark = saved ? saved === "dark" : document.documentElement.classList.contains("dark")
    setIsDark(isCurrentlyDark)
    
    // Ensure DOM matches saved preference
    if (isCurrentlyDark) {
      document.documentElement.classList.add("dark")
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.setAttribute("data-theme", "light")
    }
  }, [])

  const toggleTheme = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    const currentIsDark = document.documentElement.classList.contains("dark")
    const newIsDark = !currentIsDark
    setIsDark(newIsDark)

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newIsDark ? "dark" : "light")
      if (newIsDark) {
        document.documentElement.classList.add("dark")
        document.documentElement.setAttribute("data-theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        document.documentElement.setAttribute("data-theme", "light")
      }
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const handleScrollEvent = () => {
      let current: string | null = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id")
        }
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScrollEvent)
    return () => window.removeEventListener("scroll", handleScrollEvent)
  }, [])

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none w-full">
      <div className="pointer-events-auto">
        <FadeDown>
          <div className="relative pointer-events-auto flex items-center justify-between gap-3 sm:gap-5 py-2 md:py-2.5 px-4 sm:px-6 md:px-8 bg-foreground/90 backdrop-blur-md border border-card-border rounded-full shadow-lg transition-colors duration-300">
            {/* Desktop Navigation Links */}
            <nav className="flex-row gap-5 md:gap-7 hidden md:flex items-center">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.link
                return (
                  <button
                    onClick={() => handleScroll(item.link)}
                    key={index}
                    type="button"
                    className={`
                      ${isActive ? "text-text-primary font-bold" : "text-text-secondary font-medium hover:text-text-primary"} 
                      cursor-pointer text-sm tracking-wide transition-colors duration-200 relative py-1
                    `}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-text-primary rounded-full animate-in fade-in" />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* Desktop Theme Switcher */}
            <div className="hidden md:flex items-center pl-2 border-l border-card-border">
              <button
                onClick={toggleTheme}
                type="button"
                id="theme-toggle-desktop"
                aria-label="Toggle Dark and Light Mode"
                className="cursor-pointer p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-thirdary transition-all duration-200 flex items-center justify-center"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {mounted && isDark ? (
                  // Sun icon for Dark Mode
                  <svg className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  // Moon icon for Light Mode
                  <svg className="w-5 h-5 text-slate-700 hover:-rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Header Controls */}
            <div className="flex md:hidden items-center justify-between w-full min-w-[220px] gap-3">
              <span className="text-xs uppercase tracking-widest text-text-secondary font-bold">Menu</span>
              
              <div className="flex items-center gap-2">
                {/* Mobile Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  type="button"
                  id="theme-toggle-mobile"
                  aria-label="Toggle Dark and Light Mode"
                  className="cursor-pointer p-1.5 rounded-full text-text-secondary hover:text-text-primary hover:bg-thirdary transition-colors flex items-center justify-center"
                >
                  {mounted && isDark ? (
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>

                {/* Mobile Menu Button */}
                <button
                  className="text-text-secondary hover:text-text-primary p-1 cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  aria-label="Open Mobile Menu"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
              className={`${
                isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none"
              } md:hidden transform absolute top-14 left-0 right-0 z-50 origin-top transition-all duration-200 ease-in-out`}
            >
              <div className="flex flex-col gap-1.5 bg-foreground/95 backdrop-blur-xl border border-card-border p-4 rounded-2xl shadow-2xl">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.link
                  return (
                    <button
                      onClick={() => {
                        handleScroll(item.link)
                        setIsOpen(false)
                      }}
                      key={index}
                      type="button"
                      className={`
                        ${isActive ? "text-text-primary font-bold bg-thirdary" : "text-text-secondary font-medium hover:text-text-primary hover:bg-thirdary/60"} 
                        cursor-pointer text-sm text-left px-3 py-2.5 rounded-xl flex items-center justify-between transition-colors duration-150
                      `}
                    >
                      <span>{item.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-text-primary" />}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </FadeDown>
      </div>
    </div>
  )
}

const navItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Tech Stack", link: "techstack" },
  { name: "Projects", link: "projects" },
  { name: "Experience", link: "experience" },
  { name: "Contact", link: "contacts" },
]
