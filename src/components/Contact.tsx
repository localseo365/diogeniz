import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://wa.link/0y62pb', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <p className="text-xl text-gray-600">
            Solicite presupuesto sin compromiso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-yellow-400 mr-4" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <a 
                      href="https://wa.link/0y62pb" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-yellow-400"
                      aria-label="Contactar por WhatsApp al 690 22 09 44"
                    >
                      690 22 09 44
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-yellow-400 mr-4" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a 
                      href="mailto:info@diogeniz.vercel.app" 
                      className="hover:text-yellow-400"
                      aria-label="Enviar email a info@diogeniz.vercel.app"
                    >
                      info@diogeniz.vercel.app
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-yellow-400 mr-4" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p>Av. de la República Argentina, 28</p>
                    <p>Gràcia, 08023 Barcelona</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.4876543210123!2d2.1397!3d41.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f3b3b3b3b3%3A0x1b3b3b3b3b3b3b3b!2sAv.%20de%20la%20Rep%C3%BAblica%20Argentina%2C%2028%2C%2008023%20Barcelona!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg mt-6"
                  title="Ubicación de DIOGENIZ en Barcelona"
                  aria-label="Mapa de ubicación de DIOGENIZ"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  required
                  aria-required="true"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 px-6 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors"
                aria-label="Enviar formulario de contacto"
              >
                Enviar mensaje
                <Send size={20} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;