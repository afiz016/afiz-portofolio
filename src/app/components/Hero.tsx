
"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#080b12]"
    >
      {/* Full-screen photo background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat md:bg-[position:center_38%]"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />

      {/* Dark overlay — dibuat lebih tipis agar sunset terlihat */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-[#060b14]/95 via-[#060b14]/60 to-[#060b14]/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#060b14]/65 via-transparent to-[#060b14]/25"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-40"
      />

      <Navbar />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-8 pt-28 md:px-10">
        <div className="flex flex-1 items-center">
          <div className="w-full max-w-3xl py-12 text-center md:py-16 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-slate-950/30 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Creative Web Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl font-medium leading-[0.98] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="block text-white">Building</span>
              <span className="mt-1 block text-slate-300">Digital.</span>
              <span className="mt-1 block bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                Experiences.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-slate-200/90 md:text-lg lg:mx-0"
            >
              I'm Afiz, a web developer passionate about
              crafting immersive, interactive, and
              visually stunning digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
              >
                Explore My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/40 bg-black/15 px-6 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/20 py-5 text-[10px] uppercase tracking-[0.2em] text-slate-300 sm:text-xs">
          <span>Portfolio / 2026</span>

          <a
            href="#3d-showcase"
            className="flex items-center gap-2 transition-colors hover:text-cyan-300"
          >
            Explore 3D
            <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
