import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{
          backgroundImage: 'url("https://www.grand-nettoyage.fr/wp-content/uploads/2023/06/8cb1a50b-99e6-4c55-87bc-a8bc9bdffe29.webp")',
        }}
        role="img"
        aria-label="Fondo de limpieza síndrome de Diógenes"
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Expertos en limpieza de
            <span className="text-yellow-400"> síndrome de Diógenes en Barcelona</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Servicio profesional de limpieza y desinfección para casos de acumulación compulsiva en Barcelona. Disponibles 24/7 para urgencias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.link/0y62pb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors"
            >
              Solicitar Presupuesto
              <ArrowRight size={20} />
            </a>
            <a
              href="https://wa.link/0y62pb"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;