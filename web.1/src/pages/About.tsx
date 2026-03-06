import React from 'react';

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-8 text-center">Quiénes Somos</h1>
      
      <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12">
        <img 
          src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2000&auto=format&fit=crop" 
          alt="Equipo Ivana Design" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="space-y-8 text-gray-600 leading-relaxed">
        <p className="text-lg">
          <strong className="text-brand-pink font-bold">Ivana Design</strong> nació con la idea de fusionar moda, comodidad y deporte. Creemos que la ropa que usás para entrenar o para tu día a día tiene que hacerte sentir segura, cómoda y con estilo.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 py-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-gray-900">Nuestra Misión</h3>
            <p>
              Ofrecer prendas deportivas de alta calidad que se adapten a todos los cuerpos y rutinas. Queremos acompañarte en cada movimiento, brindándote el soporte y la flexibilidad que necesitás para alcanzar tus metas.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-gray-900">Nuestra Visión</h3>
            <p>
              Convertirnos en la marca líder de indumentaria deportiva en el país, reconocida por nuestra innovación en diseño, compromiso con la calidad y nuestra comunidad de mujeres empoderadas.
            </p>
          </div>
        </div>

        <p>
          Trabajamos con telas tecnológicas de primera línea: supplex, lycra, microfibra y morley, garantizando durabilidad y un calce perfecto. Cada diseño está pensado para realzar tu figura y darte libertad de movimiento.
        </p>
        
        <p className="text-center font-bold text-xl text-gray-900 mt-12 italic">
          "Tu cuerpo es tu templo, vestilo con lo mejor."
        </p>
      </div>
    </div>
  );
};
