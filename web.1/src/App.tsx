import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { HowToBuy } from './pages/HowToBuy';
import { SizeGuide } from './pages/SizeGuide';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { ReturnPolicy } from './pages/ReturnPolicy';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Products />} />
          <Route path="quienes-somos" element={<About />} />
          <Route path="como-comprar" element={<HowToBuy />} />
          <Route path="guia-de-talles" element={<SizeGuide />} />
          <Route path="preguntas-frecuentes" element={<FAQ />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="politica-de-devolucion" element={<ReturnPolicy />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
