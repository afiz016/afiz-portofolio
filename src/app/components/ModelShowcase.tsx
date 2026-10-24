
"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-cyan-300">
      Loading 3D...
    </div>
  ),
});

export default function ModelShowcase() {
  return (
    <section
      id="3d-showcase"
      className="relative overflow-hidden bg-[#080b12] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-300">
            INTERACTIVE 3D EXPERIENCE
          </p>

          <h2 className="text-4xl font-medium tracking-tight text-white md:text-6xl">
            Beyond the Screen.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            A personal milestone brought into an
            interactive digital experience.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] md:h-[600px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]" />

          <HeroScene />

          <div className="pointer-events-none absolute bottom-6 left-6 text-xs uppercase tracking-widest text-slate-400">
            Drag to interact / 3D Model
          </div>
        </motion.div>
      </div>
    </section>
  );
}
