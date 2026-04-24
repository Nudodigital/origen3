"use client";

import { useRef, useState } from "react";
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

const inputClass =
  "w-full bg-transparent border-b border-[#D5CEC6] text-[#1A1A1A] text-sm py-4 placeholder-[#9C9189] focus:outline-none focus:border-[#B8956A] transition-colors duration-300";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
  }

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
            Hablemos
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-[#1A1A1A] mb-10"
            >
              Contacto
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="text-lg text-[#9C9189] max-w-xl leading-relaxed"
          >
            Cuéntanos qué estás buscando. Estamos listas para acompañarte en
            cada paso del proceso.
          </motion.p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 lg:py-28 bg-[#F5EFE6] border-t border-[#D5CEC6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Info */}
            <FadeIn>
              <div className="flex flex-col gap-12">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8956A] mb-8">
                    Información de contacto
                  </p>
                  <ul className="flex flex-col gap-6">
                    <li className="flex flex-col gap-1">
                      <span className="text-xs tracking-[0.15em] uppercase text-[#D5CEC6]">
                        Email
                      </span>
                      <a
                        href="mailto:hola@origen3.com.mx"
                        className="text-base text-[#1A1A1A] hover:text-[#B8956A] transition-colors"
                      >
                        hola@origen3.com.mx
                      </a>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-xs tracking-[0.15em] uppercase text-[#D5CEC6]">
                        Ubicación
                      </span>
                      <p className="text-base text-[#1A1A1A]">
                        Querétaro, México
                      </p>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-xs tracking-[0.15em] uppercase text-[#D5CEC6]">
                        WhatsApp
                      </span>
                      <a
                        href="https://wa.me/524421234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-[#1A1A1A] hover:text-[#B8956A] transition-colors"
                      >
                        +52 442 123 4567
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-[#D5CEC6] pt-10">
                  <p className="text-xs text-[#9C9189] leading-loose">
                    Respondemos en menos de 24 horas hábiles. Si tienes urgencia,
                    escríbenos directamente por WhatsApp.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Formulario */}
            <FadeIn delay={0.15}>
              {enviado ? (
                <div className="flex flex-col items-start justify-center h-full py-20">
                  <div className="w-10 h-px bg-[#B8956A] mb-8" />
                  <p className="font-display text-3xl text-[#1A1A1A] mb-4">
                    Recibido.
                  </p>
                  <p className="text-sm text-[#9C9189]">
                    Gracias por escribirnos. Nos pondremos en contacto contigo a
                    la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="flex flex-col gap-8">
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      required
                      className={inputClass}
                    />
                    <input
                      type="email"
                      placeholder="Correo electrónico"
                      required
                      className={inputClass}
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono (opcional)"
                      className={inputClass}
                    />
                    <select
                      required
                      defaultValue=""
                      className={`${inputClass} bg-[#F5EFE6] cursor-pointer`}
                    >
                      <option value="" disabled className="text-[#9C9189]">
                        ¿En qué podemos ayudarte?
                      </option>
                      <option value="compra" className="bg-[#FAF7F2]">
                        Comprar una propiedad
                      </option>
                      <option value="venta" className="bg-[#FAF7F2]">
                        Vender una propiedad
                      </option>
                      <option value="preventa" className="bg-[#FAF7F2]">
                        Preventa
                      </option>
                      <option value="asesoria" className="bg-[#FAF7F2]">
                        Asesoría patrimonial
                      </option>
                    </select>
                    <textarea
                      placeholder="Cuéntanos más sobre lo que buscas..."
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="self-start inline-flex items-center px-8 py-4 bg-[#B8956A] text-[#FAF7F2] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#D4B896] transition-colors duration-300"
                  >
                    Enviar mensaje
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
