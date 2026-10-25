
"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { MoveUpRight, MousePointer2 } from "lucide-react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-sm text-cyan-300">
      Loading 3D Experience...
    </div>
  ),
});

export default function ModelShowcase() {
  return (
    <section
      id="3d-showcase"
      className="relative scroll-mt-16 overflow-hidden bg-[#080b12] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="cinematic-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            01 / Interactive Experience
          </p>

          <h2 className="text-4xl font-medium tracking-tight text-white md:text-6xl">
            Beyond the{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Screen.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            A personal milestone transformed into an
            interactive 3D experience. Explore the details
            of my graduation-inspired digital artwork.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9 }}
          className="glass-panel relative h-[420px] overflow-hidden rounded-[28px] md:h-[620px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]" />

          <div className="pointer-events-none absolute left-6 top-6 z-10 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-200 md:left-10 md:top-10">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            Interactive 3D
          </div>

          <HeroScene />

          <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-slate-400 md:bottom-10 md:left-10 md:right-10">
            <span className="flex items-center gap-2">
              <MousePointer2 size={16} />
              Drag to rotate
            </span>

            <span className="flex items-center gap-2">
              GLB Model
              <MoveUpRight size={16} />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
