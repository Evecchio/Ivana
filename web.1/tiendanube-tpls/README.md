# Plantillas para Tiendanube (Twig / `.tpl`)

He creado una carpeta `/tiendanube-tpls/` con los archivos base en formato `.tpl` (Twig) que utiliza Tiendanube para sus plantillas. Estos archivos contienen la estructura HTML y las clases de Tailwind CSS que diseñamos, pero con las variables dinámicas de Tiendanube (como `{{ product.price | money }}`, `{{ product.name }}`, etc.).

## Archivos generados:

1. **`snipplets/grid/item.tpl`**: Es el archivo más importante. Representa la **tarjeta de producto**. Contiene la lógica para mostrar el precio original tachado, el precio promocional, el cálculo de cuotas, el cálculo del 10% de descuento por transferencia, el aviso de stock y los círculos de colores si el producto tiene variantes.
2. **`templates/home.tpl`**: La estructura de la página de inicio. Incluye el banner principal, el bucle (`for`) para mostrar las categorías destacadas, y las grillas de productos destacados y nuevos ingresos.
3. **`snipplets/header/header.tpl`**: El encabezado de la tienda. Incluye la barra de anuncios, el buscador funcional, el carrito dinámico (que muestra la cantidad de items y el total) y el menú de navegación iterando sobre `menus[settings.main_menu]`.

## ¿Cómo usarlos en tu Tiendanube?

1. **Acceso FTP / Edición de Código**: Debes tener habilitada la edición de código HTML/CSS en tu Tiendanube (generalmente disponible en planes avanzados o solicitando acceso FTP).
2. **Tailwind CSS**: Dado que Tiendanube no compila Tailwind por defecto, debes asegurarte de incluir el CDN de Tailwind en tu archivo `layout.tpl` (dentro de la etiqueta `<head>`), o compilar tu propio CSS y subirlo a la carpeta `static/` de tu tema.
   ```html
   <script src="https://cdn.tailwindcss.com"></script>
   <script>
     tailwind.config = {
       theme: {
         extend: {
           colors: {
             'brand-pink': '#FF007F',
             'brand-dark': '#1a1a1a',
           }
         }
       }
     }
   </script>
   ```
3. **Reemplazo**: Copia el contenido de los archivos `.tpl` generados y pégalos en los archivos correspondientes de tu tema actual en Tiendanube (por ejemplo, reemplazando el contenido de `snipplets/grid/item.tpl` de tu tema base).
