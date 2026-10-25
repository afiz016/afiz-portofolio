
import Hero from "./components/Hero";
import ModelShowcase from "./components/ModelShowcase";
import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  ExternalLink,
  Mail,
} from "lucide-react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Laravel",
  "MySQL",
  "Three.js",
];

const projects = [
  {
    number: "01",
    title: "School Profile Website",
    category: "Web Development",
    description:
      "A modern school information website with content management features.",
    stack: ["Laravel", "Tailwind CSS", "MySQL"],
    icon: Code2,
  },
  {
    number: "02",
    title: "Digital Asset Decision System",
    category: "Decision Support System",
    description:
      "A web-based decision support system for evaluating digital investment alternatives.",
    stack: ["Laravel", "TOPSIS", "MySQL"],
    icon: Database,
  },
  {
    number: "03",
    title: "Interactive 3D Portfolio",
    category: "Creative Development",
    description:
      "An immersive portfolio combining modern web technology and interactive 3D models.",
    stack: ["Next.js", "Three.js", "Tailwind"],
    icon: Layers3,
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#080b12]">
      {/* HERO */}
      <Hero />

      {/* 3D SHOWCASE */}
      <ModelShowcase />

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-16 border-t border-white/10 px-6 py-28 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-cyan-300">
              02 / About Me
            </p>

            <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              Code meets
              <br />
              <span className="text-slate-500">
                creativity.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-slate-300">
              Hi, I'm Afiz. I'm passionate about building
              digital products that combine functional
              technology with meaningful visual experiences.
            </p>

            <p className="mt-5 leading-relaxed text-slate-400">
              My interests include web development,
              interactive interfaces, 3D experiences,
              and creative technology.
            </p>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-2 self-start text-cyan-300 transition-colors hover:text-cyan-200"
            >
              Discover my work
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-t border-white/10 bg-[#0c111b] px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-cyan-300">
            My Toolkit
          </p>

          <h2 className="mb-12 text-4xl font-medium tracking-tight md:text-5xl">
            Technologies & Skills.
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-slate-300 transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-16 border-t border-white/10 px-6 py-28 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-cyan-300">
            03 / Selected Work
          </p>

          <h2 className="mb-14 text-4xl font-medium tracking-tight md:text-6xl">
            Featured{" "}
            <span className="text-slate-500">
              Projects.
            </span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.number}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-cyan-300/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-56 items-center justify-center bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)]">
                    <Icon
                      size={65}
                      strokeWidth={1}
                      className="text-cyan-200/70"
                    />
                  </div>

                  <div className="border-t border-white/10 p-7">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-cyan-300">
                        {project.category}
                      </span>

                      <span className="text-xs text-slate-500">
                        {project.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-medium text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 min-h-20 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-16 border-t border-white/10 bg-[#0c111b] px-6 py-28 md:px-10"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-cyan-300">
            04 / Get In Touch
          </p>

          <h2 className="text-5xl font-medium leading-tight tracking-tight md:text-7xl">
            Let's create
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              something great.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-slate-400">
            Have an idea, a project, or just want to
            connect? I'd love to hear from you.
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-8 py-4 font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
          >
            <Mail size={19} />
            Get In Touch
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <span className="text-xl font-bold text-white">
            AFIZ<span className="text-cyan-300">.</span>
          </span>

          <p className="text-sm text-slate-500">
            © 2026 Afiz. Crafted with creativity.
          </p>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-cyan-300"
          >
            <ExternalLink size={21} />
          </a>
        </div>
      </footer>
    </main>
  );
}
