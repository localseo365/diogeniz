import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 bg-black text-yellow-400 p-3 rounded-full shadow-lg hover:bg-gray-900 transition-colors z-40"
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      <ArrowUp size={24} aria-hidden="true" />
      <span className="sr-only">Volver arriba</span>
    </button>
  );
};

export default BackToTopButton;