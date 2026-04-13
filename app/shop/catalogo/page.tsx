"use client";

import Link from "next/link";
import { useRef } from "react";
import { useCart } from "../../context/CartContext";

export default function ShopPage() {
  const { addToCart } = useCart();
  
  // Refs para controlar el scroll de cada carrusel
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleSeeAllClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("todos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  // Datos de ejemplo
  const frames = [
    { id: 1, name: "Aviator Gold", price: "$120", tag: "Premium", img: "👓" },
    { id: 2, name: "Retro Black", price: "$95", tag: "Nuevo", img: "🕶️" },
    { id: 3, name: "Clear Crystal", price: "$110", tag: "Trend", img: "👓" },
    { id: 4, name: "Ocean Blue", price: "$130", tag: "Lujo", img: "🕶️" },
    { id: 5, name: "Tortoise Shell", price: "$105", tag: "Clásico", img: "👓" },
    { id: 6, name: "Matte Slate", price: "$115", tag: "Nuevo", img: "🕶️" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* SECTION: HERO DE LA TIENDA */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/shop.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center space-y-6 md:space-y-8 px-6">
          <div className="space-y-4">
             <span className="inline-block bg-primary/20 text-primary border border-primary/30 px-6 py-2 rounded-full text-[10px] md:text-sm font-black tracking-[0.2em] uppercase backdrop-blur-md">
                Colección Exclusiva
             </span>
             <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-none">
                Estilo en <br className="md:hidden" /><span className="text-primary italic">cada mirada</span>
             </h1>
             <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
               Explora nuestra selección curada de monturas internacionales y lentes de alta gama.
             </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#coleccion" 
              className="w-full sm:w-auto bg-primary text-primary-text px-12 py-5 rounded-full font-black text-xl hover:bg-white transition-all duration-300 shadow-2xl shadow-primary/20 active:scale-95 text-center"
            >
              Explora
            </Link>
            <a 
              href="https://wa.me/5491122334455?text=Hola!%20Me%20gustaría%20agendar%20una%20cita%20visual." 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              Agendar Cita 📅
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: CARRUSELES DE MONTURAS */}
      <section id="coleccion" className="py-16 md:py-24 space-y-16 md:space-y-32 max-w-7xl mx-auto w-full px-4 md:px-6">
        
        {/* Carrusel 1: Más Populares */}
        <div className="space-y-6 md:space-y-8 relative group">
          <div className="flex justify-between items-end px-2">
            <div className="space-y-1 md:space-y-2">
              <h2 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tighter">Más Populares</h2>
              <p className="text-gray-400 text-sm md:text-lg italic font-light">Nuestras monturas más vendidas esta temporada.</p>
            </div>
            
            <div className="flex gap-4 items-center">
              <button 
                onClick={handleSeeAllClick}
                className="hidden md:block text-primary-text text-sm font-black border-b-2 border-primary/30 hover:border-primary pb-1 transition-all uppercase tracking-widest mr-4"
              >
                Ver todo
              </button>
              {/* Botones de Flecha */}
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll(scrollRef1, "left")}
                  className="p-3 rounded-full bg-gray-50 border border-gray-100 hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button 
                  onClick={() => scroll(scrollRef1, "right")}
                  className="p-3 rounded-full bg-gray-50 border border-gray-100 hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
          
          <div 
            ref={scrollRef1}
            className="flex gap-4 md:gap-8 overflow-x-auto pb-10 snap-x snap-mandatory no-scrollbar px-2 -mx-2 scroll-smooth"
          >
            {frames.map((frame) => (
              <div key={frame.id} className="min-w-[280px] md:min-w-[380px] snap-center group cursor-pointer">
                <div className="bg-gray-50 rounded-[2.5rem] aspect-[4/5] flex flex-col items-center justify-center relative overflow-hidden border border-black/15 group-hover:border-primary/50 transition-all duration-700 shadow-sm hover:shadow-2xl">
                  <span className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm text-gray-400 group-hover:text-primary transition-colors">
                    {frame.tag}
                  </span>
                  <div className="text-[100px] md:text-[140px] group-hover:scale-110 transition-transform duration-700 select-none drop-shadow-md">
                    {frame.img}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full md:translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/10 backdrop-blur-md">
                     <button 
                        onClick={() => addToCart(frame)}
                        className="w-full bg-black text-white py-4 rounded-2xl font-black hover:bg-primary hover:text-primary-text transition-all duration-300 shadow-xl"
                      >
                        Añadir al Carrito
                     </button>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center px-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-xl md:text-2xl text-gray-900 tracking-tight">{frame.name}</h3>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Colección 2026</p>
                  </div>
                  <p className="text-xl md:text-2xl font-black text-primary-text">{frame.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carrusel 2: Tendencias */}
        <div className="space-y-6 md:space-y-8 relative group">
          <div className="flex justify-between items-end px-2">
            <div className="space-y-1 md:space-y-2">
              <h2 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tighter">Tendencias <span className="text-primary italic">2026</span></h2>
              <p className="text-gray-400 text-sm md:text-lg italic font-light">Diseños futuristas y materiales ecológicos.</p>
            </div>
            
            <div className="flex gap-4 items-center">
              <button 
                onClick={handleSeeAllClick}
                className="hidden md:block text-primary-text text-sm font-black border-b-2 border-primary/30 hover:border-primary pb-1 transition-all uppercase tracking-widest mr-4"
              >
                Ver todo
              </button>
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll(scrollRef2, "left")}
                  className="p-3 rounded-full bg-gray-900 text-white border border-black/50 hover:bg-primary hover:text-primary-text transition-all shadow-xl active:scale-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button 
                  onClick={() => scroll(scrollRef2, "right")}
                  className="p-3 rounded-full bg-gray-900 text-white border border-white/10 hover:bg-primary hover:text-primary-text transition-all shadow-xl active:scale-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
          
          <div 
            ref={scrollRef2}
            className="flex gap-4 md:gap-8 overflow-x-auto pb-10 snap-x snap-mandatory no-scrollbar px-2 -mx-2 scroll-smooth"
          >
            {[...frames].reverse().map((frame) => (
              <div key={frame.id} className="min-w-[280px] md:min-w-[380px] snap-center group cursor-pointer">
                <div className="bg-[#0A0A0A] rounded-[2.5rem] aspect-[4/5] flex flex-col items-center justify-center relative overflow-hidden border border-white/5 shadow-2xl group-hover:border-primary/40 transition-all duration-700">
                  <span className="absolute top-6 left-6 bg-white/10 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
                    Edición Limitada
                  </span>
                  <div className="text-[100px] md:text-[140px] group-hover:scale-110 transition-transform duration-700 select-none drop-shadow-[0_20px_20px_rgba(255,255,255,0.05)]">
                    {frame.img}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black/40 backdrop-blur-md border-t border-white/10">
                     <button 
                        onClick={() => addToCart(frame)}
                        className="w-full bg-primary text-primary-text py-4 rounded-2xl font-black hover:bg-white transition-all duration-300 shadow-lg shadow-primary/20"
                      >
                        Comprar ahora
                     </button>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center px-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-xl md:text-2xl text-gray-900 tracking-tight uppercase">{frame.name}</h3>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Titanio & Carbono</p>
                  </div>
                  <p className="text-xl md:text-2xl font-black text-primary">{frame.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NEW SECTION: TODOS LOS MODELOS (GRID COMPLETA) */}
        <div id="todos" className="pt-16 md:pt-24 space-y-12 border-t border-gray-100">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter">Nuestra <span className="text-primary italic">Colección Completa</span></h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Explora todos nuestros modelos disponibles. Filtra por estilo, material o precio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[...frames, ...frames].map((frame, index) => (
              <div key={`${frame.id}-${index}`} className="group space-y-6">
                <div className="bg-gray-50 rounded-[3rem] aspect-square flex flex-col items-center justify-center relative overflow-hidden border border-black/15 group-hover:border-primary/30 group-hover:bg-white group-hover:shadow-2xl transition-all duration-500">
                  <div className="text-[120px] group-hover:scale-110 transition-transform duration-700">
                    {frame.img}
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <button 
                    onClick={() => addToCart(frame)}
                    className="absolute bottom-8 bg-white text-black px-8 py-3 rounded-2xl font-black text-sm translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hover:bg-primary hover:text-primary-text shadow-xl"
                  >
                    Añadir al Carrito
                  </button>
                </div>
                
                <div className="flex justify-between items-start px-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-2xl text-gray-900 tracking-tight leading-none">{frame.name}</h3>
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em]">{frame.tag}</p>
                  </div>
                  <p className="text-2xl font-black text-primary-text">{frame.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-16 text-center">
            <button className="bg-gray-900 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-primary hover:text-primary-text transition-all duration-300 shadow-2xl active:scale-95">
              Cargar más modelos
            </button>
          </div>
        </div>

      </section>


    </div>
  );
}
