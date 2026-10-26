"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"
import GlareHover from "@/components/GlareHover"

interface ProjectItem {
  index: number
  title: string
  role: string
  category: string
  period: string
  shortDescription: string
  fullDescription: string
  tech: string[]
  features: string[]
  image: string
  imageFit?: "cover" | "contain"
}

export default function Project() {
  const [isOpen, setIsOpen] = useState<number | null>(null)

  useEffect(() => {
    if (isOpen !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const activeProject = projectList.find((p) => p.index === isOpen)

  return (
    <>
      <section
        id="projects"
        className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-card-border"
      >
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-20 w-full text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-3 opacity-75">
              Featured Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tight">
              Selected Projects
            </h3>
          </div>
        </FadeDown>

        {/* Desktop View: Grid */}
        <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-3 gap-8 px-6 md:px-12">
          {projectList.map((project, index) => (
            <FadeUp key={`desktop-${index}`}>
              <GlareHover className="group flex flex-col h-full bg-foreground border border-card-border hover:border-text-primary/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:-translate-y-1">
                {/* Visual Header with Real Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-thirdary border-b border-card-border group-hover:border-text-primary/40 transition-colors">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      project.imageFit === "contain"
                        ? "object-contain p-3.5 bg-neutral-950"
                        : "object-cover object-top"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/75 text-white border border-white/20 backdrop-blur-md uppercase tracking-wider shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                    <h4 className="text-lg font-black text-white drop-shadow-md">{project.title}</h4>
                    <p className="text-[11px] text-white/85 font-medium drop-shadow-sm">{project.role}</p>
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-grow relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-text-secondary opacity-75">{project.period}</span>
                    <span className="text-[10px] font-bold tracking-widest text-text-secondary opacity-50">
                      {String(project.index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h5 className="text-xl font-bold text-text-primary tracking-tight mb-2">
                    {project.title}
                  </h5>

                  <p className="text-xs text-text-secondary leading-relaxed mb-6 flex-grow line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-card-border">
                    <button
                      className="text-xs font-bold tracking-wider uppercase text-text-primary hover:opacity-75 flex items-center gap-2 transition-colors cursor-pointer"
                      onClick={() => setIsOpen(project.index)}
                    >
                      <span>View Details</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <div className="flex items-center gap-1.5">
                      {project.tech.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-thirdary text-text-secondary border border-card-border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlareHover>
            </FadeUp>
          ))}
        </div>

        {/* Mobile & Tablet Slider */}
        <div className="lg:hidden w-full overflow-hidden relative py-2">
          <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
            <div className="flex gap-5 px-3">
              {projectList.map((project, index) => (
                <div key={`m1-${index}`} className="w-[85vw] sm:w-[380px] flex-shrink-0">
                  <div className="group flex flex-col h-full bg-foreground border border-card-border rounded-2xl overflow-hidden shadow-sm">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-thirdary border-b border-card-border">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`transition-transform duration-500 group-hover:scale-105 ${
                          project.imageFit === "contain"
                            ? "object-contain p-3 bg-neutral-950"
                            : "object-cover object-top"
                        }`}
                        sizes="(max-width: 640px) 85vw, 380px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 z-10">
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-black/75 text-white border border-white/20 uppercase tracking-wider backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3.5 right-3.5 z-10">
                        <h4 className="text-lg font-black text-white drop-shadow-md">{project.title}</h4>
                        <p className="text-[11px] text-white/85 font-medium">{project.role}</p>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs font-semibold text-text-secondary mb-1 opacity-75">{project.period}</span>
                      <h5 className="text-lg font-bold text-text-primary mb-2">{project.title}</h5>
                      <p className="text-xs text-text-secondary leading-relaxed mb-5 line-clamp-3">
                        {project.shortDescription}
                      </p>

                      <button
                        className="mt-auto text-xs font-bold text-text-primary hover:underline flex items-center gap-1.5 pt-3 border-t border-card-border cursor-pointer"
                        onClick={() => setIsOpen(project.index)}
                      >
                        View Full Details &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-5 px-3">
              {projectList.map((project, index) => (
                <div key={`m2-${index}`} className="w-[85vw] sm:w-[380px] flex-shrink-0">
                  <div className="group flex flex-col h-full bg-foreground border border-card-border rounded-2xl overflow-hidden shadow-sm">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-thirdary border-b border-card-border">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`transition-transform duration-500 group-hover:scale-105 ${
                          project.imageFit === "contain"
                            ? "object-contain p-3 bg-neutral-950"
                            : "object-cover object-top"
                        }`}
                        sizes="(max-width: 640px) 85vw, 380px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 z-10">
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-black/75 text-white border border-white/20 uppercase tracking-wider backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3.5 right-3.5 z-10">
                        <h4 className="text-lg font-black text-white drop-shadow-md">{project.title}</h4>
                        <p className="text-[11px] text-white/85 font-medium">{project.role}</p>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs font-semibold text-text-secondary mb-1 opacity-75">{project.period}</span>
                      <h5 className="text-lg font-bold text-text-primary mb-2">{project.title}</h5>
                      <p className="text-xs text-text-secondary leading-relaxed mb-5 line-clamp-3">
                        {project.shortDescription}
                      </p>

                      <button
                        className="mt-auto text-xs font-bold text-text-primary hover:underline flex items-center gap-1.5 pt-3 border-t border-card-border cursor-pointer"
                        onClick={() => setIsOpen(project.index)}
                      >
                        View Full Details &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Detail */}
        <AnimatePresence>
          {isOpen !== null && activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
                onClick={() => setIsOpen(null)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-foreground border border-card-border rounded-3xl w-full max-w-2xl max-h-[88vh] overflow-hidden flex flex-col shadow-2xl relative z-10"
              >
                {/* Header */}
                <div className="p-6 bg-thirdary border-b border-card-border flex justify-between items-start">
                  <div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-foreground text-text-primary border border-card-border uppercase tracking-wider inline-block mb-2">
                      {activeProject.category}
                    </span>
                    <h3 className="text-2xl font-black text-text-primary">{activeProject.title}</h3>
                    <p className="text-xs text-text-secondary mt-1">{activeProject.role} • {activeProject.period}</p>
                  </div>
                  <button
                    className="text-text-secondary hover:text-text-primary p-2 rounded-full hover:bg-foreground transition-colors cursor-pointer"
                    onClick={() => setIsOpen(null)}
                    aria-label="Close modal"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar space-y-6">
                  {/* Project Screenshot Showcase */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-card-border bg-thirdary shadow-sm">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className={`transition-transform duration-300 ${
                        activeProject.imageFit === "contain"
                          ? "object-contain p-4 bg-neutral-950"
                          : "object-cover object-top"
                      }`}
                      sizes="(max-width: 768px) 100vw, 680px"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-text-secondary opacity-75 block mb-2">
                      Project Overview
                    </span>
                    <p className="text-sm text-text-primary leading-relaxed font-normal">
                      {activeProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-text-secondary opacity-75 block mb-3">
                      Technologies &amp; Architecture
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-thirdary text-text-primary border border-card-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-text-secondary opacity-75 block mb-3">
                      Key Highlights &amp; Features
                    </span>
                    <ul className="space-y-2.5">
                      {activeProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-text-secondary p-3 rounded-xl bg-thirdary border border-card-border">
                          <span className="text-text-primary font-bold mt-0.5">&#10003;</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-5 border-t border-card-border bg-thirdary flex justify-end">
                  <button
                    onClick={() => setIsOpen(null)}
                    className="px-6 py-2.5 rounded-xl bg-text-primary text-background font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

const projectList: ProjectItem[] = [
  {
    index: 0,
    title: "TesYuk",
    role: "Fullstack Developer",
    category: "Web App & CBT",
    period: "Mar 2026 – July 2026",
    image: "/images/project-tesyuk.png",
    imageFit: "cover",
    shortDescription:
      "Comprehensive Computer-Based Testing (CBT) and psychological assessment platform featuring auto-scoring and Filament admin management.",
    fullDescription:
      "TesYuk is a full-featured web-based assessment application built with Laravel. It features an automated examination engine with anti-cheat timers, automatic result calculation, dynamic question banks, and an administrative dashboard powered by Laravel Filament for test organizers.",
    tech: ["Laravel", "PHP", "Filament PHP", "MySQL", "Tailwind CSS"],
    features: [
      "Secure live examination module with countdown timers and automatic submission",
      "Filament-powered administration dashboard for batch student and test management",
      "Automated evaluation algorithms with instant score breakdowns and PDF export",
      "Optimized MySQL relational database schema with transaction consistency",
      "Role-Based Access Control (RBAC) separating test takers and administrators",
    ],
  },
  {
    index: 1,
    title: "Inkluvy",
    role: "Frontend Developer",
    category: "Web Platform & a11y",
    period: "July 2026 – Aug 2026",
    image: "/images/project-inkluvy.png",
    imageFit: "cover",
    shortDescription:
      "Inclusive educational learning web platform engineered specifically for deaf and hard-of-hearing students with WCAG accessibility standards.",
    fullDescription:
      "Inkluvy is an accessible web platform designed to empower deaf and hearing-impaired learners. The application emphasizes visual-first pedagogy, sign language video integration, high-contrast accessible color palettes, and strict compliance with WCAG 2.1 accessibility guidelines.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Accessibility (a11y)", "WCAG 2.1"],
    features: [
      "Engineered reusable accessible UI components meeting WCAG 2.1 AAA guidelines",
      "Implemented keyboard-first navigation and clear screen reader aria annotations",
      "Custom synchronized video player with subtitle toggle and visual sign cues",
      "Strict TypeScript type architecture guaranteeing robust maintainability",
      "Fully responsive layout crafted with fluid design tokens and Tailwind CSS",
    ],
  },
  {
    index: 2,
    title: "HerbScan",
    role: "Mobile & Frontend Developer",
    category: "Mobile App & ML",
    period: "Sep 2026 – Present",
    image: "/images/project-herbscan.png",
    imageFit: "contain",
    shortDescription:
      "Instant herbal leaf identification mobile app utilizing smartphone camera input and a machine learning classification model built with Riverpod architecture.",
    fullDescription:
      "HerbScan is an intelligent cross-platform mobile application developed with Flutter that enables users to scan and identify various herbal and medicinal plants through a mobile device camera. The application connects to a backend Machine Learning inference API, delivering detailed botanical information, therapeutic usages, and cultivation guidance in real time.",
    tech: ["Flutter", "Dart", "Riverpod", "Machine Learning", "Flask API"],
    features: [
      "Real-time camera scanner with live viewfinder and capture capabilities",
      "Robust state management and reactivity implemented with Flutter Riverpod",
      "Seamless integration with Flask ML backend classification endpoints",
      "Interactive herbal library with search, filtering, and offline bookmarking",
      "Clean, accessible responsive UI optimized for modern Android & iOS smartphones",
    ],
  },
]
