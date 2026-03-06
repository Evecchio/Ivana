import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Download, Code2 } from 'lucide-react';

export const DownloadTplButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const zip = new JSZip();
      
      // 1. Componentes React (Para el repositorio de Antigravity)
      const reactFolder = zip.folder("react-components");
      
      reactFolder?.file("ProductCard.tsx", `import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Utility para formatear precio
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(price);
};

export const ProductCard = ({ product }: { product: any }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);

  return (
    <Link to={\`/productos/\${product.id}\`} className={\`product-card border \${product.isFeatured ? 'border-brand-pink/30 shadow-lg' : 'border-gray-100'} rounded-lg overflow-hidden flex flex-col bg-white transition-all duration-300 hover:shadow-xl\`}>
      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
        {product.discount && (
          <span className="absolute top-2 left-2 bg-brand-pink text-white text-[10px] font-bold px-2 py-0.5 rounded z-10 uppercase">
            {product.discount}% OFF
          </span>
        )}
        {product.savings && (
          <div className="absolute top-8 left-2 bg-white text-gray-800 text-[10px] font-bold px-2 py-1 border border-gray-200 z-10 shadow-sm">
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
                className={\`w-4 h-4 rounded-full border border-gray-300 transition-all \${selectedColor?.name === color.name ? 'ring-2 ring-brand-pink ring-offset-1' : 'hover:scale-110'}\`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                aria-label={\`Seleccionar color \${color.name}\`}
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
              ¡No te lo pierdas, {product.stockWarning === 1 ? 'es el último! ¡Solo queda 1' : \`¡Solo quedan \${product.stockWarning}\`} en stock!
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};`);

      // 2. Archivos TPL (Para Tiendanube final)
      const tplFolder = zip.folder("tiendanube-tpls");
      
      tplFolder?.file("snipplets/grid/item.tpl", `{# 
  REEMPLAZO PARA: snipplets/grid/item.tpl
  Basado en el código original de Antigravity, adaptado al nuevo diseño minimalista.
#}

<div class="js-product-item-private product-item js-product-container js-item-product mb-3 {% if is_slider %}js-item-slide swiper-slide{% endif %}" data-product-type="list" data-product-id="{{ product.id }}" data-store="product-item-{{ product.id }}" data-component="product-list-item" data-component-value="{{ product.id }}" data-variants="{{ product.variants_object | escape }}" data-quickshop-id="quick{{ product.id }}">
  
  <article class="product-card border border-gray-100 rounded-lg overflow-hidden flex flex-col bg-white transition-all duration-300 hover:shadow-xl h-full">
    
    {# CONTENEDOR DE IMAGEN #}
    <div class="js-product-item-image-container-private product-item-image-container relative aspect-[3/4] bg-gray-50 overflow-hidden" data-store="product-item-image-{{ product.id }}">
      
      {# Etiquetas de Descuento (Top Left) #}
      {% if product.compare_at_price > product.price %}
        <span class="absolute top-2 left-2 bg-[#e8185a] text-white text-[10px] font-bold px-2 py-0.5 rounded z-10 uppercase">
          <span class="js-offer-percentage">{{ product.compare_at_price | minus(product.price) | times(100) | divided_by(product.compare_at_price) | round }}</span>% OFF
        </span>
        <div class="absolute top-8 left-2 bg-white text-gray-800 text-[10px] font-bold px-2 py-1 border border-gray-200 z-10 shadow-sm">
          Ahorrás <span class="js-offer-saved-money">{{ (product.compare_at_price - product.price) | money }}</span> 🔥
        </div>
      {% endif %}

      {# Imagen #}
      <a href="{{ product.url }}" title="{{ product.name }}" aria-label="{{ product.name }}" class="js-product-item-image-link-private block w-full h-full">
        <img 
          src="{{ product.featured_image | product_image_url('medium') }}" 
          data-srcset="{{ product.featured_image | product_image_url('small') }} 240w, {{ product.featured_image | product_image_url('medium') }} 320w, {{ product.featured_image | product_image_url('large') }} 480w" 
          class="lazyload js-product-item-image-private product-item-image w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          alt="{{ product.name }}" 
        />
      </a>

      {# Botón Hover Oculto (Ver Producto) #}
      <a href="{{ product.url }}" class="product-ver-overlay absolute inset-0 bg-black/5 flex items-end justify-center p-3 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20" aria-label="{{ product.name }}">
        <span class="product-ver-btn w-full bg-[#e8185a] text-white py-2 font-bold text-[11px] uppercase tracking-widest rounded text-center hover:bg-gray-900 transition-colors">VER PRODUCTO</span>
      </a>

      {# Etiquetas de Envío / Stock Ocultas (Para lógica JS de Antigravity) #}
      <div class="labels product-labels hidden" data-store="product-item-labels">
        <div class="js-stock-label-private label mb-2" data-store="product-item-label-stock" style="display:none;">Sin stock</div>
        <div class="js-shipping-label-private js-free-shipping-minimum-label label shipping-label" data-store="product-item-label-shipping" data-promotion-type="free-shipping" style="display: none;">Gratis</div>
      </div>
      <span class="hidden" data-store="stock-product-{{ product.id }}-{% if product.has_stock %}{{ product.stock }}{% else %}0{% endif %}"></span>
      <span class="js-free-shipping-combines-config hidden" data-combines="false"></span>
    </div>

    {# INFORMACIÓN DEL PRODUCTO #}
    <div class="p-4 flex flex-col flex-grow product-item-information" data-store="product-item-info-{{ product.id }}">
      
      {# Título #}
      <h3 class="text-[10px] font-bold uppercase mb-2 leading-tight min-h-[2.5rem]">
        <a href="{{ product.url }}" class="js-item-name product-item-name text-gray-900 hover:text-[#e8185a] transition-colors" data-store="product-item-name-{{ product.id }}">
          {{ product.name }}
        </a>
      </h3>
      
      {# Variantes de Color (Círculos) #}
      {% if product.variants %}
        <div class="flex items-center gap-1.5 mb-3 product-item-colors-container">
          {% for variant in product.variants %}
            {% if variant.color %}
              <div 
                class="product-item-colors-variation w-4 h-4 rounded-full border border-gray-300 hover:scale-110 transition-transform cursor-pointer js-color-variant" 
                data-value="variation_{{ loop.index }}" 
                data-option="{{ variant.color_name }}"
                style="background-color: {{ variant.color }};"
                title="{{ variant.color_name }}"
              ></div>
            {% endif %}
          {% endfor %}
        </div>
      {% endif %}

      {# Precios y Cuotas #}
      <div class="mt-auto">
        <div class="flex items-center gap-2 mb-1 product-item-price-container" data-store="product-item-price-{{ product.id }}">
          {% if product.compare_at_price > product.price %}
            <span class="js-compare-price-display product-item-price-compare text-gray-400 line-through text-[11px]">
              {{ product.compare_at_price | money }}
            </span>
          {% endif %}
          <span class="js-price-display product-item-price text-[#e8185a] font-bold text-lg" content="{{ product.price }}">
            {{ product.price | money }}
          </span>
        </div>
        
        {# Cuotas #}
        {% if product.installments_info %}
          <div class="js-max-installments-container js-max-installments custom-installments text-[10px] text-gray-500 mb-2">
            <div class="js-max-installments product-installments installment-no-interest">
              <span class='js-installment-amount product-installment-amount'>{{ product.installments_info.quantity }}</span>x 
              <span class='js-installment-price product-installment-value text-[#e8185a] font-bold'>{{ product.installments_info.installment_amount | money }}</span> 
              <span>sin interés</span>
            </div>
          </div>
        {% endif %}
        
        {# Precio con transferencia (10% OFF) #}
        <div class="js-payment-discount-price-product-container payment-discount-price-product-container text-sm font-bold text-[#e8185a] border-t border-gray-100 pt-2">
          <span class="js-payment-discount-price-product payment-discount-price-product" data-priceraw-without-shipping="{{ product.price * 0.9 }}">
            {{ (product.price * 0.9) | money }}
          </span> 
          <span class="js-payment-discount-name-product text-[10px] font-normal text-gray-600">con transf. o depósito</span>
        </div>
        
        {# Aviso de Stock #}
        {% if product.stock > 0 and product.stock <= 5 %}
          <div class="js-last-product text-stock text-[9px] text-red-500 font-bold mt-1 italic" {% if product.stock > 1 %}style="display: none;"{% endif %}>
            ¡No te lo pierdas, es el último!
          </div>
          <div class="js-latest-products-available text-stock text-[9px] text-red-500 font-bold mt-1 italic" data-limit="5" {% if product.stock == 1 %}style="display: none;"{% endif %}>
            ¡Solo quedan <span class="js-product-stock">{{ product.stock }}</span> en stock!
          </div>
        {% endif %}
      </div>
    </div>

    {# Botón Agregar al Carrito (Oculto, usado por JS de Antigravity) #}
    <div class="product-item-quick-shop-container js-item-submit-container hidden">
      <span class="product-item-quick-shop-modal-trigger js-modal-open-private js-quickshop-modal-open btn btn-primary btn-small js-quickshop-slide" title="Compra rápida de {{ product.name }}" aria-label="Compra rápida de {{ product.name }}" data-target="#quickshop-modal" data-component="product-list-item.add-to-cart" data-component-value="{{ product.id }}">
        <span class="js-open-quickshop-wording">Comprar</span>
      </span>
    </div>

  </article>
</div>`);

      // 3. Instrucciones para Antigravity
      zip.file("INSTRUCCIONES_ANTIGRAVITY.md", `# Instrucciones para Antigravity

He analizado el código fuente original de tu tienda y he creado el archivo de reemplazo exacto para la tarjeta de producto (\`snipplets/grid/item.tpl\`).

Este archivo mantiene **absolutamente todas las clases de JavaScript (\`js-*\`) y atributos de datos (\`data-store\`, \`data-component\`)** que Antigravity necesita para que funcionen las cuotas, el cambio de variantes, el botón de compra rápida y el control de stock.

## ¿Qué debes decirle a Antigravity?

Copia y pega este prompt a tu agente Antigravity, adjuntando el archivo \`snipplets/grid/item.tpl\` que viene en este ZIP:

> "Hola Antigravity. Necesito actualizar el diseño de la tarjeta de producto. 
> 
> Te adjunto el nuevo archivo \`snipplets/grid/item.tpl\`. Este archivo ya contiene todas las variables de Twig necesarias y mantiene intactas todas las clases \`js-*\` y atributos \`data-*\` para que la lógica del carrito, variantes y stock siga funcionando perfectamente.
> 
> Por favor, reemplaza el contenido actual de \`snipplets/grid/item.tpl\` en el repositorio por este nuevo código. Además, asegúrate de que Tailwind CSS esté compilando correctamente los colores personalizados (como \`#e8185a\`) y publica los cambios."
`);

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "codigo-para-antigravity.zip");
    } catch (error) {
      console.error("Error generating zip:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button 
      onClick={handleDownload}
      disabled={isDownloading}
      className="fixed bottom-24 right-6 bg-gray-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
      title="Descargar código para Antigravity"
    >
      <Code2 className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold px-3 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Descargar código para Antigravity
      </span>
    </button>
  );
};
