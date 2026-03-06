import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-12 text-center">Contacto</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Información</h2>
            <p className="text-gray-600 mb-8">
              ¿Tenés alguna consulta sobre tu pedido, talles o envíos? Escribinos y te responderemos a la brevedad.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center text-brand-pink">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-gray-900">Email</h4>
                <a href="mailto:hola@ivanadesign.com.ar" className="text-gray-600 hover:text-brand-pink transition-colors">hola@ivanadesign.com.ar</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center text-brand-pink">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-gray-900">WhatsApp</h4>
                <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors">+54 9 11 1234-5678</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center text-brand-pink">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-gray-900">Ubicación</h4>
                <p className="text-gray-600">Buenos Aires, Argentina (Tienda Online)</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-900 mb-4">Nuestras Redes</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brand-pink hover:border-brand-pink transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brand-pink hover:border-brand-pink transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Envianos un mensaje</h2>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Nombre Completo</label>
              <input 
                type="text" 
                id="name" 
                className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:ring-1 focus:ring-brand-pink focus:border-brand-pink text-sm outline-none bg-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:ring-1 focus:ring-brand-pink focus:border-brand-pink text-sm outline-none bg-white"
                required
              />
            </div>

            <div>
              <label htmlFor="order" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Número de Orden (Opcional)</label>
              <input 
                type="text" 
                id="order" 
                className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:ring-1 focus:ring-brand-pink focus:border-brand-pink text-sm outline-none bg-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Mensaje</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:ring-1 focus:ring-brand-pink focus:border-brand-pink text-sm outline-none bg-white resize-none"
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-brand-dark text-white font-bold py-4 px-8 rounded-lg uppercase text-xs tracking-widest hover:bg-brand-pink transition-colors duration-300 cursor-pointer mt-4">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
