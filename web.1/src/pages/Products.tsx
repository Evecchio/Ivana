import React, { useState } from 'react';
import { ALL_PRODUCTS, CATEGORIES } from '../data';
import { ProductCard } from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProducts = activeCategory 
    ? ALL_PRODUCTS.filter(p => p.category === activeCategory)
    : ALL_PRODUCTS;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb & Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold uppercase tracking-widest mb-2">Productos</h1>
        <p className="text-sm text-gray-500">Inicio / Productos {activeCategory ? `/ ${activeCategory}` : ''}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 sticky top-32">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-4">
              <Filter className="w-5 h-5" />
              <h2 className="font-bold uppercase tracking-widest text-sm">Filtros</h2>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold text-xs uppercase tracking-widest mb-4 flex items-center justify-between">
                Categorías <ChevronDown className="w-4 h-4" />
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <button 
                    onClick={() => setActiveCategory(null)}
                    className={`hover:text-brand-pink transition-colors ${!activeCategory ? 'font-bold text-brand-pink' : 'text-gray-600'}`}
                  >
                    Todos los productos
                  </button>
                </li>
                {CATEGORIES.map((cat, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => setActiveCategory(cat.name)}
                      className={`hover:text-brand-pink transition-colors ${activeCategory === cat.name ? 'font-bold text-brand-pink' : 'text-gray-600'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500">Mostrando {filteredProducts.length} productos</p>
            <select className="border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:border-brand-pink">
              <option>Destacados</option>
              <option>Menor precio</option>
              <option>Mayor precio</option>
              <option>Nuevos ingresos</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-gray-500">No se encontraron productos en esta categoría.</p>
              <button 
                onClick={() => setActiveCategory(null)}
                className="mt-4 bg-brand-pink text-white font-bold py-2 px-6 rounded-full uppercase text-xs tracking-widest hover:bg-brand-dark transition-colors"
              >
                Ver todos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
