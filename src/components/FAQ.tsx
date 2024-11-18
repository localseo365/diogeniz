import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Qué es el síndrome de Diógenes y cómo afecta al hogar?',
      answer: 'El síndrome de Diógenes es un trastorno caracterizado por un comportamiento extremo de acumulación y negligencia personal, lo que lleva a condiciones de vivienda insalubres y desorganizadas. Este síndrome puede resultar en la acumulación de objetos, basura y falta de higiene, creando un entorno potencialmente peligroso para la salud del afectado y de quienes lo rodean.'
    },
    {
      question: '¿Cómo puede DIOGENIZ ayudar en la limpieza de hogares afectados por el síndrome de Diógenes?',
      answer: 'En DIOGENIZ, ofrecemos un servicio integral de limpieza especializado para hogares afectados por el síndrome de Diógenes en Barcelona. Nuestro equipo de profesionales está capacitado para manejar situaciones complejas con sensibilidad y respeto, realizando una limpieza exhaustiva que restaura la higiene y seguridad del hogar. Además, colaboramos con servicios de apoyo para garantizar una intervención efectiva y compasiva.'
    },
    {
      question: '¿Es seguro contratar a DIOGENIZ para la limpieza de condiciones insalubres graves?',
      answer: 'Sí, contratar a DIOGENIZ es completamente seguro. Nuestro personal está altamente entrenado y equipado con el equipo de protección necesario para manejar entornos insalubres de manera segura. Además, seguimos estrictos protocolos de limpieza y desinfección para garantizar la seguridad tanto de nuestro equipo como de los ocupantes del hogar.'
    },
    {
      question: '¿Cómo maneja DIOGENIZ la privacidad y dignidad de las personas afectadas durante la limpieza?',
      answer: 'En DIOGENIZ, entendemos la sensibilidad de tratar con personas que padecen el síndrome de Diógenes. Por ello, actuamos con la máxima discreción y respeto, asegurando la privacidad y dignidad de los afectados en todo momento. Nuestro enfoque es compasivo y profesional, trabajando en estrecha colaboración con las familias y profesionales de la salud para proporcionar un apoyo adecuado y respetuoso.'
    },
    {
      question: '¿Qué pasos sigue DIOGENIZ una vez que se ha identificado una situación de síndrome de Diógenes?',
      answer: 'Una vez identificada una situación de síndrome de Diógenes, DIOGENIZ procede de la siguiente manera:\n\n• Evaluación Inicial: Realizamos una inspección detallada del hogar para evaluar el alcance del problema.\n• Planificación de la Intervención: Diseñamos un plan de limpieza personalizado que aborda las necesidades específicas del hogar.\n• Limpieza y Desinfección: Nuestro equipo lleva a cabo una limpieza profunda, eliminando acumulaciones de objetos y desechos, y desinfectando las áreas afectadas.\n• Asesoramiento y Apoyo: Proporcionamos orientación a las familias sobre cómo mantener un ambiente saludable y ofrecemos recursos adicionales para el apoyo continuo.\n• Seguimiento: Realizamos visitas de seguimiento para asegurar que las condiciones se mantengan adecuadas y ofrecer asistencia adicional si es necesario.\n\nSi sospechas que alguien cercano en Barcelona podría estar padeciendo el síndrome de Diógenes, no dudes en contactar con DIOGENIZ. Estamos aquí para ofrecer ayuda profesional y discreta, garantizando un ambiente seguro y saludable para todos.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Sobre la limpieza por síndrome de Diógenes en Barcelona con DIOGENIZ
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg hover:shadow-md transition-shadow"
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 text-yellow-400" />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-yellow-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;