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
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const servicios = [
  {
    num: "I",
    titulo: "Compra",
    desc: "Te acompañamos en cada paso para encontrar la propiedad que mejor se adapta a tu vida y patrimonio.",
  },
  {
    num: "II",
    titulo: "Venta",
    desc: "Estrategia, presentación y negociación experta para vender tu propiedad al mejor precio y en el menor tiempo.",
  },
  {
    num: "III",
    titulo: "Preventa",
    desc: "Acceso anticipado a los desarrollos más exclusivos de Querétaro antes de que salgan al mercado.",
  },
  {
    num: "IV",
    titulo: "Asesoría",
    desc: "Consultoría patrimonial e inmobiliaria para que cada decisión sume a tu visión de largo plazo.",
  },
];

const propiedades = [
  {
    titulo: "Residencial Zibatá",
    tipo: "Casa · Preventa",
    precio: "Desde $4.2 MDP",
    gradient: "from-[#2A2C1F] via-[#1D2022] to-[#16181A]",
  },
  {
    titulo: "Juriquilla Grand",
    tipo: "Departamento · Venta",
    precio: "Desde $2.8 MDP",
    gradient: "from-[#2A1F1C] via-[#1D2022] to-[#16181A]",
  },
  {
    titulo: "El Marqués Residencial",
    tipo: "Terreno · Inversión",
    precio: "Desde $1.5 MDP",
    gradient: "from-[#1F2A28] via-[#1D2022] to-[#16181A]",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0E100F]">
        {/* Warm radial glow */}
        <div
          aria-hidden
          className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(198,123,85,0.22) 0%, rgba(198,123,85,0.08) 35%, transparent 70%)",
          }}
        />

        {/* Vignette */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.45) 100%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 w-full py-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="w-10 h-px bg-[#C67B55]" />
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C67B55] font-light">
              Bienes Raíces · Querétaro · México
            </p>
          </motion.div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.1, ease }}
              className="font-display text-[clamp(4.5rem,13vw,11rem)] leading-[0.95] tracking-tight text-[#E8E2D6] font-normal"
            >
              Origen<em className="text-[#C67B55] not-italic">3</em>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="font-display text-2xl md:text-3xl lg:text-4xl text-[#E8E2D6] font-normal leading-[1.3] max-w-3xl mb-8"
          >
            Tres especialistas. <em className="text-[#C67B55]">Un solo compromiso.</em>
            <br />
            <span className="text-[#8C8478]">
              Hacemos del proceso inmobiliario tu mejor decisión.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease }}
            className="flex flex-wrap items-center gap-5 mt-12"
          >
            <Link
              href="/#propiedades"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-[#C67B55] text-[#0E100F] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#E8E2D6] transition-colors duration-500"
            >
              <span>Ver propiedades</span>
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/nosotras"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#E8E2D6] font-light border-b border-[#8C8478]/40 hover:border-[#C67B55] hover:text-[#C67B55] pb-2 transition-colors duration-500"
            >
              Conoce al equipo
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="absolute bottom-10 right-6 lg:right-12 flex items-center gap-4"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#8C8478] font-light">
            Scroll
          </span>
          <div className="w-10 h-px bg-[#8C8478]" />
        </motion.div>
      </section>

      {/* Ticker — sutil, narrativo */}
      <div className="border-y border-[#2A2C2E] overflow-hidden py-5 bg-[#16181A]">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="font-display italic text-lg lg:text-xl text-[#8C8478] px-8 flex items-center gap-8"
            >
              Compra
              <span className="text-[#C67B55] not-italic">✦</span>
              Venta
              <span className="text-[#C67B55] not-italic">✦</span>
              Preventa
              <span className="text-[#C67B55] not-italic">✦</span>
              Asesoría Patrimonial
              <span className="text-[#C67B55] not-italic">✦</span>
              Querétaro
              <span className="text-[#C67B55] not-italic">✦</span>
              Top Performers
              <span className="text-[#C67B55] not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Manifiesto */}
      <section className="py-32 lg:py-48 bg-[#0E100F]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="flex items-center gap-4 mb-14">
              <span className="font-display italic text-3xl text-[#C67B55]">I.</span>
              <span className="w-12 h-px bg-[#C67B55]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8C8478] font-light">
                Filosofía
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-8">
              <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.1] text-[#E8E2D6] font-normal">
                Transformamos la búsqueda de
                <em className="text-[#C67B55]"> propiedades </em>
                en una <em className="text-[#E8E2D6]">experiencia extraordinaria</em>.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-4 lg:pt-8">
              <div className="relative pl-8">
                <span className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#C67B55] via-[#C67B55]/40 to-transparent" />
                <p className="text-base text-[#8C8478] leading-loose">
                  Somos tres mujeres con más de 15 años de experiencia combinada
                  en el mercado inmobiliario de Querétaro. Nuestro historial habla
                  por sí solo: cientos de familias que encontraron su lugar en el
                  mundo, y clientes inversores que multiplicaron su patrimonio.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Servicios — capítulo por capítulo */}
      <section className="py-32 lg:py-48 bg-[#16181A] border-t border-[#2A2C2E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="flex items-center gap-4 mb-20">
              <span className="font-display italic text-3xl text-[#C67B55]">II.</span>
              <span className="w-12 h-px bg-[#C67B55]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8C8478] font-light">
                Servicios
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col divide-y divide-[#2A2C2E]">
            {servicios.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.08}>
                <div className="group grid lg:grid-cols-12 gap-8 py-10 lg:py-14 items-center hover:bg-[#1D2022] transition-colors duration-500 -mx-6 px-6 lg:-mx-8 lg:px-8">
                  <div className="lg:col-span-1">
                    <span className="font-display italic text-3xl lg:text-4xl text-[#8C8478] group-hover:text-[#C67B55] transition-colors duration-500">
                      {s.num}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-3xl lg:text-4xl text-[#E8E2D6] font-normal">
                      {s.titulo}
                    </h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-base text-[#8C8478] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="lg:col-span-1 flex lg:justify-end">
                    <span className="inline-block text-xl text-[#8C8478] group-hover:text-[#C67B55] group-hover:translate-x-1 transition-all duration-500">
                      →
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Propiedades */}
      <section
        id="propiedades"
        className="py-32 lg:py-48 bg-[#0E100F] border-t border-[#2A2C2E]"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-display italic text-3xl text-[#C67B55]">III.</span>
              <span className="w-12 h-px bg-[#C67B55]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8C8478] font-light">
                Propiedades
              </p>
            </div>
          </FadeIn>

          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <FadeIn>
              <h2 className="font-display text-5xl lg:text-7xl text-[#E8E2D6] font-normal leading-[1.05]">
                Una selección <em className="text-[#C67B55]">destacada</em>.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link
                href="/contacto"
                className="inline-flex text-[11px] tracking-[0.3em] uppercase text-[#E8E2D6] font-light hover:text-[#C67B55] transition-colors border-b border-[#8C8478]/40 hover:border-[#C67B55] pb-2"
              >
                Ver todas →
              </Link>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {propiedades.map((p, i) => (
              <FadeIn key={p.titulo} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease }}
                  className="group cursor-pointer"
                >
                  <div
                    className={`aspect-[4/5] bg-gradient-to-br ${p.gradient} relative overflow-hidden mb-6 border border-[#2A2C2E]`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display italic text-7xl text-[#C67B55]/20 group-hover:text-[#C67B55]/60 transition-colors duration-700">
                        O3
                      </span>
                    </div>
                    <div className="absolute top-5 left-5">
                      <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#E8E2D6] font-light border border-[#E8E2D6]/30 px-3 py-1.5 backdrop-blur-sm">
                        {p.tipo}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0E100F] to-transparent" />
                  </div>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-display text-2xl text-[#E8E2D6] font-normal group-hover:text-[#C67B55] transition-colors duration-500">
                      {p.titulo}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-[#8C8478] font-light">
                      Querétaro
                    </p>
                    <p className="font-display italic text-xl text-[#C67B55]">
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
      <section className="relative py-32 lg:py-52 bg-[#16181A] border-t border-[#2A2C2E] overflow-hidden">
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(198,123,85,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="w-12 h-px bg-[#C67B55]" />
              <p className="font-display italic text-2xl text-[#C67B55]">
                Empecemos
              </p>
              <span className="w-12 h-px bg-[#C67B55]" />
            </div>
            <h2 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[1.1] text-[#E8E2D6] mb-14 font-normal">
              ¿Lista para encontrar
              <br />
              tu <em className="text-[#C67B55]">propiedad ideal</em>?
            </h2>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-4 px-10 py-4 border border-[#E8E2D6] text-[#E8E2D6] text-[11px] tracking-[0.3em] uppercase font-light hover:bg-[#C67B55] hover:border-[#C67B55] hover:text-[#0E100F] transition-colors duration-500"
            >
              <span>Agendar una llamada</span>
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
