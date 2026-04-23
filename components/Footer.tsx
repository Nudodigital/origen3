import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotras", href: "/nosotras" },
  { label: "Contacto", href: "/contacto" },
  { label: "Política de Privacidad", href: "/politica-de-privacidad" },
];

export default function Footer() {
  return (
    <footer className="bg-[#181614] border-t border-[#2D2A26]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block font-display text-2xl text-[#F2EDE4] tracking-[0.12em] uppercase mb-5">
              Origen<span className="text-[#C9A96E]">3</span>
            </Link>
            <p className="text-sm text-[#6B6560] leading-relaxed max-w-xs">
              Especialistas en bienes raíces de alto standing en Querétaro.
              Tres expertas. Un solo compromiso.
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A96E] mb-6">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B6560] hover:text-[#F2EDE4] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A96E] mb-6">
              Contacto
            </p>
            <ul className="flex flex-col gap-3 text-sm text-[#6B6560]">
              <li>Querétaro, México</li>
              <li>
                <a
                  href="mailto:hola@origen3.com.mx"
                  className="hover:text-[#F2EDE4] transition-colors duration-300"
                >
                  hola@origen3.com.mx
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/524421234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2EDE4] transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2D2A26] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6B6560]">
            © {new Date().getFullYear()} Origen3. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#2D2A26]">
            Desarrollado por Nudo Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
