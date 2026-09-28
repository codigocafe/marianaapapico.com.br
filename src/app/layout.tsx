import type { Metadata, Viewport } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import { Fonts } from "@/_inc/fonts";
import "@/_assets/css/main.scss";

import Header from "@/_components/header";
import Footer from "@/_components/footer";

export const metadata: Metadata = {
  title: "Mariana Apapico | Ilustradora Infantil e Contadora de Histórias",
  description:
    "Conheça Mariana Apapico, ilustradora infantil e contadora de histórias. Arte, ilustração, imaginação e narrativas para crianças.",
  keywords:
    "ilustradora infantil, ilustradora de livros infantis, ilustradora, contadora de histórias, ilustração infantil, ilustração de livros infantis, histórias infantis, artista ilustradora, Mariana Apapico",
  authors: [{ name: "Mariana Apapico" }],
  openGraph: {
    title: "Mariana Apapico | Ilustradora e Contadora de Histórias",
    description:
      "Conheça o universo de Mariana Apapico, ilustradora e contadora de histórias. Arte, ilustração infantil, imaginação e narrativas para crianças.",
    type: "website",
    url: "https://marianaapapico.com.br/",
    siteName: "Mariana Apapico",
    locale: "pt_BR",
    images: [
      {
        url: "images/og_image.jpg",
        alt: "Mariana Apapico — ilustradora e contadora de histórias",
        type: "image/jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true} data-qb-installed="true">
      <GoogleTagManager gtmId="GTM-NFLWGQ64" />
      <body className={Fonts}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
