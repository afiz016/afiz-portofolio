
import Hero from "./components/Hero";
import ModelShowcase from "./components/ModelShowcase";
export default function Home() {
  return (
    <main>
      <Hero />

      <section
        id="about"
        className="flex min-h-[60vh] scroll-mt-20 flex-col justify-center border-t border-white/10 bg-[#0b1019] px-6 py-24 md:px-16"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-300">
            01 / About Me
          </p>
          <h2 className="max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
            Turning ideas into meaningful digital experiences.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-400">
            I'm Afiz, a web developer exploring modern
            interfaces, creative coding, and immersive
            web experiences.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-[50vh] scroll-mt-20 border-t border-white/10 bg-[#080b12] px-6 py-24 md:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-300">
            02 / Selected Work
          </p>
          <h2 className="text-4xl font-medium md:text-6xl">
            Featured Projects.
          </h2>
          <p className="mt-6 text-slate-400">
            My selected projects will appear here.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 border-t border-white/10 bg-[#0b1019] px-6 py-24 md:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-300">
            03 / Contact
          </p>
          <h2 className="text-4xl font-medium md:text-6xl">
            Have a project in mind?
          </h2>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-block rounded-full bg-cyan-300 px-7 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
          >
            Let's Work Together ↗
          </a>
        </div>
      </section>
    </main>
  );
}
