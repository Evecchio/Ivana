import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, CreditCard, ShieldCheck } from 'lucide-react';
import { CATEGORIES, DISCOUNT_PRODUCTS, NEW_ARRIVALS } from '../data';
import { ProductCard } from '../components/ProductCard';

const Hero = () => (
  <section className="relative w-full h-[60vh] md:h-[80vh] bg-gray-100 overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=2000&auto=format&fit=crop" 
      alt="Activewear" 
      className="w-full h-full object-cover object-center" 
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4 drop-shadow-lg">Nueva Colección</h2>
        <p className="text-sm md:text-lg mb-8 font-medium tracking-wide drop-shadow-md">Descubrí la comodidad y el estilo que te mueven.</p>
        <Link to="/productos" className="inline-block bg-brand-pink text-white font-bold py-3 px-8 rounded-full uppercase text-xs tracking-widest hover:bg-white hover:text-brand-pink transition-colors duration-300 shadow-lg cursor-pointer">
          Ver Todo
        </Link>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="bg-gray-50 py-12 border-y border-gray-100">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <Truck className="w-8 h-8 text-brand-pink" strokeWidth={1.5} />
          <h4 className="text-sm font-bold uppercase tracking-wider">Envío Gratis</h4>
          <p className="text-xs text-gray-500">En compras superiores a $50.000</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <CreditCard className="w-8 h-8 text-brand-pink" strokeWidth={1.5} />
          <h4 className="text-sm font-bold uppercase tracking-wider">3 Cuotas Sin Interés</h4>
          <p className="text-xs text-gray-500">Con todas las tarjetas de crédito</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-brand-pink" strokeWidth={1.5} />
          <h4 className="text-sm font-bold uppercase tracking-wider">Compra Segura</h4>
          <p className="text-xs text-gray-500">Protegemos tus datos siempre</p>
        </div>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-2xl text-center">
      <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">¡Unite a nuestro Newsletter!</h2>
      <p className="text-sm text-gray-500 mb-8">Enterate antes que nadie de nuestros nuevos ingresos, promociones exclusivas y más.</p>
      <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Tu correo electrónico" 
          className="flex-grow border border-gray-200 rounded-full py-3 px-6 focus:ring-1 focus:ring-brand-pink focus:border-brand-pink text-sm outline-none"
          required
        />
        <button type="submit" className="bg-gray-900 text-white font-bold py-3 px-8 rounded-full uppercase text-xs tracking-widest hover:bg-brand-pink transition-colors duration-300 cursor-pointer">
          Suscribirme
        </button>
      </form>
    </div>
  </section>
);

export const Home = () => {
  return (
    <>
      <Hero />

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Categories */}
        <section className="mb-20">
          <div className="flex overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center gap-6 md:gap-12 snap-x">
            {CATEGORIES.map((cat, idx) => (
              <Link to="/productos" key={idx} className="flex flex-col items-center gap-3 group snap-start shrink-0">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-100 p-1 transition-transform duration-300 group-hover:scale-105 group-hover:border-brand-pink/30">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-center max-w-[100px] group-hover:text-brand-pink transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Super Descuentos */}
        <section className="relative mb-20">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-10 tracking-widest uppercase">Super Descuentos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {DISCOUNT_PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Nuevos Ingresos */}
        <section className="relative mb-12">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase">Nuevos Ingresos</h2>
            <Link to="/productos" className="text-xs font-bold uppercase tracking-widest text-brand-pink hover:underline hidden md:block">Ver todos</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {NEW_ARRIVALS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/productos" className="inline-block border border-gray-300 rounded-full py-2 px-6 text-xs font-bold uppercase tracking-widest hover:border-brand-pink hover:text-brand-pink transition-colors">
              Ver todos
            </Link>
          </div>
        </section>
      </div>

      <Features />
      <Newsletter />
    </>
  );
};
