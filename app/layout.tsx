import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Origen3 — Bienes Raíces en Querétaro",
  description:
    "Especialistas en compra, venta y asesoría inmobiliaria en Querétaro. Tres expertas comprometidas con encontrar la propiedad ideal para ti.",
  metadataBase: new URL("https://origen3.com.mx"),
  openGraph: {
    title: "Origen3 — Bienes Raíces en Querétaro",
    description:
      "Especialistas en compra, venta y asesoría inmobiliaria en Querétaro.",
    siteName: "Origen3",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
