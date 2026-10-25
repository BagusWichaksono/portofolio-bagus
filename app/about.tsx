import ScrollVelocity from "@/components/ScrollVelocity"
import FadeDown from "@/components/animations/FadeDown"
import Fade from "@/components/animations/Fade"
import FadeLeft from "@/components/animations/FadeLeft"

export default function About() {
  const velocity = 50

  return (
    <>
      <section id="about" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background overflow-hidden border-t border-card-border">
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-16 w-full text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-3 opacity-75">Background</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tight">Education &amp; Details</h3>
          </div>
        </FadeDown>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 px-6 md:px-12">
          {/* Column 1: Academic Background */}
          <div className="flex flex-col gap-6">
            <Fade>
              <h4 className="text-xl font-bold text-text-primary border-b border-card-border pb-3 flex items-center gap-2.5">
                <svg className="w-5 h-5 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Academic Background
              </h4>
            </Fade>

            <div className="space-y-4">
              <FadeLeft delay={0.1}>
                <div className="p-6 rounded-2xl bg-foreground border border-card-border hover:border-text-primary/40 transition-colors shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h5 className="text-base font-bold text-text-primary">
                      Politeknik Negeri Malang
                    </h5>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-thirdary text-text-primary border border-card-border w-fit">
                      Aug 2024 – Present
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-text-secondary mb-2.5">
                    D-IV Informatics Engineering
                  </p>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">Relevant Coursework:</strong> Mobile Programming, Advanced Web Programming, Business Intelligence, Computer Networks, and Relational Databases.
                  </p>
                </div>
              </FadeLeft>

              <FadeLeft delay={0.2}>
                <div className="p-6 rounded-2xl bg-foreground border border-card-border hover:border-text-primary/40 transition-colors shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h5 className="text-base font-bold text-text-primary">
                      SMAN 1 Singosari
                    </h5>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-thirdary text-text-secondary border border-card-border w-fit">
                      Jul 2020 – Apr 2023
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-text-secondary">
                    Natural Sciences (MIPA)
                  </p>
                </div>
              </FadeLeft>
            </div>
          </div>

          {/* Column 2: Personal & Professional Details */}
          <div className="flex flex-col gap-6">
            <Fade>
              <h4 className="text-xl font-bold text-text-primary border-b border-card-border pb-3 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-text-primary"></span>
                Key Details
              </h4>
            </Fade>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-foreground border border-card-border shadow-sm">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-text-secondary opacity-75 block mb-1.5">Full Name</span>
                <span className="text-sm font-bold text-text-primary">Bagus Wichaksono Amanulloh</span>
              </div>

              <div className="p-5 rounded-2xl bg-foreground border border-card-border shadow-sm">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-text-secondary opacity-75 block mb-1.5">Specialization</span>
                <span className="text-sm font-bold text-text-primary">Mobile &amp; Web Development</span>
              </div>

              <div className="p-5 rounded-2xl bg-foreground border border-card-border shadow-sm">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-text-secondary opacity-75 block mb-1.5">Current Status</span>
                <span className="text-sm font-bold text-text-primary">Undergraduate Student</span>
              </div>

              <div className="p-5 rounded-2xl bg-foreground border border-card-border shadow-sm">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-text-secondary opacity-75 block mb-1.5">Institution</span>
                <span className="text-sm font-bold text-text-primary">Politeknik Negeri Malang</span>
              </div>

              <div className="p-5 rounded-2xl bg-foreground border border-card-border shadow-sm sm:col-span-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-text-secondary opacity-75 block mb-1.5">Direct Email</span>
                <a href="mailto:baguswichaksonoamanulloh@gmail.com" className="text-sm font-bold text-text-primary hover:underline truncate block">
                  baguswichaksonoamanulloh@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <Fade>
          <div className="mt-20 md:mt-28 pb-4">
            <ScrollVelocity texts={["Bagus Wichaksono Amanulloh", "Mobile & Web Developer", "Politeknik Negeri Malang"]} velocity={velocity} className="font-black tracking-tighter text-text-secondary opacity-15" />
          </div>
        </Fade>
      </section>
    </>
  )
}
