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
  "w-full bg-transparent border-b-2 border-[#E5E5E5] text-[#111111] text-base py-4 placeholder-[#6B6B6B] focus:outline-none focus:border-[#1A1A1A] transition-colors duration-300";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pt-52 lg:pb-36 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-[11px] tracking-[0.35em] uppercase font-bold text-[#C9A96E] mb-8"
          >
            Hablemos
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className="font-display font-black text-[clamp(4rem,10vw,9rem)] leading-[0.9] tracking-tighter text-[#111111] mb-12 uppercase"
            >
              Contacto
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="text-xl lg:text-2xl text-[#6B6B6B] max-w-2xl leading-relaxed"
          >
            Cuéntanos qué estás buscando. Estamos listas para acompañarte en
            cada paso del proceso.
          </motion.p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-24 lg:py-36 bg-[#F5F5F5] border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Info */}
            <FadeIn>
              <div className="flex flex-col gap-12">
                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#C9A96E] mb-10">
                    Información de contacto
                  </p>
                  <ul className="flex flex-col gap-8">
                    <li className="flex flex-col gap-2">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#6B6B6B]">
                        Email
                      </span>
                      <a
                        href="mailto:hola@origen3.com.mx"
                        className="font-display font-black text-2xl tracking-tight text-[#111111] hover:text-[#C9A96E] transition-colors"
                      >
                        hola@origen3.com.mx
                      </a>
                    </li>
                    <li className="flex flex-col gap-2">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#6B6B6B]">
                        Ubicación
                      </span>
                      <p className="font-display font-black text-2xl tracking-tight text-[#111111]">
                        Querétaro, México
                      </p>
                    </li>
                    <li className="flex flex-col gap-2">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#6B6B6B]">
                        WhatsApp
                      </span>
                      <a
                        href="https://wa.me/524421234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-black text-2xl tracking-tight text-[#111111] hover:text-[#C9A96E] transition-colors"
                      >
                        +52 442 123 4567
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-[#E5E5E5] pt-12">
                  <p className="text-base text-[#6B6B6B] leading-loose">
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
                  <div className="w-12 h-1 bg-[#C9A96E] mb-10" />
                  <p className="font-display font-black text-5xl tracking-tight text-[#111111] mb-6 uppercase">
                    Recibido.
                  </p>
                  <p className="text-base text-[#6B6B6B]">
                    Gracias por escribirnos. Nos pondremos en contacto contigo a
                    la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
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
                      className={`${inputClass} bg-[#F5F5F5] cursor-pointer`}
                    >
                      <option value="" disabled className="text-[#6B6B6B]">
                        ¿En qué podemos ayudarte?
                      </option>
                      <option value="compra" className="bg-[#FFFFFF]">
                        Comprar una propiedad
                      </option>
                      <option value="venta" className="bg-[#FFFFFF]">
                        Vender una propiedad
                      </option>
                      <option value="preventa" className="bg-[#FFFFFF]">
                        Preventa
                      </option>
                      <option value="asesoria" className="bg-[#FFFFFF]">
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
                    className="self-start inline-flex items-center px-12 py-5 bg-[#1A1A1A] text-white text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#C9A96E] hover:text-[#1A1A1A] transition-colors duration-300 rounded-sm"
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
