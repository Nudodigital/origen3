import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Origen3",
  description: "Aviso de Privacidad de Origen3. Conoce cómo protegemos y tratamos tus datos personales.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 bg-[#0E100F] overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(198,123,85,0.1) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-0">
        <div className="flex items-center gap-4 mb-10">
          <span className="w-10 h-px bg-[#C67B55]" />
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#C67B55] font-light">
            Legal
          </p>
        </div>
        <h1 className="font-display text-5xl lg:text-6xl text-[#E8E2D6] mb-16 font-normal leading-[1.05]">
          Política de <em className="text-[#C67B55]">Privacidad</em>
        </h1>

        <div className="flex flex-col gap-12">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-[#E8E2D6] mb-5 font-normal">
              1. Identidad y domicilio del Responsable
            </h2>
            <p className="text-base text-[#8C8478] leading-loose">
              Origen3, en adelante &quot;el Responsable&quot;, con domicilio en la ciudad de
              Querétaro, Querétaro, México, es responsable del tratamiento de sus
              datos personales conforme a lo establecido en la Ley Federal de
              Protección de Datos Personales en Posesión de los Particulares
              (LFPDPPP) y demás normatividad aplicable.
            </p>
            <p className="text-base text-[#8C8478] leading-loose mt-4">
              Para cualquier asunto relacionado con el tratamiento de sus datos
              personales puede contactarnos a:{" "}
              <a
                href="mailto:hola@origen3.com.mx"
                className="text-[#C67B55] hover:text-[#E8E2D6] border-b border-[#C67B55]/40 hover:border-[#E8E2D6] transition-colors"
              >
                hola@origen3.com.mx
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-[#E8E2D6] mb-5 font-normal">
              2. Datos personales que recabamos
            </h2>
            <p className="text-base text-[#8C8478] leading-loose mb-4">
              Para las finalidades señaladas en el presente Aviso de Privacidad,
              podemos recabar las siguientes categorías de datos personales:
            </p>
            <ul className="flex flex-col gap-3 pl-2">
              {[
                "Datos de identificación: nombre completo, RFC, CURP.",
                "Datos de contacto: correo electrónico, número de teléfono, dirección.",
                "Datos patrimoniales y/o financieros: información sobre propiedades de su interés, capacidad económica, referencias bancarias (exclusivamente para procesos de compraventa).",
                "Datos de uso del sitio web: dirección IP, tipo de navegador, páginas visitadas.",
              ].map((item) => (
                <li key={item} className="text-base text-[#8C8478] leading-loose flex gap-4">
                  <span className="text-[#C67B55] shrink-0 mt-1 font-display italic">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-[#8C8478] leading-loose mt-5">
              Origen3 <strong className="text-[#E8E2D6] font-normal italic font-display">no recaba datos personales sensibles</strong> para
              las finalidades descritas en este aviso.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-[#E8E2D6] mb-5 font-normal">
              3. Finalidades del tratamiento
            </h2>
            <p className="text-base text-[#8C8478] leading-loose mb-4">
              Sus datos personales serán utilizados para las siguientes
              <strong className="text-[#E8E2D6] font-normal italic font-display"> finalidades primarias</strong>, necesarias para la
              relación jurídica entre usted y Origen3:
            </p>
            <ul className="flex flex-col gap-3 pl-2 mb-5">
              {[
                "Brindar asesoría inmobiliaria personalizada.",
                "Gestionar la búsqueda y presentación de propiedades.",
                "Llevar a cabo procesos de compra, venta o renta de bienes inmuebles.",
                "Dar seguimiento a sus requerimientos y solicitudes.",
                "Cumplir con obligaciones legales y contractuales.",
              ].map((item) => (
                <li key={item} className="text-base text-[#8C8478] leading-loose flex gap-4">
                  <span className="text-[#C67B55] shrink-0 mt-1 font-display italic">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-[#8C8478] leading-loose mb-4">
              De manera <strong className="text-[#E8E2D6] font-normal italic font-display">secundaria</strong>, y solo con su
              consentimiento, podríamos utilizar sus datos para:
            </p>
            <ul className="flex flex-col gap-3 pl-2">
              {[
                "Enviarle información sobre nuevas propiedades y desarrollos.",
                "Invitarle a eventos y actividades relacionadas con el sector inmobiliario.",
                "Realizarle encuestas de satisfacción.",
              ].map((item) => (
                <li key={item} className="text-base text-[#8C8478] leading-loose flex gap-4">
                  <span className="text-[#C67B55] shrink-0 mt-1 font-display italic">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-[#E8E2D6] mb-5 font-normal">
              4. Transferencia de datos personales
            </h2>
            <p className="text-base text-[#8C8478] leading-loose">
              Origen3 no realizará transferencias de datos personales a terceros,
              salvo en los casos contemplados en el artículo 37 de la LFPDPPP, o
              cuando sea necesario para la ejecución del servicio contratado
              (notarias, instituciones bancarias, desarrolladores inmobiliarios).
              En estos casos, Origen3 se asegurará de que los destinatarios
              mantengan medidas de seguridad equivalentes a las propias.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-[#E8E2D6] mb-5 font-normal">
              5. Derechos ARCO
            </h2>
            <p className="text-base text-[#8C8478] leading-loose mb-4">
              Usted tiene derecho a ejercer los derechos de{" "}
              <strong className="text-[#E8E2D6] font-normal italic font-display">Acceso, Rectificación, Cancelación y Oposición</strong>{" "}
              (derechos ARCO) respecto al tratamiento de sus datos personales.
              Para ello, deberá enviar una solicitud por escrito a:
            </p>
            <p className="font-display italic text-xl text-[#C67B55] leading-loose">
              hola@origen3.com.mx
            </p>
            <p className="text-base text-[#8C8478] leading-loose mt-4">
              Su solicitud deberá incluir: nombre completo, domicilio o correo
              electrónico para recibir la respuesta, descripción clara de los datos
              y el derecho que desea ejercer, así como cualquier documento que
              acredite su identidad. Daremos respuesta a su solicitud en un plazo
              máximo de 20 días hábiles.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-[#E8E2D6] mb-5 font-normal">
              6. Uso de cookies y tecnologías similares
            </h2>
            <p className="text-base text-[#8C8478] leading-loose">
              Nuestro sitio web puede utilizar cookies y otras tecnologías de
              rastreo para mejorar la experiencia del usuario. Estas tecnologías
              pueden recopilar datos sobre su actividad en el sitio con fines
              estadísticos y de mejora del servicio. Puede deshabilitar el uso de
              cookies a través de la configuración de su navegador, aunque esto
              puede afectar la funcionalidad del sitio.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-[#E8E2D6] mb-5 font-normal">
              7. Medidas de seguridad
            </h2>
            <p className="text-base text-[#8C8478] leading-loose">
              Origen3 implementa las medidas de seguridad, técnicas,
              administrativas y físicas necesarias para proteger sus datos
              personales contra daño, pérdida, alteración, destrucción o uso,
              acceso o tratamiento no autorizados.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-[#E8E2D6] mb-5 font-normal">
              8. Cambios al Aviso de Privacidad
            </h2>
            <p className="text-base text-[#8C8478] leading-loose">
              El presente Aviso de Privacidad puede sufrir modificaciones, cambios
              o actualizaciones. Nos comprometemos a mantenerlo actualizado y a
              notificarle cualquier cambio material a través de nuestro sitio web
              o por correo electrónico.
            </p>
          </div>

          <div className="border-t border-[#2A2C2E] pt-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[#8C8478] font-light">
              Última actualización: abril 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
