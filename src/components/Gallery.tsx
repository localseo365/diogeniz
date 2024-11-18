import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const images = [
    {
      url: 'https://nord-nettoyage.com/wp-content/uploads/2019/03/syndrome-diogene.jpg',
      title: 'Caso de Diógenes en Barcelona',
      width: 800,
      height: 600,
      alt: 'Antes y después de limpieza de caso de Diógenes en Barcelona'
    },
    {
      url: 'https://www.acor-clean.fr/msmedias/homepage/Syndrome-de-Diogene.jpg',
      title: 'Vivienda con Diógenes en Hospitalet',
      width: 1200,
      height: 800,
      alt: 'Proceso de limpieza de vivienda afectada por síndrome de Diógenes en Hospitalet'
    },
    {
      url: 'https://france3-regions.francetvinfo.fr/image/JC_w-0Nd-FgWkXPLxl9Dt-RnP14/1200x675/regions/2023/02/06/63e118163c0db_180366617-809733199750873-1264245671203167395-n.jpg',
      title: 'Proceso de Diógenes en Badalona',
      width: 1200,
      height: 675,
      alt: 'Resultado de limpieza profesional en caso de Diógenes en Badalona'
    },
    {
      url: 'https://nord-nettoyage.com/wp-content/uploads/2019/09/proprete-syndrome-diogene-1024x768.jpg',
      title: 'Vaciado por Diógenes en Terrassa',
      width: 1024,
      height: 768,
      alt: 'Servicio de vaciado y limpieza en caso de síndrome de Diógenes en Terrassa'
    },
  ];

  useEffect(() => {
    const preloadImages = () => {
      images.forEach(image => {
        const img = new Image();
        img.src = image.url;
        img.onload = () => {
          setLoadedImages(prev => [...prev, image.url]);
        };
      });
    };
    preloadImages();
  }, []);

  return (
    <section id="galeria" className="py-20 bg-black" aria-label="Galería de proyectos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Galería de Proyectos
          </h2>
          <p className="text-xl text-gray-400">
            Transformaciones reales, resultados excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
              role="listitem"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(image.url);
                }
              }}
              aria-label={image.title}
            >
              {loadedImages.includes(image.url) ? (
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-80 object-cover rounded-lg"
                  width={image.width}
                  height={image.height}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              ) : (
                <div className="w-full h-80 bg-gray-800 rounded-lg animate-pulse" role="presentation" />
              )}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <p className="text-white text-xl font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-yellow-400"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar imagen"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt={images.find(img => img.url === selectedImage)?.alt}
            className="max-w-full max-h-[90vh] object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;