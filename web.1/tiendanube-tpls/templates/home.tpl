{# templates/home.tpl - Página de Inicio #}

{# Hero Banner #}
<section class="relative w-full h-[60vh] md:h-[80vh] bg-gray-100 overflow-hidden">
  <img 
    src="{{ 'images/hero.jpg' | static_url }}" 
    alt="{{ store.name }}" 
    class="w-full h-full object-cover object-center"
  />
  <div class="absolute inset-0 bg-black/20 flex items-center justify-center">
    <div class="text-center text-white px-4">
      <h2 class="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4 drop-shadow-lg">Nueva Colección</h2>
      <p class="text-sm md:text-lg mb-8 font-medium tracking-wide drop-shadow-md">Descubrí la comodidad y el estilo que te mueven.</p>
      <a href="{{ store.products_url }}" class="inline-block bg-brand-pink text-white font-bold py-3 px-8 rounded-full uppercase text-xs tracking-widest hover:bg-white hover:text-brand-pink transition-colors duration-300 shadow-lg cursor-pointer">
        Ver Todo
      </a>
    </div>
  </div>
</section>

<div class="container mx-auto px-4 py-12 md:py-20">
  
  {# Categorías Destacadas #}
  {% if categories %}
    <section class="mb-20">
      <div class="flex overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center gap-6 md:gap-12 snap-x">
        {% for category in categories | limit(7) %}
          <a href="{{ category.url }}" class="flex flex-col items-center gap-3 group snap-start shrink-0">
            <div class="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-100 p-1 transition-transform duration-300 group-hover:scale-105 group-hover:border-brand-pink/30">
              <img src="{{ category.image | category_image_url('small') }}" alt="{{ category.name }}" class="w-full h-full object-cover rounded-full" />
            </div>
            <span class="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-center max-w-[100px] group-hover:text-brand-pink transition-colors">
              {{ category.name }}
            </span>
          </a>
        {% endfor %}
      </div>
    </section>
  {% endif %}

  {# Productos Destacados / Descuentos #}
  {% if sections.primary.products %}
    <section class="relative mb-20">
      <h2 class="text-xl md:text-2xl font-bold text-center mb-10 tracking-widest uppercase">Super Descuentos</h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {% for product in sections.primary.products | limit(5) %}
          {% include 'snipplets/grid/item.tpl' %}
        {% endfor %}
      </div>
    </section>
  {% endif %}

  {# Nuevos Ingresos #}
  {% if sections.new.products %}
    <section class="relative mb-12">
      <div class="flex items-center justify-between mb-10">
        <h2 class="text-xl md:text-2xl font-bold tracking-widest uppercase">Nuevos Ingresos</h2>
        <a href="{{ store.products_url }}" class="text-xs font-bold uppercase tracking-widest text-brand-pink hover:underline hidden md:block">Ver todos</a>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {% for product in sections.new.products | limit(4) %}
          {% include 'snipplets/grid/item.tpl' %}
        {% endfor %}
      </div>
      <div class="mt-8 text-center md:hidden">
        <a href="{{ store.products_url }}" class="inline-block border border-gray-300 rounded-full py-2 px-6 text-xs font-bold uppercase tracking-widest hover:border-brand-pink hover:text-brand-pink transition-colors">
          Ver todos
        </a>
      </div>
    </section>
  {% endif %}

</div>

{# Beneficios (Features) #}
<section class="bg-gray-50 py-12 border-y border-gray-100">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div class="flex flex-col items-center gap-3">
        <svg class="w-8 h-8 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
        <h4 class="text-sm font-bold uppercase tracking-wider">Envío Gratis</h4>
        <p class="text-xs text-gray-500">En compras superiores a $50.000</p>
      </div>
      <div class="flex flex-col items-center gap-3">
        <svg class="w-8 h-8 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
        <h4 class="text-sm font-bold uppercase tracking-wider">3 Cuotas Sin Interés</h4>
        <p class="text-xs text-gray-500">Con todas las tarjetas de crédito</p>
      </div>
      <div class="flex flex-col items-center gap-3">
        <svg class="w-8 h-8 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        <h4 class="text-sm font-bold uppercase tracking-wider">Compra Segura</h4>
        <p class="text-xs text-gray-500">Protegemos tus datos siempre</p>
      </div>
    </div>
  </div>
</section>
