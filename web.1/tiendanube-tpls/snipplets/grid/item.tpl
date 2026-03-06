<article class="group border {% if product.featured %}border-brand-pink/30 shadow-lg{% else %}border-gray-100{% endif %} rounded-lg overflow-hidden flex flex-col bg-white transition-all duration-300 hover:shadow-xl">
  <div class="relative aspect-[3/4] bg-gray-50 overflow-hidden">
    
    {# Etiqueta de descuento #}
    {% if product.compare_at_price > product.price %}
      <span class="absolute top-2 left-2 bg-brand-pink text-white text-[10px] font-bold px-2 py-0.5 rounded z-10 uppercase">
        {{ product.compare_at_price | minus(product.price) | times(100) | divided_by(product.compare_at_price) | round }}% OFF
      </span>
      <div class="absolute top-8 left-2 bg-white text-gray-800 text-[10px] font-bold px-2 py-1 border border-gray-200 z-10 shadow-sm">
        Ahorrás {{ (product.compare_at_price - product.price) | money }} 🔥
      </div>
    {% endif %}

    {# Imagen del producto #}
    <a href="{{ product.url }}" title="{{ product.name }}">
      <img 
        src="{{ product.featured_image | product_image_url('medium') }}" 
        alt="{{ product.name }}" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </a>

    {# Botón hover (Desktop) #}
    <div class="absolute inset-0 bg-black/5 flex items-end justify-center pb-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <a href="{{ product.url }}" class="w-[90%] bg-brand-pink text-white font-bold py-2 px-4 rounded uppercase text-[10px] shadow-lg transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300 hover:scale-105 text-center pointer-events-auto">
        Ver Producto
      </a>
    </div>
  </div>

  <div class="p-4 flex flex-col flex-grow justify-between gap-3">
    <div class="flex flex-col gap-2">
      <h3 class="text-[11px] md:text-xs font-bold uppercase leading-tight line-clamp-2 text-gray-800">
        <a href="{{ product.url }}">{{ product.name }}</a>
      </h3>
      
      {# Variantes de Color #}
      {% if product.variants %}
        <div class="flex items-center gap-2 mt-1">
          {% for variant in product.variants %}
            {% if variant.color %}
              <span 
                class="w-5 h-5 rounded-full border-2 border-gray-200 hover:border-gray-300 cursor-pointer"
                style="background-color: {{ variant.color }};"
                title="{{ variant.name }}"
              ></span>
            {% endif %}
          {% endfor %}
        </div>
      {% endif %}
    </div>

    <div class="flex flex-col gap-1.5 mt-auto">
      <div class="flex items-baseline gap-2 flex-wrap">
        {% if product.compare_at_price > product.price %}
          <span class="text-gray-400 line-through text-[11px]">{{ product.compare_at_price | money }}</span>
        {% endif %}
        <span class="text-brand-pink font-bold text-lg md:text-xl">{{ product.price | money }}</span>
      </div>
      
      {# Cuotas #}
      {% if product.installments_info %}
        <p class="text-[11px] text-gray-600">
          {{ product.installments_info.quantity }} cuotas sin interés de <span class="font-bold text-gray-900">{{ product.installments_info.installment_amount | money }}</span>
        </p>
      {% endif %}
      
      {# Precio con transferencia (Asumiendo 10% de descuento configurado en tienda) #}
      <div class="text-sm md:text-base font-extrabold text-brand-pink border-t border-gray-100 pt-2 mt-1">
        {{ (product.price * 0.9) | money }} <span class="text-[10px] font-semibold text-gray-500 uppercase tracking-wider block md:inline md:ml-1">con transf. o depósito</span>
      </div>
      
      {# Aviso de Stock #}
      {% if product.stock > 0 and product.stock <= 4 %}
        <p class="text-[10px] text-red-600 font-bold mt-2 bg-red-50 p-1.5 rounded text-center border border-red-100">
          {% if product.stock == 1 %}
            ¡Última unidad en stock!
          {% else %}
            ¡Solo quedan {{ product.stock }} en stock!
          {% endif %}
        </p>
      {% endif %}
    </div>
  </div>
</article>
