import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Sobre Nosotros */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">DIOGENIZ</h3>
            <p className="text-gray-400 mb-4">
              Empresa especializada en limpieza y desinfección de casos de síndrome de Diógenes en Barcelona y alrededores.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Evaluación inicial
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Clasificación de enseres
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Retirada de residuos
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Desinfección profesional
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Rehabilitación de espacios
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces Útiles */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces útiles</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-2" />
                <a href="https://wa.link/0y62pb" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  690 22 09 44
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-2" />
                <a href="mailto:info@diogeniz.vercel.app" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  info@diogeniz.vercel.app
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-400 mr-2 mt-1" />
                <span className="text-gray-400">
                  Av. de la República Argentina, 28<br />
                  Gràcia, 08023 Barcelona
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} DIOGENIZ. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Política de privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Aviso legal
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Política de cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;