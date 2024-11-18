import React from 'react';
import { Search, ClipboardCheck, Shield, Users } from 'lucide-react';

const Detection = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12 text-yellow-400" />,
      title: 'Detección y evaluación',
      description: 'Identificamos los signos del síndrome de Diógenes y evaluamos la situación para determinar el mejor plan de acción.',
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-yellow-400" />,
      title: 'Limpieza profesional',
      description: 'Realizamos una limpieza exhaustiva y especializada para restaurar la higiene y salubridad del hogar.',
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-400" />,
      title: 'Asesoramiento y apoyo integral',
      description: 'Brindamos orientación y apoyo tanto a la persona afectada como a sus familiares para manejar la situación de manera efectiva.',
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-400" />,
      title: 'Intervención discreta',
      description: 'Actuamos con la máxima discreción y respeto, asegurando la privacidad y dignidad de todos los involucrados.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo detectar el síndrome de Diógenes en Barcelona con DIOGENIZ?
          </h2>
          <div className="text-xl text-gray-600 space-y-6 max-w-4xl mx-auto">
            <p>
              En Barcelona, el síndrome de Diógenes suele descubrirse sin el conocimiento de la persona afectada, ya que esta intenta negar y ocultar su problema hasta el final. En DIOGENIZ, entendemos la delicadeza de estas situaciones y ofrecemos soluciones profesionales para detectar y manejar este síndrome de manera respetuosa y efectiva.
            </p>
            <p>
              Generalmente, son los vecinos quienes sospechan del síndrome de Diógenes, alertados por el comportamiento inusual de la persona que lo padece. Las personas afectadas suelen ser bastante retraídas, aisladas, evitando el contacto y descuidadas en cuanto a higiene. Las sospechas de los vecinos aumentan cuando se perciben malos olores en el hogar y una presencia inusual de insectos. En DIOGENIZ, contamos con equipos capacitados para intervenir de forma discreta y brindar asistencia tanto al afectado como a sus familiares.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Signos del síndrome de Diógenes en viviendas
          </h3>
          <p className="text-gray-600 mb-6">
            El síndrome de Diógenes generalmente es consecuencia de un descuido total por parte de la persona afectada, quien ignora las normas básicas de higiene y deja de mantener su hogar adecuadamente. La persona que padece este síndrome suele acumular todo tipo de objetos y pertenencias, y en ocasiones también cubos de basura y excrementos. En DIOGENIZ, comprendemos que la situación puede volverse rápidamente extrema y es crucial actuar con rapidez.
          </p>
          <p className="text-gray-600">
            Nuestro equipo de profesionales en Barcelona está preparado para intervenir en casos de condiciones insalubres graves que pongan en peligro la salud del afectado y de quienes lo rodean. DIOGENIZ ofrece servicios de:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="font-semibold">
            Si sospechas que alguien cercano en Barcelona podría estar padeciendo el síndrome de Diógenes, no dudes en contactar con DIOGENIZ. Nuestro equipo está disponible para ofrecer ayuda profesional y discreta, garantizando un ambiente seguro y saludable para todos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detection;