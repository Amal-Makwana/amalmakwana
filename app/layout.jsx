import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono"
});

export const metadata = {
  title: "Amal Makwana",
  description: "Personal website of Amal Makwana"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} ${jetBrainsMono.variable}`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="container-shell flex-1 py-8 sm:py-10 md:py-16">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
