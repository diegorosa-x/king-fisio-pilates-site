
import React from 'react';
import { Star, ArrowRight, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FBFBFB]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-zinc-100 shadow-sm animate-google-attention">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-zinc-600 uppercase tracking-tighter">
                ⭐ 5.0 no Google | 44 avaliações reais
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-black leading-tight">
              Sua saúde em <br />
              <span className="italic">melhores mãos.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 max-w-lg leading-relaxed">
              Fisioterapia, Pilates e Quiropraxia com foco em resultados reais. Te ajudamos a ter mais saúde, bem-estar e qualidade de vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#agendar"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-black/20"
              >
                Agendar Online
                <Calendar className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5519994205344"
                className="inline-flex items-center justify-center gap-2 bg-white text-black border border-zinc-200 px-8 py-4 rounded-full font-bold hover:bg-zinc-50 transition-all"
              >
                Fale no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                alt="Clínica King Fisioterapia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-white text-sm font-medium italic">"Atendimento humanizado e especializado para todas as idades."</p>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 hidden lg:block bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-zinc-100">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                    <Crown className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black uppercase tracking-widest">King Fisio</p>
                    <p className="text-xs text-zinc-400">Desde 2023 em Hortolândia</p>
                  </div>
               </div>
               <p className="text-zinc-600 text-sm italic">Onde o cuidado humano encontra a excelência técnica.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple Icon component to use Crown locally in this file
const Crown: React.FC<{className?: string}> = ({className}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
  </svg>
);

export default Hero;
