import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, MessageCircle } from 'lucide-react';
import { DownloadTplButton } from './DownloadTplButton';

export const Layout = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-brand-pink" : "hover:text-brand-pink transition-colors";
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
      {/* Promo Bar */}
      <div className="bg-brand-pink text-white text-[10px] md:text-xs py-2 px-4 text-center font-bold uppercase tracking-widest">
        🔥 HASTA 60% OFF | 3 CUOTAS SIN INTERÉS | 10% OFF TRANSFERENCIA 🔥
      </div>

      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-40">
        <div className="container mx-auto px-4 py-4 md:py-6 flex flex-wrap items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold italic tracking-tighter flex items-center cursor-pointer">
              <span className="text-brand-pink text-3xl">i</span>vana Design
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-xl order-3 md:order-2 w-full md:w-auto">
            <div className="relative">
              <input 
                type="text" 
                className="w-full border border-gray-200 rounded-full py-2 px-6 focus:ring-1 focus:ring-brand-pink focus:border-brand-pink text-sm outline-none transition-all" 
                placeholder="¿Qué estás buscando?" 
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4 md:gap-6 text-xs font-medium order-2 md:order-3">
            <div className="hidden sm:flex items-center gap-4">
              <a href="#" className="hover:text-brand-pink transition-colors">Entrar</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-brand-pink transition-colors">Registrarse</a>
            </div>
            
            {/* Cart */}
            <Link to="/carrito" className="flex items-center gap-2 hover:text-brand-pink relative group cursor-pointer">
              <ShoppingBag className="w-5 h-5" />
              <div className="leading-tight hidden sm:block">
                <span className="block text-[10px] text-gray-500 group-hover:text-brand-pink">MI CARRITO</span>
                <span className="block font-bold">$0.00</span>
              </div>
              <span className="absolute -top-2 -right-2 bg-brand-pink text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center sm:hidden">0</span>
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="container mx-auto px-4 pb-4 overflow-x-auto hide-scrollbar">
          <ul className="flex justify-start md:justify-center gap-6 md:gap-8 text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-gray-600 whitespace-nowrap">
            <li><Link to="/" className={isActive('/')}>Inicio</Link></li>
            <li><Link to="/productos" className={isActive('/productos')}>Productos</Link></li>
            <li><Link to="/quienes-somos" className={isActive('/quienes-somos')}>Quiénes Somos</Link></li>
            <li><Link to="/como-comprar" className={isActive('/como-comprar')}>Cómo Comprar</Link></li>
            <li><Link to="/guia-de-talles" className={isActive('/guia-de-talles')}>Guía de Talles</Link></li>
            <li><Link to="/preguntas-frecuentes" className={isActive('/preguntas-frecuentes')}>FAQ</Link></li>
            <li><Link to="/contacto" className={isActive('/contacto')}>Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="text-2xl font-bold italic tracking-tighter flex items-center mb-4">
                <span className="text-brand-pink text-3xl">i</span>vana Design
              </Link>
              <p className="text-sm text-gray-500 max-w-sm mb-6">
                Ropa deportiva diseñada para acompañarte en cada movimiento. Comodidad, estilo y calidad en cada prenda.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/" className="hover:text-brand-pink transition-colors">Inicio</Link></li>
                <li><Link to="/productos" className="hover:text-brand-pink transition-colors">Productos</Link></li>
                <li><Link to="/guia-de-talles" className="hover:text-brand-pink transition-colors">Guía de Talles</Link></li>
                <li><Link to="/contacto" className="hover:text-brand-pink transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Ayuda</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/preguntas-frecuentes" className="hover:text-brand-pink transition-colors">Preguntas Frecuentes</Link></li>
                <li><Link to="/como-comprar" className="hover:text-brand-pink transition-colors">Cómo Comprar</Link></li>
                <li><Link to="/politica-de-devolucion" className="hover:text-brand-pink transition-colors">Política de Devolución</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© 2026 Ivana Design - Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Download TPL Button */}
      <DownloadTplButton />
    </div>
  );
};
