import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      
      {/* SECTION: HERO */}
      <section className="relative min-h-screen flex items-center justify-start pt-20 px-6 overflow-hidden">
        
        {/* IMAGEN DE FONDO COMPLETA CON OVERLAY */}
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format&fit=crop')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="max-w-2xl space-y-10">
            <div className="space-y-4">
              <span className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase backdrop-blur-md">
                Tecnología & Estilo
              </span>
              <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter text-white">
                Tu visión, <br />
                <span className="text-primary italic drop-shadow-2xl">nuestra pasión</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-xl leading-relaxed font-light">
              Descubre una experiencia visual única. Combinamos precisión médica avanzada con las últimas tendencias internacionales en moda óptica.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <Link 
                href="/shop/catalogo" 
                className="bg-primary text-primary-text px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-black transition-all duration-300 shadow-2xl shadow-primary/40 active:scale-95 flex items-center gap-3"
              >
                Explorar Tienda
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>


          </div>
        </div>
      </section>

      {/* SECTION: BENTO GRID SERVICES */}
      <section id="servicios" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
        {/* Elementos decorativos de fondo dinámicos */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-16 md:mb-24 text-center">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-4 block">Excelencia Visual</span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6">
              Servicios <span className="text-primary italic">Especializados</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Combinamos la precisión de la medicina oftalmológica con la exclusividad del diseño internacional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:gap-8 h-auto">
            
            {/* 1. MONTURAS DE LUJO - Grande Vertical */}
            <div className="md:col-span-2 md:row-span-2 bg-gradient-to-b from-[#111] to-[#0A0A0A] rounded-[3rem] relative overflow-hidden group border border-white/5 shadow-2xl hover:border-primary/40 transition-all duration-700 min-h-[500px] md:min-h-0">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 space-y-4">
                <span className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full inline-block backdrop-blur-md">Eyas & Trends</span>
                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter italic leading-none">Monturas <br/>de Autor</h3>
                <p className="text-gray-400 max-w-xs text-base md:text-lg leading-relaxed">Curaduría de marcas premium de Italia, Francia y Japón.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Titanio', 'Acetato', 'Baño de Oro'].map(tag => (
                    <span key={tag} className="text-[10px] text-gray-500 border border-white/10 px-3 py-1 rounded-full uppercase font-bold tracking-widest">{tag}</span>
                  ))}
                </div>
                <Link href="/shop/catalogo" className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-2xl font-black text-sm hover:bg-primary hover:text-primary-text transition-all duration-300 mt-6 shadow-xl">
                  Explorar Catálogo <span className="text-xl">→</span>
                </Link>
              </div>
            </div>

            {/* 2. OFTALMOLOGÍA - Ancho Superior */}
            <div className="md:col-span-2 bg-[#111] rounded-[3rem] p-8 md:p-10 border border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm flex flex-col justify-between min-h-[300px] md:min-h-0">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all"></div>
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-6">
                   <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">👁️</div>
                   <span className="text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20 px-3 py-1 rounded-full">Alta Tecnología</span>
                 </div>
                 <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter">Oftalmología <span className="text-primary">Avanzada</span></h3>
                 <p className="text-gray-400 text-base md:text-lg max-w-md font-light">Exámenes computarizados, diagnóstico de patologías y control de miopía.</p>
               </div>
               <a 
                 href="https://wa.me/5491122334455?text=Hola!%20Me%20gustaría%20agendar%20una%20cita%20médica." 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="relative z-10 mt-6 font-bold text-primary flex items-center gap-2 group/btn hover:gap-4 transition-all uppercase text-xs tracking-widest"
               >
                  Agendar Examen Visual <span className="text-xl">→</span>
               </a>
            </div>

            {/* 3. LENTES DE CONTACTO */}
            <div className="md:col-span-1 bg-[#0D0D0D] rounded-[3rem] p-8 border border-white/5 shadow-xl hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-all"></div>
               <div className="relative z-10">
                 <div className="text-5xl mb-6 group-hover:-rotate-12 transition-transform">🔍</div>
                 <h3 className="font-bold text-xl text-white mb-3 leading-tight uppercase tracking-tighter">Lentes de <br/>Contacto</h3>
                 <ul className="space-y-2 mb-4">
                   {['Multifocales', 'Hidrogel', 'Estéticos'].map(item => (
                     <li key={item} className="text-[10px] text-gray-500 flex items-center gap-2 uppercase font-black tracking-widest">
                       <span className="w-1 h-1 bg-blue-500 rounded-full"></span> {item}
                     </li>
                   ))}
                 </ul>
               </div>
               <p className="text-gray-500 text-[11px] leading-tight relative z-10 font-medium">Adaptación técnica para visión perfecta y confort total.</p>
            </div>

            {/* 4. PRÓTESIS OCULARES */}
            <div className="md:col-span-1 bg-[#0D0D0D] rounded-[3rem] p-8 border border-white/5 shadow-xl hover:border-primary/30 transition-all duration-500 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/10 transition-all"></div>
               <div className="relative z-10">
                 <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">✨</div>
                 <h3 className="font-bold text-xl text-white mb-3 leading-tight uppercase tracking-tighter">Prótesis <br/>Oculares</h3>
                 <ul className="space-y-2 mb-4">
                   {['Pintado a Mano', 'Anatómicas', 'Mantenimiento'].map(item => (
                     <li key={item} className="text-[10px] text-gray-400 flex items-center gap-2 uppercase font-black tracking-widest">
                       <span className="w-1 h-1 bg-primary rounded-full"></span> {item}
                     </li>
                   ))}
                 </ul>
               </div>
               <p className="text-gray-500 text-[11px] leading-tight relative z-10 font-medium">Artesanía médica con realismo excepcional y estética superior.</p>
            </div>


          </div>

        </div>
      </section>


      {/* SECTION: WHATSAPP GLOW SECTION */}
      <section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
        {/* Un pequeño resplandor de fondo para que no se sienta plano */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">¿Tienes dudas sobre <br/><span className="text-primary italic">tu salud visual?</span></h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Nuestro equipo de especialistas está listo para asesorarte de forma personalizada y sin compromiso.
            </p>
          </div>
          
          <div className="flex justify-center pt-6">
            <a 
              href="https://wa.me/1234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-12 py-6 rounded-full font-black text-2xl shadow-2xl flex items-center gap-4 transition-all duration-300 hover:scale-105 animate-glow"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.329 1.441 5.1 1.442h.005c5.454 0 9.895-4.442 9.898-9.896.002-2.646-1.03-5.131-2.906-7.01-1.875-1.878-4.361-2.912-7.01-2.912-5.454 0-9.897 4.441-9.899 9.897-.001 1.916.557 3.784 1.612 5.41l-.953 3.477 3.553-.932z"/>
              </svg>
              ¡Hablar con un Experto!
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: CTA COMPRA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center bg-primary rounded-[3rem] py-16 text-primary-text shadow-2xl shadow-primary/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 transition-transform duration-1000 group-hover:scale-110"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary-text">¿Buscas lentes nuevos?</h2>
            <p className="text-primary-text/70 text-xl mb-10 max-w-xl mx-auto font-medium leading-relaxed">
              Visita nuestra tienda online y elige entre cientos de modelos exclusivos con envío a domicilio.
            </p>
            <Link href="/shop/catalogo" className="bg-white text-primary-text px-10 py-4 rounded-full font-extrabold text-lg hover:bg-gray-100 transition inline-block">
              Ir a la Tienda
            </Link>
          </div>
        </div>
      </section>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all duration-300 group">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.329 1.441 5.1 1.442h.005c5.454 0 9.895-4.442 9.898-9.896.002-2.646-1.03-5.131-2.906-7.01-1.875-1.878-4.361-2.912-7.01-2.912-5.454 0-9.897 4.441-9.899 9.897-.001 1.916.557 3.784 1.612 5.41l-.953 3.477 3.553-.932z"/></svg>
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-100 pointer-events-none">¿En qué podemos ayudarte?</span>
      </a>

    </div>
  );
}
