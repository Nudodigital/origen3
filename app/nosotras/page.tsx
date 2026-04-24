"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const equipo = [
  {
    nombre: "Socia 1",
    rol: "Especialista en Residencial",
    bio: "Más de 8 años posicionando propiedades residenciales en los desarrollos más exclusivos de Querétaro. Su conocimiento del mercado y su red de contactos la convierten en una aliada invaluable para compradores e inversores.",
    especialidades: ["Residencial Premium", "Preventa", "Negociación"],
  },
  {
    nombre: "Socia 2",
    rol: "Especialista en Inversión",
    bio: "Experta en identificar oportunidades de inversión inmobiliaria con alto potencial de plusvalía. Ha asesorado a más de 200 familias en la adquisición de su patrimonio en el estado de Querétaro.",
    especialidades: ["Inversión Patrimonial", "Plusvalía", "Análisis de Mercado"],
  },
  {
    nombre: "Socia 3",
    rol: "Especialista en Preventa",
    bio: "Pionera en el segmento de preventa en Querétaro, con acceso directo a los desarrolladores más importantes de la región. Conecta a sus clientes con oportunidades exclusivas antes de que lleguen al mercado abierto.",
    especialidades: ["Preventa Exclusiva", "Desarrollo", "Asesoría Legal"],
  },
];

const valores = [
  { titulo: "Confianza", desc: "Construimos relaciones a largo plazo basadas en transparencia total." },
  { titulo: "Resultados", desc: "Nuestro historial habla por sí solo: top performers en Querétaro." },
  { titulo: "Experiencia", desc: "Más de 15 años combinados navegando el mercado inmobiliario local." },
  { titulo: "Personalización", desc: "Cada cliente tiene necesidades únicas. Cada solución también." },
];

export default function NosotrasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-[10px] tracking-[0.35em] uppercase text-[#B8956A] mb-6"
          >
            El equipo
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-[#1A1A1A] mb-10"
            >
              Nosotras
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="text-lg text-[#9C9189] max-w-2xl leading-relaxed"
          >
            Tres mujeres que decidieron redefinir la experiencia inmobiliaria en
            Querétaro. Juntas, combinamos décadas de expertise, una red de
            contactos sólida y una pasión genuina por transformar la vida de
            nuestros clientes.
          </motion.p>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 lg:py-28 bg-[#F5EFE6] border-t border-[#D5CEC6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col divide-y divide-[#D5CEC6]">
            {equipo.map((persona, i) => (
              <FadeIn key={persona.nombre} delay={i * 0.08}>
                <div className="py-14 lg:py-16 grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  <div className="lg:col-span-1">
                    <span className="font-display text-4xl text-[#D5CEC6]">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Avatar placeholder */}
                  <div className="lg:col-span-3">
                    <div className="aspect-[3/4] bg-gradient-to-br from-[#EDE8E1] to-[#FAF7F2] border border-[#D5CEC6] flex items-center justify-center">
                      <span className="font-display text-5xl text-[#D5CEC6]">
                        O3
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8956A] mb-3">
                      {persona.rol}
                    </p>
                    <h2 className="font-display text-3xl lg:text-4xl text-[#1A1A1A] mb-6">
                      {persona.nombre}
                    </h2>
                    <p className="text-sm text-[#9C9189] leading-loose mb-8 max-w-lg">
                      {persona.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {persona.especialidades.map((e) => (
                        <span
                          key={e}
                          className="text-[10px] tracking-[0.2em] uppercase text-[#9C9189] border border-[#D5CEC6] px-3 py-1.5"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 lg:py-32 bg-[#FAF7F2] border-t border-[#D5CEC6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956A] mb-16">
              Nuestros valores
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {valores.map((v, i) => (
              <FadeIn key={v.titulo} delay={i * 0.08}>
                <div className="border-t border-[#D5CEC6] pt-8">
                  <h3 className="font-display text-2xl text-[#1A1A1A] mb-4">
                    {v.titulo}
                  </h3>
                  <p className="text-sm text-[#9C9189] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#F5EFE6] border-t border-[#D5CEC6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <FadeIn>
            <h2 className="font-display text-3xl lg:text-4xl text-[#1A1A1A]">
              ¿Listas para trabajar juntas?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-[#B8956A] text-[#FAF7F2] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#D4B896] transition-colors duration-300 whitespace-nowrap"
            >
              Contáctanos
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
