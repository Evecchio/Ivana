import React from 'react';

export const SizeGuide = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4 text-center">Guía de Talles</h1>
      <p className="text-center text-gray-500 mb-12">Encontrá tu talle ideal con nuestra tabla de medidas. Si estás entre dos talles, te recomendamos elegir el más grande para mayor comodidad.</p>

      <div className="space-y-12">
        {/* Tops */}
        <div>
          <h2 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">Tops y Remeras</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border border-gray-200 font-bold">Talle</th>
                  <th className="p-4 border border-gray-200 font-bold">Busto (cm)</th>
                  <th className="p-4 border border-gray-200 font-bold">Cintura (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200">S (1)</td>
                  <td className="p-4 border border-gray-200">85 - 90</td>
                  <td className="p-4 border border-gray-200">60 - 65</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">M (2)</td>
                  <td className="p-4 border border-gray-200">90 - 95</td>
                  <td className="p-4 border border-gray-200">65 - 70</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">L (3)</td>
                  <td className="p-4 border border-gray-200">95 - 100</td>
                  <td className="p-4 border border-gray-200">70 - 75</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">XL (4)</td>
                  <td className="p-4 border border-gray-200">100 - 105</td>
                  <td className="p-4 border border-gray-200">75 - 80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottoms */}
        <div>
          <h2 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">Calzas, Capris y Shorts</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border border-gray-200 font-bold">Talle</th>
                  <th className="p-4 border border-gray-200 font-bold">Cintura (cm)</th>
                  <th className="p-4 border border-gray-200 font-bold">Cadera (cm)</th>
                  <th className="p-4 border border-gray-200 font-bold">Equivalencia Jean</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200">S (1)</td>
                  <td className="p-4 border border-gray-200">60 - 65</td>
                  <td className="p-4 border border-gray-200">90 - 95</td>
                  <td className="p-4 border border-gray-200">36 - 38</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">M (2)</td>
                  <td className="p-4 border border-gray-200">65 - 70</td>
                  <td className="p-4 border border-gray-200">95 - 100</td>
                  <td className="p-4 border border-gray-200">40 - 42</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">L (3)</td>
                  <td className="p-4 border border-gray-200">70 - 75</td>
                  <td className="p-4 border border-gray-200">100 - 105</td>
                  <td className="p-4 border border-gray-200">44 - 46</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">XL (4)</td>
                  <td className="p-4 border border-gray-200">75 - 80</td>
                  <td className="p-4 border border-gray-200">105 - 110</td>
                  <td className="p-4 border border-gray-200">48 - 50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-8">
          <h3 className="font-bold uppercase tracking-widest mb-2">¿Cómo tomar tus medidas?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
            <li><strong>Busto:</strong> Medí el contorno por la parte más prominente.</li>
            <li><strong>Cintura:</strong> Medí el contorno a la altura del ombligo.</li>
            <li><strong>Cadera:</strong> Medí el contorno por la parte más prominente de los glúteos.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
