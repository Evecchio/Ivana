import React from 'react';

export const ReturnPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-12 text-center">Política de Devolución</h1>

      <div className="space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold uppercase tracking-widest mb-4 text-gray-900 border-b border-gray-200 pb-2">Condiciones Generales</h2>
          <p className="mb-4">
            En Ivana Design queremos que estés 100% conforme con tu compra. Si el producto no te convence, el talle no es el correcto o presenta alguna falla, podés realizar el cambio o devolución dentro de los <strong>30 días corridos</strong> desde que recibiste tu pedido.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Las prendas deben estar sin uso, sin lavar y sin olores.</li>
            <li>Deben conservar todas sus etiquetas originales y el empaque en el que fueron enviadas.</li>
            <li>No se aceptan cambios de prendas de ropa interior (bombachas) por cuestiones de higiene.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase tracking-widest mb-4 text-gray-900 border-b border-gray-200 pb-2">¿Cómo realizar un cambio?</h2>
          <p className="mb-4">
            Para gestionar un cambio, por favor contactanos por WhatsApp o envianos un email a <strong>cambios@ivanadesign.com.ar</strong> indicando:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Número de orden.</li>
            <li>Prenda que deseás cambiar y motivo.</li>
            <li>Prenda por la cual deseás realizar el cambio (sujeto a disponibilidad de stock).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase tracking-widest mb-4 text-gray-900 border-b border-gray-200 pb-2">Costos de Envío</h2>
          <p className="mb-4">
            Si el cambio es por un error nuestro (falla de fábrica o producto incorrecto), el costo de envío corre por nuestra cuenta.
          </p>
          <p>
            Si el cambio es por talle, color o modelo, el costo del envío de ida y vuelta corre por cuenta del cliente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase tracking-widest mb-4 text-gray-900 border-b border-gray-200 pb-2">Devoluciones de Dinero</h2>
          <p>
            En caso de que desees la devolución del dinero, tenés 10 días corridos desde que recibiste el producto para solicitarla (Botón de Arrepentimiento). El reintegro se realizará al mismo medio de pago utilizado en la compra original, una vez que recibamos el producto y verifiquemos su estado.
          </p>
        </section>
      </div>
    </div>
  );
};
