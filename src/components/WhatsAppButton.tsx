import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.link/0y62pb"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
      aria-label="Contactar por WhatsApp"
      role="button"
      title="Contactar por WhatsApp"
    >
      <MessageCircle size={28} aria-hidden="true" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;