import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "app/components/shared/header";
import { Footer } from "app/components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
