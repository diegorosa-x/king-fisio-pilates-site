
import React from 'react';
import { CheckCircle2, CreditCard, Clock, Heart } from 'lucide-react';

const Differentials: React.FC = () => {
  const items = [
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Acessibilidade Total",
      desc: "Espaço planejado para cadeirantes e pessoas com mobilidade reduzida."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Espaço Acolhedor",
      desc: "Ambiente seguro e LGBTQ+ friendly, onde todos são bem-vindos."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Hora Marcada",
      desc: "Atendimento pontual e sem filas para respeitar seu tempo."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Pagamento Facilitado",
      desc: "Aceitamos crédito, débito e pagamento por aproximação (NFC)."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 reveal">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.3em]">Diferenciais</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight">Excelência em cada detalhe.</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {items.map((item, idx) => (
                <div key={idx} className="space-y-4 group">
                  <div className="text-zinc-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">{item.icon}</div>
                  <h4 className="text-xl font-bold transition-colors duration-300">{item.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal" style={{ transitionDelay: '200ms' }}>
            <div className="relative aspect-square bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-800 group">
               <img 
                 src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" 
                 alt="Clínica Moderna" 
                 className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
               />
               <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                 <div className="space-y-4">
                   <div className="text-6xl font-serif italic transition-transform duration-500 group-hover:scale-110">Premium</div>
                   <p className="text-zinc-400 tracking-widest uppercase text-sm">Experiência King Fisio</p>
                 </div>
               </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-zinc-800 rounded-br-[3rem] transition-all duration-500 hover:border-zinc-500"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-zinc-800 rounded-tl-[3rem] transition-all duration-500 hover:border-zinc-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
