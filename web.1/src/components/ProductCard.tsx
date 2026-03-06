import React, { useState } from 'react';
import { formatPrice } from '../data';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }: { product: any }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);

  return (
    <Link to={`/productos`} className={`product-card border ${product.isFeatured ? 'border-brand-pink/30 shadow-lg' : 'border-gray-100'} rounded-lg overflow-hidden flex flex-col bg-white transition-all duration-300 hover:shadow-xl`}>
      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
        {product.discount && (
          <span className="absolute top-2 left-2 bg-brand-pink text-white text-[10px] font-bold px-2 py-0.5 rounded z-10 uppercase">
            {product.discount}% OFF
          </span>
        )}
        {product.savings && (
          <div className="absolute top-8 left-2 bg-white text-gray-800 text-[10px] font-bold px-2 py-1 border border-gray-200 z-10">
            Ahorrás {formatPrice(product.savings)} 🔥
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-[10px] font-bold uppercase mb-2 leading-tight min-h-[2.5rem]">
          {product.title}
        </h3>
        
        {/* Selector de Color */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 mb-3">
            {product.colors.map((color: any, idx: number) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedColor(color);
                }}
                className={`w-4 h-4 rounded-full border border-gray-300 transition-all ${selectedColor?.name === color.name ? 'ring-2 ring-brand-pink ring-offset-1' : 'hover:scale-110'}`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                aria-label={`Seleccionar color ${color.name}`}
              />
            ))}
          </div>
        )}

        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-1">
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-[11px]">{formatPrice(product.originalPrice)}</span>
            )}
            <span className="text-brand-pink font-bold text-lg">{formatPrice(product.price)}</span>
            {product.discount && (
              <span className="text-[9px] text-green-600 font-bold">{product.discount}% OFF</span>
            )}
          </div>
          
          {product.installments && (
            <p className="text-[10px] text-gray-500 mb-2">
              {product.installments.count}x <span className="text-brand-pink font-bold">{formatPrice(product.installments.amount)}</span> sin interés
            </p>
          )}
          
          {product.transferPrice && (
            <div className="text-sm font-bold text-brand-pink border-t border-gray-100 pt-2">
              {formatPrice(product.transferPrice)} <span className="text-[10px] font-normal text-gray-600">con transf. o depósito</span>
            </div>
          )}
          
          {product.stockWarning && (
            <p className="text-[9px] text-red-500 font-bold mt-1 italic">
              ¡No te lo pierdas, {product.stockWarning === 1 ? 'es el último! ¡Solo queda 1' : `¡Solo quedan ${product.stockWarning}`} en stock!
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
