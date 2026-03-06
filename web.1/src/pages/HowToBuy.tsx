import React from 'react';
import { ShoppingBag, CreditCard, Truck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowToBuy = () => {
  const steps = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-brand-pink" />,
      title: "1. Elegí tus productos",
      description: "Navegá por nuestra tienda, seleccioná los productos que más te gusten, elegí tu talle y color, y hacé clic en 'Agregar al carrito'."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-brand-pink" />,
      title: "2. Revisá tu carrito",
      description: "Una vez que hayas elegido todo, andá a tu carrito (arriba a la derecha). Verificá tu pedido y hacé clic en 'Iniciar Compra'."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-brand-pink" />,
      title: "3. Completá tus datos y pagá",
      description: "Ingresá tus datos de contacto y dirección de envío. Elegí el método de pago que prefieras (Tarjeta, Transferencia, etc.) y confirmá."
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-pink" />,
      title: "4. ¡Recibí tu pedido!",
      description: "Una vez acreditado el pago, prepararemos tu pedido y te lo enviaremos. Te llegará un mail con el código de seguimiento."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4 text-center">Cómo Comprar</h1>
      <p className="text-center text-gray-500 mb-12">Comprar en Ivana Design es súper fácil y seguro. Seguí estos pasos:</p>

      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              {step.icon}
            </div>
            <h3 className="text-lg font-bold uppercase tracking-widest">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-brand-pink/5 p-8 rounded-2xl border border-brand-pink/20 text-center">
        <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-brand-pink">¿Tenés alguna duda?</h3>
        <p className="text-gray-600 mb-6">Estamos para ayudarte. Contactanos por WhatsApp o a través de nuestras redes sociales.</p>
        <Link to="/contacto" className="inline-block bg-brand-pink text-white font-bold py-3 px-8 rounded-full uppercase text-xs tracking-widest hover:bg-brand-dark transition-colors">
          Ir a Contacto
        </Link>
      </div>
    </div>
  );
};
