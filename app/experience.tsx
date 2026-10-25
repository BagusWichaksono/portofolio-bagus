"use client"
import Image from "next/image"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"

interface ExperienceItem {
  id: number
  title: string
  organization: string
  location: string
  period: string
  description: string
  skills: string[]
  image?: string
  certificatePdf?: string
  certificatePreview?: string
}

const volunteerList: ExperienceItem[] = [
  {
    id: 1,
    title: "Expo Equipment Division Volunteer",
    organization: "PLAY IT PLUS 2026",
    location: "Malang, East Java",
    period: "Sep 2026 – Present",
    description:
      "Managed inventory records, distribution logistics, and technical equipment allocation for expo booth areas. Coordinated actively with external vendors and the internal committee to ensure all booth technical specifications and requirements were met smoothly.",
    skills: ["Technical Logistics", "Expo Inventory", "Vendor Coordination", "Teamwork"],
  },
  {
    id: 2,
    title: "Equipment Division Volunteer",
    organization: "PLAY IT 2026",
    location: "Malang, East Java",
    period: "Mar 2026 – Jul 2026",
    description:
      "Supported technical logistics preparations, venue setups, and operational equipment management to facilitate smooth execution across all PLAY IT 2026 event activities.",
    skills: ["Venue Management", "Field Operations", "Problem Solving", "Equipment Setup"],
    image: "/images/fotoplayit2026.jpg",
  },
]

const awardsList: ExperienceItem[] = [
  {
    id: 3,
    title: "Finalist — Web Design Competition",
    organization: "CITECH 2026 (Universitas Jember)",
    location: "National Level",
    period: "2026",
    description:
      "Advanced as a national finalist in the web design competition by designing and presenting an interactive, modern web interface with a focus on intuitive UI/UX design principles, responsive layout, and visual excellence.",
    skills: ["Web Design", "UI/UX Architecture", "Prototyping", "Design Presentation"],
    certificatePdf: "/Finalis - Bagus Wichaksono Amanulloh.pdf",
    certificatePreview: "/images/citech-certificate.png",
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-card-border"
    >
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-20 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-3 opacity-75">
            Track Record
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tight">
            Volunteer &amp; Honors
          </h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* 1. Volunteer Experience Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 pb-3 border-b border-card-border">
            <span className="w-2.5 h-2.5 rounded-full bg-text-primary"></span>
            <h4 className="text-2xl font-bold text-text-primary tracking-tight">
              Volunteer Experience
            </h4>
          </div>

          <div className="flex flex-col gap-6">
            {volunteerList.map((item, idx) => (
              <FadeUp key={item.id} delay={idx * 0.1}>
                <div className="p-6 md:p-8 rounded-2xl bg-foreground border border-card-border hover:border-text-primary/40 transition-colors shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider opacity-80">
                      {item.organization} • {item.location}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-thirdary text-text-primary border border-card-border w-fit">
                      {item.period}
                    </span>
                  </div>

                  <h5 className="text-xl font-bold text-text-primary mb-3">
                    {item.title}
                  </h5>

                  <p className="text-sm text-text-secondary leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>

                  {/* Photo Documentation for PLAY IT 2026 */}
                  {item.image && (
                    <div className="relative w-full max-w-sm sm:max-w-md aspect-[16/10] sm:aspect-[16/9] max-h-52 my-3 rounded-xl overflow-hidden border border-card-border group">
                      <Image
                        src={item.image}
                        alt={`${item.organization} Volunteer Activity`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 448px"
                      />
                      <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[11px] font-medium text-white shadow-sm border border-white/10">
                        Documentation • {item.organization}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-card-border">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium px-3 py-1 rounded-lg bg-thirdary text-text-secondary border border-card-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* 2. Honors & Competitions Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 pb-3 border-b border-card-border">
            <span className="w-2.5 h-2.5 rounded-full bg-text-primary"></span>
            <h4 className="text-2xl font-bold text-text-primary tracking-tight">
              Honors &amp; Competitions
            </h4>
          </div>

          <div className="flex flex-col gap-4">
            {awardsList.map((item, idx) => (
              <FadeUp key={item.id} delay={idx * 0.1}>
                <div className="p-6 md:p-8 rounded-2xl bg-foreground border border-card-border hover:border-text-primary/40 transition-colors shadow-sm">
                  {item.certificatePreview ? (
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {/* Left: Certificate Preview (Compact & Clean) */}
                      <div className="w-full sm:w-60 md:w-64 shrink-0">
                        <a
                          href={item.certificatePdf || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative block w-full aspect-[1.414/1] rounded-xl overflow-hidden border border-card-border group shadow-xs hover:border-text-primary/50 transition-all bg-thirdary"
                          title="Click to view full certificate (PDF)"
                        >
                          <Image
                            src={item.certificatePreview}
                            alt={`${item.title} Certificate Preview`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 256px"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20 shadow-md">
                              <span>Open PDF</span>
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </span>
                          </div>
                          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] text-white font-medium">
                            Certificate Preview
                          </div>
                        </a>
                      </div>

                      {/* Right: Certificate Information & Details */}
                      <div className="flex-1 w-full flex flex-col justify-between">
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                            <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider opacity-80">
                              {item.organization} • {item.location}
                            </span>
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-thirdary text-text-primary border border-card-border w-fit">
                              {item.period}
                            </span>
                          </div>

                          <h5 className="text-xl font-bold text-text-primary mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                            </svg>
                            <span>{item.title}</span>
                          </h5>

                          <p className="text-sm text-text-secondary leading-relaxed mb-4 font-normal">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-card-border">
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-xs font-medium px-3 py-1 rounded-lg bg-thirdary text-text-secondary border border-card-border"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {item.certificatePdf && (
                            <a
                              href={item.certificatePdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-thirdary text-text-primary border border-card-border hover:border-text-primary/50 transition-colors w-fit shrink-0"
                            >
                              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8 12h2v4H8v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z" />
                              </svg>
                              <span>View Certificate (PDF)</span>
                              <svg className="w-3.5 h-3.5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider opacity-80">
                          {item.organization} • {item.location}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-thirdary text-text-primary border border-card-border w-fit">
                          {item.period}
                        </span>
                      </div>

                      <h5 className="text-xl font-bold text-text-primary mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                        </svg>
                        <span>{item.title}</span>
                      </h5>

                      <p className="text-sm text-text-secondary leading-relaxed mb-5 font-normal">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-3 border-t border-card-border">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs font-medium px-3 py-1 rounded-lg bg-thirdary text-text-secondary border border-card-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
