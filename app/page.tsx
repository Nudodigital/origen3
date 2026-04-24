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
    gradient: "from-[#EFEFEF] to-[#FFFFFF]",
  },
  {
    titulo: "Juriquilla Grand",
    tipo: "Departamento · Venta",
    precio: "Desde $2.8 MDP",
    gradient: "from-[#EDEDED] to-[#FFFFFF]",
  },
  {
    titulo: "El Marqués Residencial",
    tipo: "Terreno · Inversión",
    precio: "Desde $1.5 MDP",
    gradient: "from-[#E8E8E8] to-[#FFFFFF]",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end pb-28 lg:pb-40 overflow-hidden bg-[#FFFFFF]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#F5F5F5]" />

        {/* Background grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 79px,
              #111111 79px,
              #111111 80px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 79px,
              #111111 79px,
              #111111 80px
            )`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-[11px] tracking-[0.35em] uppercase text-[#C9A96E] font-semibold mb-10"
          >
            Bienes Raíces · Querétaro · México
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="font-display font-black text-[clamp(5rem,14vw,12rem)] leading-[0.9] tracking-tighter text-[#111111]"
            >
              ORIGEN
              <span className="text-[#C9A96E]">3</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            style={{ transformOrigin: "left" }}
            className="h-px w-full bg-[#E5E5E5] mb-10"
          />

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease }}
              className="text-xl lg:text-2xl text-[#6B6B6B] font-normal max-w-xl leading-relaxed"
            >
              Tres especialistas. Un solo compromiso.
              <br />
              <span className="text-[#111111] font-semibold">
                Hacemos del proceso inmobiliario tu mejor decisión.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0, ease }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/#propiedades"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#1A1A1A] text-white text-xs tracking-[0.22em] uppercase font-bold hover:bg-[#C9A96E] hover:text-[#1A1A1A] transition-colors duration-300 rounded-sm"
              >
                Ver propiedades
              </Link>
              <Link
                href="/nosotras"
                className="inline-flex items-center gap-3 px-10 py-5 border border-[#1A1A1A] text-[#1A1A1A] text-xs tracking-[0.22em] uppercase font-bold hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300 rounded-sm"
              >
                El equipo
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 right-6 lg:right-12 flex items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#111111] font-bold rotate-90 origin-center">
            Scroll
          </span>
          <div className="w-px h-10 bg-[#111111]" />
        </motion.div>
      </section>

      {/* Ticker */}
      <div className="border-y-2 border-[#1A1A1A] overflow-hidden py-6 lg:py-8 bg-[#FFFFFF]">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="font-display font-black text-3xl lg:text-5xl tracking-tight uppercase text-[#111111] px-10"
            >
              Compra&nbsp;<span className="text-[#C9A96E]">·</span>&nbsp;Venta&nbsp;<span className="text-[#C9A96E]">·</span>&nbsp;Preventa&nbsp;<span className="text-[#C9A96E]">·</span>&nbsp;Asesoría
              Patrimonial&nbsp;<span className="text-[#C9A96E]">·</span>&nbsp;Querétaro&nbsp;<span className="text-[#C9A96E]">·</span>&nbsp;Top Performers&nbsp;<span className="text-[#C9A96E]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Manifiesto */}
      <section className="py-32 lg:py-48 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-1 hidden lg:flex flex-col items-center gap-4">
              <div className="w-px h-20 bg-[#C9A96E]" />
              <p
                className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E] font-bold"
                style={{ writingMode: "vertical-rl" }}
              >
                Filosofía
              </p>
            </div>

            <FadeIn className="lg:col-span-7">
              <h2 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight text-[#111111]">
                Transformamos la búsqueda de
                <em className="not-italic text-[#C9A96E]"> propiedades </em>
                en una experiencia extraordinaria.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-4">
              <p className="text-base text-[#6B6B6B] leading-loose border-l-2 border-[#C9A96E] pl-6">
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
      <section className="py-32 lg:py-48 bg-[#F5F5F5] border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#C9A96E] font-bold mb-20">
              Servicios
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5]">
            {servicios.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.08}>
                <div className="bg-[#F5F5F5] p-10 lg:p-12 group hover:bg-[#FFFFFF] transition-colors duration-500 h-full">
                  <p className="font-display font-black text-6xl text-[#E5E5E5] group-hover:text-[#C9A96E] transition-colors duration-500 mb-10">
                    {s.num}
                  </p>
                  <h3 className="font-display font-black text-3xl tracking-tight text-[#111111] mb-5 uppercase">
                    {s.titulo}
                  </h3>
                  <p className="text-base text-[#6B6B6B] leading-relaxed">
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
        className="py-32 lg:py-48 bg-[#FFFFFF] border-t border-[#E5E5E5]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-20">
            <FadeIn>
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#C9A96E] font-bold mb-4">
                Propiedades
              </p>
              <h2 className="font-display font-black text-5xl lg:text-7xl tracking-tight text-[#111111]">
                Destacadas
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link
                href="/contacto"
                className="hidden md:inline-flex text-xs tracking-[0.22em] uppercase font-bold text-[#111111] hover:text-[#C9A96E] transition-colors border-b-2 border-[#111111] hover:border-[#C9A96E] pb-1"
              >
                Ver todas →
              </Link>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {propiedades.map((p, i) => (
              <FadeIn key={p.titulo} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease }}
                  className="group cursor-pointer"
                >
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative overflow-hidden mb-6 border border-[#E5E5E5]`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display font-black text-7xl text-[#E5E5E5] group-hover:text-[#C9A96E] transition-colors duration-500">
                        O3
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-bold text-white bg-[#1A1A1A] px-3 py-1.5">
                        {p.tipo}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-display font-black text-2xl tracking-tight text-[#111111] mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
                        {p.titulo}
                      </h3>
                      <p className="text-xs tracking-[0.2em] uppercase text-[#6B6B6B] font-semibold">
                        Querétaro
                      </p>
                    </div>
                  </div>
                  <p className="font-display font-black text-3xl lg:text-4xl tracking-tight text-[#111111] mt-4">
                    {p.precio}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 lg:py-48 bg-[#F5F5F5] border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#C9A96E] font-bold mb-8">
              Empecemos
            </p>
            <h2 className="font-display font-black text-[clamp(3rem,7vw,6.5rem)] leading-[1.02] tracking-tight text-[#111111] mb-14 max-w-4xl mx-auto">
              ¿Lista para encontrar tu propiedad ideal?
            </h2>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-4 px-12 py-5 bg-[#1A1A1A] text-white text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#C9A96E] hover:text-[#1A1A1A] transition-colors duration-300 rounded-sm"
            >
              Agendar una llamada
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
