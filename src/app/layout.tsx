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
        <script src="https://kit.fontawesome.com/ba7c57d421.js"></script>
      </body>
    </html>
  );
}
