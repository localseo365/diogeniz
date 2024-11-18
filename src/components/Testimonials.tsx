import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María Rovira',
      role: 'Propietaria',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
      text: 'El servicio de DIOGENIZ fue excepcional. Transformaron completamente el apartamento de mi madre. Su profesionalidad y sensibilidad son admirables.',
    },
    {
      name: 'Joan Laporta',
      role: 'Administrador de Fincas',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80',
      text: 'Como administrador de fincas, he trabajado con varios servicios de limpieza, pero DIOGENIZ está en otro nivel. Su atención al detalle y eficiencia son incomparables.',
    },
    {
      name: 'Anna Massot',
      role: 'Trabajadora Social',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      text: 'Recomiendo DIOGENIZ a todas las familias que necesitan ayuda. Su equipo es comprensivo y profesional, haciendo que todo el proceso sea más llevadero.',
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Testimonios
          </h2>
          <p className="text-xl text-gray-600">
            Lo que dicen nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;