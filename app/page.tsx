"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const servicios = [
  {
    num: "01",
    titulo: "Compra",
    desc: "Te acompañamos en cada paso para encontrar la propiedad que mejor se adapta a tu vida y patrimonio.",
  },
  {
    num: "02",
    titulo: "Venta",
    desc: "Estrategia, presentación y negociación experta para vender tu propiedad al mejor precio y en el menor tiempo.",
  },
  {
    num: "03",
    titulo: "Preventa",
    desc: "Acceso anticipado a los desarrollos más exclusivos de Querétaro antes de que salgan al mercado.",
  },
  {
    num: "04",
    titulo: "Asesoría",
    desc: "Consultoría patrimonial e inmobiliaria para que cada decisión sume a tu visión de largo plazo.",
  },
];

const propiedades = [
  {
    titulo: "Residencial Zibatá",
    tipo: "Casa · Preventa",
    precio: "Desde $4.2 MDP",
    gradient: "from-[#1E2A1E] to-[#0D0C0B]",
  },
  {
    titulo: "Juriquilla Grand",
    tipo: "Departamento · Venta",
    precio: "Desde $2.8 MDP",
    gradient: "from-[#1E1A14] to-[#0D0C0B]",
  },
  {
    titulo: "El Marqués Residencial",
    tipo: "Terreno · Inversión",
    precio: "Desde $1.5 MDP",
    gradient: "from-[#14181E] to-[#0D0C0B]",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C0B] via-[#0D0C0B] to-[#181614]" />

        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 79px,
              #C9A96E 79px,
              #C9A96E 80px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 79px,
              #C9A96E 79px,
              #C9A96E 80px
            )`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          {/* Small label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-8"
          >
            Bienes Raíces · Querétaro · México
          </motion.p>

          {/* Main headline */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="font-display text-[clamp(4rem,12vw,10rem)] leading-none tracking-tight text-[#F2EDE4]"
            >
              ORIGEN
              <span className="text-[#C9A96E]">3</span>
            </motion.h1>
          </div>

          {/* Divider + tagline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            style={{ transformOrigin: "left" }}
            className="h-px w-full bg-[#2D2A26] mb-8"
          />

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease }}
              className="text-lg lg:text-xl text-[#6B6560] font-light max-w-lg leading-relaxed"
            >
              Tres especialistas. Un solo compromiso.
              <br />
              <span className="text-[#F2EDE4]">
                Hacemos del proceso inmobiliario tu mejor decisión.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0, ease }}
              className="flex items-center gap-4"
            >
              <Link
                href="/#propiedades"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#C9A96E] text-[#0D0C0B] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#F2EDE4] transition-colors duration-300"
              >
                Ver propiedades
              </Link>
              <Link
                href="/nosotras"
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-[#2D2A26] text-[#6B6560] text-xs tracking-[0.2em] uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
              >
                El equipo
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 right-6 lg:right-12 flex items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#2D2A26] rotate-90 origin-center">
            Scroll
          </span>
          <div className="w-px h-10 bg-[#2D2A26]" />
        </motion.div>
      </section>

      {/* Ticker */}
      <div className="border-y border-[#2D2A26] overflow-hidden py-4 bg-[#181614]">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[11px] tracking-[0.3em] uppercase text-[#2D2A26] px-10"
            >
              Compra&nbsp;·&nbsp;Venta&nbsp;·&nbsp;Preventa&nbsp;·&nbsp;Asesoría
              Patrimonial&nbsp;·&nbsp;Querétaro&nbsp;·&nbsp;Top Performers&nbsp;·
            </span>
          ))}
        </div>
      </div>

      {/* Manifiesto */}
      <section className="py-24 lg:py-36 bg-[#0D0C0B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-1 hidden lg:flex flex-col items-center gap-4">
              <div className="w-px h-16 bg-[#C9A96E]" />
              <p
                className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]"
                style={{ writingMode: "vertical-rl" }}
              >
                Filosofía
              </p>
            </div>

            <FadeIn className="lg:col-span-7">
              <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-tight text-[#F2EDE4]">
                Transformamos la búsqueda de
                <em className="not-italic text-[#C9A96E]"> propiedades </em>
                en una experiencia extraordinaria.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-4">
              <p className="text-sm text-[#6B6560] leading-loose border-l border-[#2D2A26] pl-6">
                Somos tres mujeres con más de 15 años de experiencia combinada
                en el mercado inmobiliario de Querétaro. Nuestro historial habla
                por sí solo: cientos de familias que encontraron su lugar en el
                mundo, y clientes inversores que multiplicaron su patrimonio.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-24 lg:py-32 bg-[#181614] border-t border-[#2D2A26]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-16">
              Servicios
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2D2A26]">
            {servicios.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.08}>
                <div className="bg-[#181614] p-8 lg:p-10 group hover:bg-[#0D0C0B] transition-colors duration-500 h-full">
                  <p className="font-display text-5xl text-[#2D2A26] group-hover:text-[#C9A96E] transition-colors duration-500 mb-8">
                    {s.num}
                  </p>
                  <h3 className="font-display text-2xl text-[#F2EDE4] mb-4">
                    {s.titulo}
                  </h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Propiedades */}
      <section
        id="propiedades"
        className="py-24 lg:py-32 bg-[#0D0C0B] border-t border-[#2D2A26]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <FadeIn>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-3">
                Propiedades
              </p>
              <h2 className="font-display text-4xl lg:text-5xl text-[#F2EDE4]">
                Destacadas
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link
                href="/contacto"
                className="hidden md:inline-flex text-xs tracking-[0.2em] uppercase text-[#6B6560] hover:text-[#C9A96E] transition-colors border-b border-[#2D2A26] pb-1"
              >
                Ver todas →
              </Link>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {propiedades.map((p, i) => (
              <FadeIn key={p.titulo} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease }}
                  className="group cursor-pointer"
                >
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative overflow-hidden mb-5`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-6xl text-[#2D2A26] group-hover:text-[#C9A96E]/20 transition-colors duration-500">
                        O3
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block text-[10px] tracking-[0.25em] uppercase text-[#C9A96E] border border-[#C9A96E]/30 px-3 py-1">
                        {p.tipo}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base text-[#F2EDE4] mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
                        {p.titulo}
                      </h3>
                      <p className="text-xs text-[#6B6560]">Querétaro</p>
                    </div>
                    <p className="text-sm text-[#C9A96E] font-medium">
                      {p.precio}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 lg:py-36 bg-[#181614] border-t border-[#2D2A26]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-6">
              Empecemos
            </p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-tight text-[#F2EDE4] mb-10 max-w-3xl mx-auto">
              ¿Lista para encontrar tu propiedad ideal?
            </h2>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-4 px-10 py-4 bg-[#C9A96E] text-[#0D0C0B] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#F2EDE4] transition-colors duration-300"
            >
              Agendar una llamada
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
