import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Willy Academy: Plataforma de Estudos para Concursos e Vestibulares",
  description:
    "Acesse a Willy Academy e prepare-se para concursos e vestibulares com nosso banco de questões, monitoramento de desempenho e feedback personalizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className + " bg-neutral-bright-gray"}>
        <Header />
        <main className={poppins.className + " bg-neutral-bright-gray"}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
