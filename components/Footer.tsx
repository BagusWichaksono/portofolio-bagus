import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-card-border bg-background py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-text-primary">
            &copy; {currentYear} Bagus Wichaksono Amanulloh. All rights reserved.
          </p>
          <p className="text-xs font-normal text-text-secondary mt-0.5 opacity-75">
            D-IV Informatics Engineering — Politeknik Negeri Malang
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors text-xs font-semibold uppercase tracking-wider"
          >
            CV / Resume
          </a>
          <a
            href="https://linkedin.com/in/bagus-wichaksono-amanulloh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors text-xs font-semibold uppercase tracking-wider"
          >
            LinkedIn
          </a>
          <a
            href="mailto:baguswichaksonoamanulloh@gmail.com"
            className="text-text-secondary hover:text-text-primary transition-colors text-xs font-semibold uppercase tracking-wider"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
