"use client"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"

export default function Contact() {
  return (
    <section
      id="contacts"
      className="w-full max-w-5xl mx-auto py-24 md:py-32 cursor-default bg-background relative overflow-hidden border-t border-card-border"
    >
      <FadeDown>
        <div className="px-6 md:px-12 mb-14 md:mb-16 w-full text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-3 opacity-75">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            Contact Me
          </h3>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed font-normal">
            Whether you have an upcoming project, software opportunity, or simply want to connect, feel free to reach out directly through the channels below.
          </p>
        </div>
      </FadeDown>

      <div className="px-6 md:px-12 w-full">
        <FadeUp delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-5">
            {/* Email */}
            <a
              href="mailto:baguswichaksonoamanulloh@gmail.com"
              className="group p-6 sm:p-7 rounded-2xl bg-foreground border border-card-border hover:border-text-primary/40 transition-all duration-300 flex flex-col items-center text-center shadow-sm hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-thirdary border border-card-border flex items-center justify-center text-text-primary mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-text-primary mb-1">Email</h4>
              <p className="text-xs text-text-secondary break-all">
                baguswichaksonoamanulloh@gmail.com
              </p>
              <span className="mt-4 text-xs font-semibold text-text-primary group-hover:underline">
                Send an email &rarr;
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/bagus-wichaksono-amanulloh"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-7 rounded-2xl bg-foreground border border-card-border hover:border-text-primary/40 transition-all duration-300 flex flex-col items-center text-center shadow-sm hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-thirdary border border-card-border flex items-center justify-center text-text-primary mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-text-primary mb-1">LinkedIn</h4>
              <p className="text-xs text-text-secondary">
                bagus-wichaksono-amanulloh
              </p>
              <span className="mt-4 text-xs font-semibold text-text-primary group-hover:underline">
                View profile &rarr;
              </span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
