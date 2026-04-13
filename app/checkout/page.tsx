"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, removeFromCart, totalPrice, totalItems } = useCart();

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "5491122334455"; // Reemplaza con tu número real
    
    let message = "¡Hola ÓpticaPro! 👋 Me gustaría realizar el siguiente pedido:\n\n";
    
    cart.forEach((item) => {
      message += `• ${item.name} (x${item.quantity}) - $${item.price * item.quantity}\n`;
    });
    
    message += `\n*Total: $${totalPrice}*\n\n¿Cómo puedo coordinar el pago y la entrega?`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <div className="text-[100px] mb-8 animate-bounce">🛒</div>
        <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">Tu carrito está vacío</h1>
        <p className="text-gray-500 mb-8 text-center max-w-xs italic">Parece que aún no has elegido tus gafas ideales.</p>
        <Link 
          href="/shop/catalogo" 
          className="bg-primary text-primary-text px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300"
        >
          Ir al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-32 pb-12 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 md:mb-12 tracking-tighter">Tu Carrito</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Lista de productos */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-4 md:gap-6 group">
                <div className="bg-gray-50 w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl flex items-center justify-center text-3xl md:text-4xl group-hover:scale-110 transition-transform flex-shrink-0">
                  {item.img}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base md:text-lg text-gray-900 truncate">{item.name}</h3>
                  <p className="text-gray-400 text-xs md:text-sm">Cantidad: {item.quantity}</p>
                  <p className="text-primary-text font-black mt-1 text-sm md:text-base">${item.price * item.quantity}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                </button>
              </div>
            ))}
          </div>

          {/* Resumen y Botón */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 sticky top-24">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Resumen</h2>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex justify-between text-gray-500 text-sm md:text-base">
                  <span>Productos ({totalItems})</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-500 text-sm md:text-base">
                  <span>Envío</span>
                  <span className="text-green-500 font-bold uppercase text-[10px] md:text-xs tracking-widest mt-1">Gratis</span>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                  <span className="font-bold text-gray-900 text-base md:text-lg">Total</span>
                  <span className="text-2xl md:text-3xl font-black text-primary-text">${totalPrice}</span>
                </div>
              </div>
              
              <button 
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#25D366] text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-[#128C7E] transition-all duration-300 shadow-xl shadow-green-200 flex items-center justify-center gap-2 md:gap-3 active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Finalizar Pedido
              </button>
              
              <p className="mt-4 md:mt-6 text-[9px] md:text-[10px] text-gray-400 text-center uppercase tracking-widest leading-relaxed">
                Coordinaremos el pago por WhatsApp de forma segura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
