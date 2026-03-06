{# snipplets/header/header.tpl #}

{# Promo Bar #}
<div class="bg-brand-pink text-white text-[10px] md:text-xs py-2 px-4 text-center font-bold uppercase tracking-widest">
  🔥 HASTA 60% OFF | 3 CUOTAS SIN INTERÉS | 10% OFF TRANSFERENCIA 🔥
</div>

<header class="border-b border-gray-100 sticky top-0 bg-white z-40">
  <div class="container mx-auto px-4 py-4 md:py-6 flex flex-wrap items-center justify-between gap-4">
    
    {# Logo #}
    <div class="flex-shrink-0">
      {% if has_logo %}
        <a href="{{ store.url }}" title="{{ store.name }}">
          {{ store.logo | img_tag(store.name) }}
        </a>
      {% else %}
        <a href="{{ store.url }}" class="text-2xl font-bold italic tracking-tighter flex items-center cursor-pointer">
          <span class="text-brand-pink text-3xl">i</span>vana Design
        </a>
      {% endif %}
    </div>

    {# Search Bar #}
    <div class="flex-grow max-w-xl order-3 md:order-2 w-full md:w-auto">
      <form action="{{ store.search_url }}" method="get" class="relative">
        <input 
          type="text" 
          name="q"
          class="w-full border border-gray-200 rounded-full py-2 px-6 focus:ring-1 focus:ring-brand-pink focus:border-brand-pink text-sm outline-none transition-all" 
          placeholder="¿Qué estás buscando?" 
        />
        <button type="submit" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-pink cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </form>
    </div>

    {# User Actions #}
    <div class="flex items-center gap-4 md:gap-6 text-xs font-medium order-2 md:order-3">
      <div class="hidden sm:flex items-center gap-4">
        {% if not customer %}
          <a href="{{ store.customer_login_url }}" class="hover:text-brand-pink transition-colors">Entrar</a>
          <span class="text-gray-300">|</span>
          <a href="{{ store.customer_register_url }}" class="hover:text-brand-pink transition-colors">Registrarse</a>
        {% else %}
          <a href="{{ store.customer_home_url }}" class="hover:text-brand-pink transition-colors">Mi Cuenta</a>
          <span class="text-gray-300">|</span>
          <a href="{{ store.customer_logout_url }}" class="hover:text-brand-pink transition-colors">Salir</a>
        {% endif %}
      </div>
      
      {# Cart #}
      <a href="{{ store.cart_url }}" class="flex items-center gap-2 hover:text-brand-pink relative group cursor-pointer">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        <div class="leading-tight hidden sm:block">
          <span class="block text-[10px] text-gray-500 group-hover:text-brand-pink">MI CARRITO</span>
          <span class="block font-bold">{{ cart.total | money }}</span>
        </div>
        <span class="absolute -top-2 -right-2 bg-brand-pink text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center sm:hidden">{{ cart.items_count }}</span>
      </a>
    </div>
  </div>

  {# Navigation Menu #}
  <nav class="container mx-auto px-4 pb-4 overflow-x-auto hide-scrollbar">
    <ul class="flex justify-start md:justify-center gap-6 md:gap-8 text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-gray-600 whitespace-nowrap">
      {% for item in menus[settings.main_menu] %}
        <li>
          <a href="{{ item.url }}" class="hover:text-brand-pink transition-colors {% if item.current %}text-brand-pink border-b-2 border-brand-pink pb-1{% endif %}">
            {{ item.name }}
          </a>
        </li>
      {% endfor %}
    </ul>
  </nav>
</header>
