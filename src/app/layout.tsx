import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ranking | Criptomoedas",
  description: "Lista ordenada das principais e mais relevantes criptomoedas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
