import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuáles son los métodos de pago?",
    answer: "Aceptamos todas las tarjetas de crédito y débito a través de MercadoPago. También podés abonar mediante transferencia bancaria con un 10% de descuento."
  },
  {
    question: "¿Tienen cuotas sin interés?",
    answer: "Sí, ofrecemos 3 cuotas sin interés con todas las tarjetas de crédito bancarias."
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer: "Sí, realizamos envíos a toda la Argentina a través de Correo Argentino y Andreani. El costo de envío se calcula en el checkout ingresando tu código postal."
  },
  {
    question: "¿Cuánto demora en llegar mi pedido?",
    answer: "Los tiempos de envío varían según tu ubicación. Generalmente, los envíos a CABA y GBA demoran entre 2 y 4 días hábiles, mientras que al interior del país pueden demorar entre 4 y 7 días hábiles."
  },
  {
    question: "¿Puedo realizar cambios?",
    answer: "Sí, tenés 30 días desde que recibís tu compra para realizar cambios. Las prendas deben estar sin uso, con sus etiquetas originales y en perfectas condiciones. Podés ver más detalles en nuestra Política de Devolución."
  },
  {
    question: "¿Tienen local físico?",
    answer: "Por el momento somos una tienda 100% online, lo que nos permite llegar a todo el país con los mejores precios."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-12 text-center">Preguntas Frecuentes</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-bold text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-brand-pink flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 text-gray-600 bg-white">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
