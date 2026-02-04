
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      text: "Profissional excelente, atencioso e humano. Senti muita diferença logo nas primeiras sessões de fisioterapia.",
      author: "Juliana Silva",
      role: "Paciente de Fisioterapia"
    },
    {
      text: "Ambiente confortável, limpo e bem cuidado. O Pilates clínico me ajudou muito com as dores na coluna.",
      author: "Marcos Oliveira",
      role: "Paciente de Pilates"
    },
    {
      text: "Resultados incríveis graças ao acompanhamento técnico. Super indico para quem busca quiropraxia de qualidade.",
      author: "Ana Beatriz",
      role: "Paciente de Quiropraxia"
    }
  ];

  return (
    <section id="avaliacoes" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 p-12 opacity-5 pointer-events-none reveal" style={{ transitionDuration: '1000ms' }}>
        <Quote className="w-64 h-64 text-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em]">Depoimentos</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-black leading-tight italic">O que nossos pacientes dizem</h3>
          </div>
          <div className="bg-zinc-50 border border-zinc-100 p-6 rounded-2xl flex items-center gap-6 transition-transform duration-300 hover:scale-105">
            <div className="text-center">
              <span className="text-3xl font-bold block">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
            </div>
            <div className="h-10 w-px bg-zinc-200"></div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider">Google Reviews</p>
              <p className="text-xs text-zinc-500">44 avaliações reais</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-50 p-10 rounded-[2.5rem] border border-transparent hover:border-zinc-200 transition-all duration-300 hover:-translate-y-1 reveal"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-black text-black" />)}
              </div>
              <p className="text-zinc-600 mb-8 italic leading-relaxed">"{review.text}"</p>
              <div className="pt-6 border-t border-zinc-200">
                <p className="font-bold text-black">{review.author}</p>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
