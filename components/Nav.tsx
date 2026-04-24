"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Nosotras", href: "/nosotras" },
  { label: "Propiedades", href: "/#propiedades" },
  { label: "Contacto", href: "/contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0E100F]/85 backdrop-blur-md border-b border-[#2A2C2E]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20 py-5">
          <Link
            href="/"
            className="font-display text-2xl text-[#E8E2D6] tracking-tight"
          >
            Origen<em className="text-[#C67B55] not-italic">3</em>
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[11px] tracking-[0.3em] uppercase text-[#E8E2D6] font-light hover:text-[#C67B55] transition-colors duration-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-7 h-4 flex flex-col justify-between"
            aria-label="Abrir menú"
          >
            <span
              className={`block h-px w-full bg-[#E8E2D6] transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-[#E8E2D6] transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-[#E8E2D6] transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-[#0E100F] flex flex-col items-center justify-center gap-12"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl text-[#E8E2D6] hover:text-[#C67B55] transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
