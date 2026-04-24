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
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const inputClass =
  "w-full bg-transparent border-b border-[#2A2C2E] text-[#E8E2D6] text-base py-4 placeholder-[#8C8478] font-light focus:outline-none focus:border-[#C67B55] transition-colors duration-500";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 bg-[#0E100F] overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none"
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
              Hablemos
            </p>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[1] tracking-tight text-[#E8E2D6] mb-10 font-normal"
            >
              <em className="text-[#C67B55]">Contacto</em>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="font-display text-xl lg:text-2xl text-[#E8E2D6] max-w-2xl leading-[1.4] font-normal"
          >
            Cuéntanos qué estás buscando. Estamos listas para acompañarte en
            cada paso del proceso.
          </motion.p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-24 lg:py-32 bg-[#16181A] border-t border-[#2A2C2E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Info */}
            <FadeIn>
              <div className="flex flex-col gap-12">
                <div>
                  <div className="flex items-center gap-3 mb-10">
                    <span className="w-8 h-px bg-[#C67B55]" />
                    <p className="text-[10px] tracking-[0.4em] uppercase text-[#C67B55] font-light">
                      Información de contacto
                    </p>
                  </div>
                  <ul className="flex flex-col gap-8">
                    <li className="flex flex-col gap-2">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C8478] font-light">
                        Email
                      </span>
                      <a
                        href="mailto:hola@origen3.com.mx"
                        className="font-display text-2xl text-[#E8E2D6] hover:text-[#C67B55] transition-colors"
                      >
                        hola@origen3.com.mx
                      </a>
                    </li>
                    <li className="flex flex-col gap-2">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C8478] font-light">
                        Ubicación
                      </span>
                      <p className="font-display text-2xl text-[#E8E2D6]">
                        Querétaro, México
                      </p>
                    </li>
                    <li className="flex flex-col gap-2">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C8478] font-light">
                        WhatsApp
                      </span>
                      <a
                        href="https://wa.me/524421234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-2xl text-[#E8E2D6] hover:text-[#C67B55] transition-colors"
                      >
                        +52 442 123 4567
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-[#2A2C2E] pt-10">
                  <p className="font-display italic text-lg text-[#E8E2D6] leading-relaxed">
                    Respondemos en menos de 24 horas hábiles.
                  </p>
                  <p className="text-sm text-[#8C8478] leading-loose mt-2">
                    Si tienes urgencia, escríbenos directamente por WhatsApp.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Formulario */}
            <FadeIn delay={0.15}>
              {enviado ? (
                <div className="flex flex-col items-start justify-center h-full py-20">
                  <div className="flex items-center gap-3 mb-10">
                    <span className="w-12 h-px bg-[#C67B55]" />
                    <p className="text-[10px] tracking-[0.4em] uppercase text-[#C67B55] font-light">
                      Recibido
                    </p>
                  </div>
                  <p className="font-display text-4xl text-[#E8E2D6] mb-6">
                    <em className="text-[#C67B55]">Gracias</em> por escribirnos.
                  </p>
                  <p className="text-base text-[#8C8478] max-w-md leading-loose">
                    Nos pondremos en contacto contigo a la brevedad.
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
                      className={`${inputClass} bg-[#16181A] cursor-pointer`}
                    >
                      <option value="" disabled className="bg-[#0E100F] text-[#8C8478]">
                        ¿En qué podemos ayudarte?
                      </option>
                      <option value="compra" className="bg-[#0E100F] text-[#E8E2D6]">
                        Comprar una propiedad
                      </option>
                      <option value="venta" className="bg-[#0E100F] text-[#E8E2D6]">
                        Vender una propiedad
                      </option>
                      <option value="preventa" className="bg-[#0E100F] text-[#E8E2D6]">
                        Preventa
                      </option>
                      <option value="asesoria" className="bg-[#0E100F] text-[#E8E2D6]">
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
                    className="group self-start inline-flex items-center gap-4 px-8 py-4 bg-[#C67B55] text-[#0E100F] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#E8E2D6] transition-colors duration-500"
                  >
                    <span>Enviar mensaje</span>
                    <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
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
