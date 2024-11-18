import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestra política de cookies.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-yellow-400 text-black px-6 py-2 rounded-md text-sm font-semibold whitespace-nowrap hover:bg-yellow-500 transition-colors"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;