import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ÓpticaPro | Tu Visión en Buenas Manos",
  description: "Exámenes visuales, lentes de contacto y las mejores monturas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} bg-white text-gray-900`} suppressHydrationWarning>
        <CartProvider>
          <Navbar />
          <main>
            {children}
          </main>
          
          <footer className="bg-gray-50 border-t border-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
              <p>© 2026 ÓpticaPro. Todos los derechos reservados.</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
