
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white"
        >
          AFIZ<span className="text-cyan-300">.</span>
        </a>

        <div className="hidden items-center gap-9 rounded-full border border-white/10 bg-white/5 px-8 py-3 backdrop-blur-xl md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="mailto:hello@example.com"
          className="hidden items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-black md:flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-white/20 p-3 text-white md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-5 rounded-2xl border border-white/10 bg-[#101722]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-slate-200 transition-colors hover:text-cyan-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
