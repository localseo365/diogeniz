import React from 'react';
import { Home, Building2, Recycle, Clock, Shield, Trophy } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-yellow-400" />,
      title: 'Evaluación inicial',
      description: 'Análisis detallado de la situación para planificar la intervención.',
    },
    {
      icon: <Building2 className="w-12 h-12 text-yellow-400" />,
      title: 'Clasificación y gestión de enseres',
      description: 'Organización y disposición adecuada de objetos y pertenencias.',
    },
    {
      icon: <Recycle className="w-12 h-12 text-yellow-400" />,
      title: 'Retirada de residuos',
      description: 'Eliminación segura y responsable de desechos.',
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-400" />,
      title: 'Recogida de muebles',
      description: 'Manejo y traslado de mobiliario de manera eficiente.',
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-400" />,
      title: 'Desinfección y limpieza profunda',
      description: 'Eliminación de bacterias y limpieza exhaustiva de todas las áreas afectadas.',
    },
    {
      icon: <Trophy className="w-12 h-12 text-yellow-400" />,
      title: 'Rehabilitación del espacio',
      description: 'Restauración del hogar a condiciones habitables y saludables.',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Somos tu empresa de limpieza especializada en el síndrome de Diógenes en Barcelona
          </h2>
          <div className="text-xl text-gray-600 space-y-6 max-w-4xl mx-auto">
            <p>
              Nuestra empresa de limpieza, descontaminación y rehabilitación DIOGENIZ está a tu servicio cuando te enfrentas al síndrome de Diógenes que afecta a un ser querido. Ofrecemos servicios de vaciado y limpieza especializada en el síndrome de Diógenes en toda la ciudad de Barcelona y sus alrededores, contando con una red de profesionales cualificados.
            </p>
            <p>
              Ante situaciones de extrema suciedad e insalubridad habituales, contamos con una amplia experiencia en las limpiezas más complejas y extremas.
            </p>
            <p>
              DIOGENIZ es una empresa especializada en la limpieza del síndrome de Diógenes que te ofrece un servicio integral y un único interlocutor para la clasificación de enseres, retirada de residuos, recogida de muebles, desinfección y limpieza completa de la casa o apartamento.
            </p>
            <p className="font-semibold">
              Nuestros servicios incluyen:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>
            En DIOGENIZ, entendemos la delicadeza de estas situaciones y trabajamos con respeto y profesionalismo para ayudarte a recuperar un entorno limpio y seguro para ti y tus seres queridos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;