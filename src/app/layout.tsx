import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Mariana Apapico | Ilustradora Infantil e Contadora de Histórias",
  description:
    "Conheça Mariana Apapico, ilustradora infantil e contadora de histórias. Arte, ilustração, imaginação e narrativas para crianças.",
  keywords:
    "ilustradora infantil, ilustradora de livros infantis, ilustradora, contadora de histórias, ilustração infantil, ilustração de livros infantis, histórias infantis, artista ilustradora, Mariana Apapico",
  authors: [{ name: "Mariana Apapico" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

import { Fonts } from "@/_inc/fonts";
import "@/_assets/css/main.scss";

import Header from "@/_components/header";
import Footer from "@/_components/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true} data-qb-installed="true">
      <body className={Fonts}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
