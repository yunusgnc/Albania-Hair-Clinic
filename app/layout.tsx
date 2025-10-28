import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Albania Hair Clinic - Miglior Trapianto Capelli in Albania",
  description: "Prova la trasformazione con i nostri servizi avanzati di trapianto di capelli. Con oltre dieci anni di esperienza, i nostri medici altamente qualificati garantiscono risultati eccezionali.",
  keywords: "trapianto capelli, trapianto capelli albania, hair transplant, DHI, FUE, clinica capelli, albania hair clinic",
  authors: [{ name: "Albania Hair Clinic" }],
  openGraph: {
    title: "Albania Hair Clinic - Miglior Trapianto Capelli in Albania",
    description: "Prova la trasformazione con i nostri servizi avanzati di trapianto di capelli. Con oltre dieci anni di esperienza.",
    type: "website",
    locale: "it_IT",
    url: "https://albaniahairclinic.com",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ClientBody className={inter.className}>{children}</ClientBody>
    </html>
  );
}
