import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

export const metadata = {
  title: "Amal Makwana",
  description: "Personal website of Amal Makwana"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="container-shell flex-1 py-16 md:py-24">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
