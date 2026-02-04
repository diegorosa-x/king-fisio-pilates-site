
import React, { useState, useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      alt: "Recepção moderna e acolhedora da King Fisioterapia"
    },
    {
      url: "https://images.unsplash.com/photo-1518611012118-2969c63700b7?auto=format&fit=crop&q=80&w=800",
      alt: "Sala de Pilates completa com aparelhos novos"
    },
    {
      url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
      alt: "Consultório de atendimento individualizado"
    },
    {
      url: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=800",
      alt: "Equipamentos modernos de fisioterapia e reabilitação"
    },
    {
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
      alt: "Área de espera confortável para pacientes"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      alt: "Espaço dedicado para sessões de Quiropraxia"
    }
  ];

  // Fechar lightbox com tecla ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="galeria" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 reveal">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em]">Nosso Espaço</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-black leading-tight italic">
            Ambiente pensado para seu bem-estar
          </h3>
          <p className="text-zinc-500">
            Conheça nossa estrutura moderna em Hortolândia, projetada para oferecer o máximo de conforto e tecnologia em sua reabilitação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer overflow-hidden rounded-[2rem] reveal"
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                />
              </div>
              
              {/* Overlay suave no hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white/90 p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar galeria"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center gap-6" onClick={e => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl animate-scale-in"
            />
            <p className="text-white font-medium text-center text-lg md:text-xl font-serif italic animate-fade-in">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
