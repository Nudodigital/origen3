import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotras", href: "/nosotras" },
  { label: "Contacto", href: "/contacto" },
  { label: "Política de Privacidad", href: "/politica-de-privacidad" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E100F] border-t border-[#2A2C2E]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block font-display text-3xl text-[#E8E2D6] mb-6">
              Origen<em className="text-[#C67B55] not-italic">3</em>
            </Link>
            <p className="font-display italic text-xl text-[#E8E2D6] leading-relaxed max-w-sm mb-4">
              Especialistas en bienes raíces de alto standing en Querétaro.
            </p>
            <p className="text-sm text-[#8C8478] leading-relaxed max-w-sm">
              Tres expertas. Un solo compromiso.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-px bg-[#C67B55]" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C67B55] font-light">
                Navegación
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E8E2D6] hover:text-[#C67B55] transition-colors duration-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-px bg-[#C67B55]" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C67B55] font-light">
                Contacto
              </p>
            </div>
            <ul className="flex flex-col gap-4 text-sm text-[#E8E2D6]">
              <li className="text-[#8C8478]">Querétaro, México</li>
              <li>
                <a
                  href="mailto:hola@origen3.com.mx"
                  className="hover:text-[#C67B55] transition-colors duration-500"
                >
                  hola@origen3.com.mx
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/524421234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C67B55] transition-colors duration-500"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2A2C2E] pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8C8478] font-light">
            © {new Date().getFullYear()} Origen3. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#8C8478] font-light italic font-display">
            Desarrollado por Nudo Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
