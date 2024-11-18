import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Inicio', href: '#inicio' },
    { title: 'Servicios', href: '#servicios' },
    { title: 'Galería', href: '#galeria' },
    { title: 'Testimonios', href: '#testimonios' },
    { title: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed w-full bg-black/95 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-yellow-400 text-2xl">
            DIOGENIZ
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="hover:text-yellow-400 transition-colors px-3 py-2"
                >
                  {item.title}
                </a>
              ))}
              <a
                href="tel:690220944"
                className="bg-yellow-400 text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-500 transition-colors"
              >
                <Phone size={18} />
                690 22 09 44
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block px-3 py-2 hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <a
              href="tel:690220944"
              className="block bg-yellow-400 text-black px-4 py-2 rounded-md text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="inline-block mr-2" size={18} />
              690 22 09 44
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;