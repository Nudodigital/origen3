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
      transition={{ duration: 0.9, delay, ease }}
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
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 bg-[#0E100F] overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 left-0 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(198,123,85,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="w-10 h-px bg-[#C67B55]" />
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C67B55] font-light">
              El equipo
            </p>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[1] tracking-tight text-[#E8E2D6] mb-10 font-normal"
            >
              <em className="text-[#C67B55]">Nosotras</em>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="font-display text-xl lg:text-2xl text-[#E8E2D6] max-w-3xl leading-[1.4] font-normal"
          >
            Tres mujeres que decidieron <em className="text-[#C67B55]">redefinir</em> la
            experiencia inmobiliaria en Querétaro. Juntas, combinamos décadas de
            expertise, una red de contactos sólida y una pasión genuina por
            transformar la vida de nuestros clientes.
          </motion.p>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-24 lg:py-36 bg-[#16181A] border-t border-[#2A2C2E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col divide-y divide-[#2A2C2E]">
            {equipo.map((persona, i) => (
              <FadeIn key={persona.nombre} delay={i * 0.08}>
                <div className="py-16 lg:py-20 grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  <div className="lg:col-span-1">
                    <span className="font-display italic text-5xl text-[#C67B55]">
                      {["I", "II", "III"][i]}
                    </span>
                  </div>

                  {/* Avatar placeholder */}
                  <div className="lg:col-span-3">
                    <div className="aspect-[3/4] bg-gradient-to-br from-[#1D2022] via-[#16181A] to-[#0E100F] border border-[#2A2C2E] flex items-center justify-center relative overflow-hidden">
                      <span className="font-display italic text-6xl text-[#C67B55]/30">
                        O3
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0E100F] to-transparent" />
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-6 h-px bg-[#C67B55]" />
                      <p className="text-[10px] tracking-[0.35em] uppercase text-[#C67B55] font-light">
                        {persona.rol}
                      </p>
                    </div>
                    <h2 className="font-display text-5xl lg:text-6xl text-[#E8E2D6] mb-8 font-normal">
                      {persona.nombre}
                    </h2>
                    <p className="text-base text-[#8C8478] leading-loose mb-10 max-w-xl">
                      {persona.bio}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {persona.especialidades.map((e) => (
                        <span
                          key={e}
                          className="text-[10px] tracking-[0.3em] uppercase text-[#E8E2D6] font-light border border-[#2A2C2E] px-4 py-2"
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
      <section className="py-32 lg:py-48 bg-[#0E100F] border-t border-[#2A2C2E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="flex items-center gap-4 mb-20">
              <span className="font-display italic text-3xl text-[#C67B55]">IV.</span>
              <span className="w-12 h-px bg-[#C67B55]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8C8478] font-light">
                Nuestros valores
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {valores.map((v, i) => (
              <FadeIn key={v.titulo} delay={i * 0.08}>
                <div className="border-t border-[#C67B55] pt-8">
                  <h3 className="font-display text-3xl text-[#E8E2D6] mb-5 font-normal">
                    <em className="text-[#C67B55]">{v.titulo}</em>
                  </h3>
                  <p className="text-base text-[#8C8478] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-36 bg-[#16181A] border-t border-[#2A2C2E] overflow-hidden">
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(198,123,85,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <FadeIn>
            <h2 className="font-display text-4xl lg:text-6xl text-[#E8E2D6] font-normal leading-[1.1]">
              ¿Listas para <em className="text-[#C67B55]">trabajar juntas</em>?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-4 px-10 py-4 bg-[#C67B55] text-[#0E100F] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#E8E2D6] transition-colors duration-500 whitespace-nowrap"
            >
              <span>Contáctanos</span>
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
