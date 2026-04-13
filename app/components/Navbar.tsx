"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Asegurar que el componente esté montado para mostrar datos del localStorage (evita errores de hidratación)
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);

    if (pathname === "/") {
      const element = document.getElementById("servicios");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#servicios");
    }
  };

  // Cerrar menú al cambiar de tamaño
  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
        <nav className={`flex items-center justify-between px-6 md:px-8 py-4 rounded-full transition-all duration-300 bg-white/20 backdrop-blur-lg shadow-xl border border-white/20`}>
          <Link href="/" className="flex items-center">
            <Image 
              src="/bitmap1.png" 
              alt="ÓpticaPro Logo" 
              width={140} 
              height={40} 
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center font-medium">
            <Link href="/" className="hover:text-primary transition text-sm">Inicio</Link>
            <Link href="/shop/catalogo" className="hover:text-primary transition text-sm">Catálogo</Link>
            <button onClick={handleServicesClick} className="hover:text-primary transition text-sm">Servicios</button>
          </div>

          <div className="flex gap-2 md:gap-4 items-center">
            <Link 
              href="/checkout" 
              className="relative p-2.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-text text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <Link 
              href="/shop/catalogo" 
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition hidden sm:block"
            >
              Tienda
            </Link>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                <span className={`w-full h-0.5 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`absolute top-20 left-0 right-0 md:hidden transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-10 opacity-0 scale-95 pointer-events-none'}`}>
          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl border border-white/20 flex flex-col gap-4 text-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="py-3 text-lg font-bold border-b border-gray-50 hover:text-primary transition">Inicio</Link>
            <Link href="/shop/catalogo" onClick={() => setIsOpen(false)} className="py-3 text-lg font-bold border-b border-gray-50 hover:text-primary transition">Catálogo</Link>
            <button 
              onClick={handleServicesClick} 
              className="py-3 text-lg font-bold border-b border-gray-50 hover:text-primary transition"
            >
              Servicios
            </button>
            <Link href="/shop/catalogo" onClick={() => setIsOpen(false)} className="bg-primary text-primary-text py-4 rounded-2xl font-black mt-2 shadow-lg shadow-primary/20">Ir a la Tienda</Link>
          </div>
        </div>
      </header>
    </>
  );
}
