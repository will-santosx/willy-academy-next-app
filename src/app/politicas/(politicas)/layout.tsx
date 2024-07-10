import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Willy Academy: Termos de Uso e Políticas de Privacidade",
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-neutral-bright-gray w-full min-h-screen">
      {children}
    </main>
  );
}
