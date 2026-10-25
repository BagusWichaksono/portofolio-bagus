import FadeDown from "@/components/animations/FadeDown"
import FadeLeft from "@/components/animations/FadeLeft"

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background overflow-hidden border-t border-card-border"
    >
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-3 opacity-75">
            Background
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tight">
            Education
          </h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Politeknik Negeri Malang */}
          <FadeLeft delay={0.1}>
            <div className="p-7 md:p-8 rounded-2xl bg-foreground border border-card-border hover:border-text-primary/40 transition-all duration-300 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h4 className="text-lg md:text-xl font-bold text-text-primary flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    Politeknik Negeri Malang
                  </h4>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-thirdary text-text-primary border border-card-border w-fit whitespace-nowrap">
                    Aug 2024 – Present
                  </span>
                </div>
                <p className="text-sm font-semibold text-text-secondary mb-3">
                  D-IV Informatics Engineering
                </p>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  <strong className="text-text-primary font-semibold">Relevant Coursework:</strong> Mobile Programming, Advanced Web Programming, Business Intelligence, Computer Networks, and Relational Databases.
                </p>
              </div>
            </div>
          </FadeLeft>

          {/* Card 2: SMAN 1 Singosari */}
          <FadeLeft delay={0.2}>
            <div className="p-7 md:p-8 rounded-2xl bg-foreground border border-card-border hover:border-text-primary/40 transition-all duration-300 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h4 className="text-lg md:text-xl font-bold text-text-primary flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    SMAN 1 Singosari
                  </h4>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-thirdary text-text-secondary border border-card-border w-fit whitespace-nowrap">
                    Jul 2020 – Apr 2023
                  </span>
                </div>
                <p className="text-sm font-semibold text-text-secondary mb-3">
                  Natural Sciences (MIPA)
                </p>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  Focused on natural sciences, mathematics, analytical thinking, and early foundational computing principles.
                </p>
              </div>
            </div>
          </FadeLeft>
        </div>
      </div>
    </section>
  )
}
