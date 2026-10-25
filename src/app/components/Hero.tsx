
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
      {/* FOTO BACKGROUND */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat md:bg-[position:center_40%]"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />

      {/* DARK CINEMATIC OVERLAY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-[#050b15]/95 via-[#050b15]/55 to-[#050b15]/10"
      />

      {/* TOP AND BOTTOM SHADOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#050b15]/70 via-transparent to-[#050b15]/30"
      />

      {/* SUBTLE GRID */}
      <div
        aria-hidden="true"
        className="grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-35"
      />

      <Navbar />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-8 pt-28 md:px-10">
        <div className="flex flex-1 items-center">
          <div className="w-full max-w-3xl py-12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-slate-950/30 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Creative Web Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12 }}
              className="text-5xl font-medium leading-[1.02] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="block text-white">
                Building
              </span>

              <span className="mt-1 block text-slate-300">
                Digital.
              </span>

              <span className="mt-1 block bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                Experiences.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-slate-200/90 md:text-lg lg:mx-0"
            >
              I'm Afiz, a web developer passionate about
              crafting immersive, interactive, and visually
              stunning digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-300 px-7 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 transition-colors hover:bg-cyan-200"
              >
                Explore My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/35 bg-black/20 px-7 py-3.5 font-medium text-white backdrop-blur-md transition-colors hover:bg-white/15"
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
            Scroll to Explore
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
