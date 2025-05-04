import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";


export const metadata: Metadata = {
  title: "Encurtadim",
  description: "Ferramenta de encurtamento de urls",
  openGraph: {
    title: "Encurtadim",
    description: "Ferramenta de encurtamento de urls",
    url: process.env.APP_URL, // URL da sua aplicação
    images: [
      {
        url: process.env.APP_URL + "/hero.png", // Imagem para Open Graph
        width: 800,
        height: 600,
        alt: "Imagem de exemplo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`bg-[#232323] antialiased`}
      >
        <div className="w-full max-w-5xl m-auto h-screen max-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
