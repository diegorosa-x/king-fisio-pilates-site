
import React from 'react';
import { Heart, Shield, Sparkles, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Atendimento Humanizado",
      desc: "Tratamos cada paciente como único, focando em suas necessidades individuais."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Profissionalismo",
      desc: "Corpo técnico altamente qualificado com mais de um ano de resultados positivos."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Ambiente Premium",
      desc: "Espaço confortável, limpo, moderno e com acessibilidade total para cadeirantes."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative reveal">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1598184273816-d8111f6d4970?auto=format&fit=crop&q=80&w=500" 
                alt="Ambiente Pilates" 
                className="rounded-2xl h-80 w-full object-cover mt-12 transition-transform duration-500 hover:scale-[1.02]"
              />
              <img 
                src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=500" 
                alt="Sessão Fisioterapia" 
                className="rounded-2xl h-80 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            {/* Absolute badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white p-8 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-2xl transition-transform duration-300 hover:scale-110">
              <span className="text-2xl font-bold font-serif">1+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Anos de Histórias</span>
            </div>
          </div>

          <div className="space-y-8 reveal" style={{ transitionDelay: '150ms' }}>
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em]">Nossa Essência</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-black leading-tight">
                Mais que uma clínica, um compromisso com sua vida.
              </h3>
              <p className="text-zinc-600 leading-relaxed text-lg">
                Na King Fisioterapia e Pilates, acreditamos que a saúde vai além da ausência de dor. Nosso foco é proporcionar uma experiência de acolhimento e cuidado humano, em um ambiente seguro e moderno em Hortolândia.
              </p>
            </div>

            <div className="space-y-6">
              {values.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-zinc-100 hover:bg-zinc-50 transition-all duration-300 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1 transition-colors duration-300 group-hover:text-black">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4 flex items-center gap-2 text-zinc-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Hortolândia – SP | Jardim do Bosque</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
