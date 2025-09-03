import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AssessmentProvider } from "@/contexts/AssessmentContext";
import { UserPreferencesProvider } from "@/contexts/UserPreferencesContext";
//import { useEffect } from "react";

// Carregamento da fonte Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prime Performance Medicine - Otimização da Performance Humana",
  description: "Plataforma digital para medicina de performance com protocolos de avaliação científicos, calculadoras especializadas e conteúdo educacional de alta qualidade.",
  keywords: "medicina de performance, teste cooper, 1rm, composição corporal, VO2 max, avaliação física",
  authors: [{ name: "Prime Performance Medicine" }],
  robots: "index, follow",
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://primeperformance.med.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://primeperformance.med.br",
    title: "Prime Performance Medicine",
    description: "Otimização da Performance Humana através da Ciência",
    siteName: "Prime Performance Medicine",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Prime Performance Medicine"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Performance Medicine",
    description: "Otimização da Performance Humana através da Ciência",
    images: ["/og-image.jpg"]
  },
  verification: {
    google: "your-google-verification-code",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Usando useEffect para garantir que só o código cliente seja executado no cliente
  // useEffect(() => {
  //   // Código dependente de cliente pode ser adicionado aqui
  //   // Por exemplo, manipulação do DOM ou mudanças de estado específicas do cliente
  // }, []);

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`} cz-shortcut-listen="true">
        <UserPreferencesProvider>
          <AssessmentProvider>
            {children}
          </AssessmentProvider>
        </UserPreferencesProvider>
      </body>
    </html>
  );
}
