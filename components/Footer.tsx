import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotras", href: "/nosotras" },
  { label: "Contacto", href: "/contacto" },
  { label: "Política de Privacidad", href: "/politica-de-privacidad" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block font-display font-black text-3xl text-[#111111] tracking-tight uppercase mb-6">
              Origen<span className="text-[#C9A96E]">3</span>
            </Link>
            <p className="text-base text-[#6B6B6B] leading-relaxed max-w-xs">
              Especialistas en bienes raíces de alto standing en Querétaro.
              Tres expertas. Un solo compromiso.
            </p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#C9A96E] mb-8">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-[#111111] hover:text-[#C9A96E] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#C9A96E] mb-8">
              Contacto
            </p>
            <ul className="flex flex-col gap-3 text-base text-[#111111]">
              <li>Querétaro, México</li>
              <li>
                <a
                  href="mailto:hola@origen3.com.mx"
                  className="hover:text-[#C9A96E] transition-colors duration-300"
                >
                  hola@origen3.com.mx
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/524421234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A96E] transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E5E5E5] pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-[0.15em] uppercase font-semibold text-[#6B6B6B]">
            © {new Date().getFullYear()} Origen3. Todos los derechos reservados.
          </p>
          <p className="text-xs tracking-[0.15em] uppercase font-semibold text-[#6B6B6B]">
            Desarrollado por Nudo Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
