"use client"
import Image from "next/image"
import { useEffect, useState, useMemo } from "react"
import FadeUp from "@/components/animations/FadeUp"
import FadeDown from "@/components/animations/FadeDown"

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const roles = useMemo(
    () => [
      "Mobile & Web Developer",
      "Frontend & UI/UX Developer",
    ],
    [],
  )

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
    const currentIndex = index % roles.length

    const timeout = setTimeout(
      () => {
        const currentText = roles[currentIndex]

        if (!deleting && subIndex < currentText.length) {
          setSubIndex(subIndex + 1)
        } else if (deleting && subIndex > 0) {
          setSubIndex(subIndex - 1)
        } else if (!deleting && subIndex === currentText.length) {
          setDeleting(true)
        } else if (deleting && subIndex === 0) {
          setDeleting(false)
          setIndex((currentIndex + 1) % roles.length)
        }
      },
      deleting ? 50 : 110,
    )

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, roles])

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-background cursor-default flex flex-col items-center justify-center pt-20 sm:pt-24 pb-20 md:pb-28"
    >
      {/* 1. Radar Concentric Rings in the Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <div className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[660px] md:h-[660px] lg:w-[820px] lg:h-[820px] rounded-full border border-card-border/70 dark:border-white/5 opacity-80" />
        <div className="absolute w-[480px] h-[480px] sm:w-[680px] sm:h-[680px] md:w-[920px] md:h-[920px] lg:w-[1140px] lg:h-[1140px] rounded-full border border-card-border/50 dark:border-white/[0.04] opacity-60" />
        <div className="absolute w-[660px] h-[660px] sm:w-[900px] sm:h-[900px] md:w-[1200px] md:h-[1200px] lg:w-[1460px] lg:h-[1460px] rounded-full border border-card-border/30 dark:border-white/[0.03] opacity-40" />
        {/* Subtle radial ambient glow */}
        <div className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-accent-light/35 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Giant Running Outline Name Marquee (Behind Portrait) */}
      <div className="absolute inset-x-0 top-[28%] sm:top-[30%] md:top-[32%] -translate-y-1/2 overflow-hidden pointer-events-none z-[5] select-none">
        <div className="flex animate-marquee-hero whitespace-nowrap">
          <span className="stroke-text font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] xl:text-[13.5rem] uppercase tracking-tight pr-12 opacity-85">
            BAGUS WICHAKSONO AMANULLOH —
          </span>
          <span className="stroke-text font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] xl:text-[13.5rem] uppercase tracking-tight pr-12 opacity-85">
            BAGUS WICHAKSONO AMANULLOH —
          </span>
        </div>
      </div>

      {/* 3. Center Portrait Cutout (In Front of Marquee) */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end px-6">
        <FadeDown delay={0.1}>
          <div className="relative group cursor-pointer">
            {/* Cutout Portrait Image */}
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[430px] aspect-[3222/4527] transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/images/bagus-cutout.png"
                alt="Bagus Wichaksono Amanulloh"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl select-none pointer-events-none"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 430px"
              />
            </div>
            {/* Smooth bottom gradient fade so shoulders blend into the card border / background */}
            <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
          </div>
        </FadeDown>

        {/* 4. Vertical "SCROLL DOWN" Indicator (Desktop, Matching Reference) */}
        <div className="hidden lg:flex absolute right-8 xl:right-16 bottom-8 z-20 flex-col items-center gap-3">
          <div className="w-[1.5px] h-14 bg-card-border overflow-hidden relative">
            <div className="w-full h-1/2 bg-text-primary animate-pulse" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-text-secondary [writing-mode:vertical-rl] opacity-75">
            Scroll Down
          </span>
        </div>
      </div>

      {/* 5. Hero Information, Role & Action Links (Below Portrait) */}
      <div className="relative z-20 w-full max-w-3xl mx-auto px-6 text-center mt-2 flex flex-col items-center">
        <FadeUp delay={0.2}>
          <div className="flex flex-col items-center gap-4">
            {/* Main Greeting & Name */}
            <h1 className="text-text-primary text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-text-primary underline decoration-text-secondary/30 underline-offset-8">
                Bagus Wichaksono Amanulloh
              </span>
            </h1>

            {/* Typewriter Dynamic Role */}
            <div className="flex items-center justify-center h-8">
              <span className="text-text-secondary text-lg sm:text-2xl font-semibold tracking-tight">
                {roles[index].substring(0, subIndex)}
              </span>
              <span className="animate-cursor text-text-primary text-xl sm:text-2xl font-light ml-0.5">|</span>
            </div>

            {/* About Me Section & Description */}
            <div className="mt-4 pt-4 border-t border-card-border flex flex-col items-center gap-2.5 w-full max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-text-secondary opacity-75">
                About Me
              </span>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
                I&apos;m an IT student focused on web development and building practical software. I spend most of my time working across the stack, crafting clean interfaces, and designing solid database structures.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 mt-5 w-full sm:w-auto">
              <button
                onClick={() => handleScroll("projects")}
                className="cursor-pointer text-sm font-bold bg-text-primary text-background hover:opacity-90 px-7 py-3 rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-200 shadow-md"
              >
                Explore Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
              </button>

              <button
                onClick={() => handleScroll("contacts")}
                className="cursor-pointer text-sm font-semibold border border-card-border hover:border-text-primary text-text-primary bg-foreground hover:bg-thirdary px-7 py-3 rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get In Touch
                <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>

            {/* Social & Document Links */}
            <div className="mt-6 pt-5 border-t border-card-border flex flex-wrap justify-center gap-3">
              {socialLinks.map((item, index) => (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-card-border hover:border-text-primary bg-foreground hover:bg-thirdary text-text-secondary hover:text-text-primary text-xs font-medium transition-all duration-200"
                  key={index}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

const socialLinks = [
  {
    name: "CV",
    href: "/cv.pdf",
    icon: (
      <svg className="w-4 h-4 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bagus-wichaksono-amanulloh-232303380/",
    icon: (
      <svg className="w-4 h-4 fill-current text-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:baguswichaksonoamanulloh@gmail.com",
    icon: (
      <svg className="w-4 h-4 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/BagusWichaksono",
    icon: (
      <svg className="w-4 h-4 fill-current text-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
]
