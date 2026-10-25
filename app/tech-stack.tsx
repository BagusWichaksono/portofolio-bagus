"use client"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-card-border overflow-hidden"
    >
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-20 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-3 opacity-75">
            Skills &amp; Technologies
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tight">
            Tech Stack &amp; Tools
          </h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        {techCategories.map((category, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-6 md:gap-12 items-start pb-10 border-b border-card-border last:border-b-0"
          >
            <div className="md:w-1/3">
              <FadeDown delay={idx * 0.08}>
                <h4 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight mb-2">
                  {category.title}
                </h4>
                <p className="text-text-secondary font-normal text-sm leading-relaxed">
                  {category.description}
                </p>
              </FadeDown>
            </div>

            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 w-full">
              {category.technologies.map((tech, techIdx) => (
                <FadeUp key={techIdx} delay={idx * 0.06 + techIdx * 0.03}>
                  <div className="group flex flex-col items-center justify-center p-4 bg-foreground hover:bg-thirdary border border-card-border hover:border-text-primary/40 rounded-xl transition-all duration-200 hover:-translate-y-1 h-full shadow-sm">
                    <div className="w-10 h-10 mb-2.5 flex items-center justify-center pointer-events-none group-hover:scale-105 transition-transform">
                      {tech.svg ? (
                        <img
                          src={tech.svg}
                          alt={tech.name}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <div className="w-8 h-8 flex items-center justify-center font-bold text-xs bg-thirdary text-text-primary border border-card-border rounded-lg">
                          {tech.badge || tech.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-text-primary text-center">
                      {tech.name}
                    </span>
                    {tech.sub && (
                      <span className="text-[10px] text-text-secondary text-center mt-0.5 opacity-75">
                        {tech.sub}
                      </span>
                    )}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        ))}

        {/* Soft Skills & Collaboration */}
        <div className="p-6 sm:p-7 rounded-2xl bg-foreground border border-card-border shadow-sm">
          <FadeDown>
            <h4 className="text-base font-bold text-text-primary mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Interpersonal &amp; Collaborative Strengths
            </h4>
            <p className="text-xs text-text-secondary mb-4">
              Non-technical competencies supporting effective teamwork, structured communication, and operational efficiency.
            </p>
          </FadeDown>

          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3.5 py-1.5 rounded-lg bg-thirdary border border-card-border text-text-secondary text-xs font-medium hover:border-text-primary/40 hover:text-text-primary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TechItem {
  name: string
  sub?: string
  svg?: string
  badge?: string
}

interface TechCategory {
  title: string
  description: string
  technologies: TechItem[]
}

const techCategories: TechCategory[] = [
  {
    title: "Mobile & Frontend",
    description: "Developing cross-platform applications and dynamic, responsive web interfaces with modern frameworks.",
    technologies: [
      { name: "Flutter", sub: "Cross-Platform Mobile", svg: "./icons/flutter.svg" },
      { name: "Dart", sub: "Language", svg: "./icons/dart.svg" },
      { name: "React", sub: "Web Library", svg: "./icons/react.svg" },
      { name: "TypeScript", sub: "Typed JavaScript", svg: "./icons/typescript.svg" },
      { name: "JavaScript", sub: "Core Web", svg: "./icons/javascript.svg" },
      { name: "HTML5", sub: "Structure", svg: "./icons/html.svg" },
      { name: "CSS3", sub: "Styling", svg: "./icons/css.svg" },
      { name: "Bootstrap", sub: "CSS Framework", svg: "./icons/bootstrap.svg" },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Architecting reliable server-side services, relational database schemas, and structured APIs.",
    technologies: [
      { name: "Laravel", sub: "PHP Framework", svg: "./icons/laravel.svg" },
      { name: "PHP", sub: "Server Language", svg: "./icons/php.svg" },
      { name: "Python", sub: "Flask & ML Services", svg: "./icons/python.svg" },
      { name: "MySQL", sub: "Relational DB", svg: "./icons/mysql.svg" },
      { name: "PostgreSQL", sub: "Advanced SQL", svg: "./icons/postgresql.svg" },
    ],
  },

  {
    title: "Tools & DevOps",
    description: "Development environments, version control pipelines, API testing, and UI design prototyping.",
    technologies: [
      { name: "Git", sub: "Version Control", svg: "./icons/git.svg" },
      { name: "GitHub", sub: "Code Hosting", svg: "./icons/github.svg" },
      { name: "Postman", sub: "API Testing", svg: "./icons/postman.svg" },
      { name: "Figma", sub: "UI/UX Design", svg: "./icons/figma.svg" },
      { name: "VS Code", sub: "Primary IDE", svg: "./icons/vscode.svg" },
      { name: "Android Studio", sub: "Mobile IDE", svg: "./icons/androidstudio.svg" },
    ],
  },
]

const softSkills = [
  "Cross-Team Communication",
  "Vendor & Operational Coordination",
  "Technical Logistics Management",
  "Analytical Thinking",
  "Collaborative Teamwork",
  "Adaptive Problem Solving",
  "Detail-Oriented Engineering",
]
