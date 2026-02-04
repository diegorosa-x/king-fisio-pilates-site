
import React from 'react';
import { Accessibility, Activity, Zap, Users, ShieldCheck, HeartPulse } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Fisioterapia Ortopédica",
      desc: "Tratamento especializado para lesões musculares, fraturas e disfunções articulares.",
      icon: <Accessibility className="w-8 h-8" />
    },
    {
      title: "Fisioterapia Esportiva",
      desc: "Foco em atletas e praticantes de atividade física, prevenindo lesões e otimizando performance.",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Pilates Clínico",
      desc: "Método que une força, flexibilidade e consciência corporal em sessões personalizadas.",
      icon: <HeartPulse className="w-8 h-8" />
    },
    {
      title: "Quiropraxia",
      desc: "Ajustes articulares para alinhamento da coluna e alívio imediato de tensões nervosas.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Reabilitação Pós-Cirúrgica",
      desc: "Protocolos seguros para recuperar sua mobilidade e força após procedimentos cirúrgicos.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Tratamento de Dores",
      desc: "Abordagem técnica para lombalgia, escoliose, artrite e dores crônicas em geral.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 reveal">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em]">Especialidades</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-black leading-tight">Soluções completas para todas as idades</h3>
          <p className="text-zinc-500">Atendimento especializado para adultos, idosos e crianças, com foco em resultados técnicos e bem-estar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-10 rounded-[2rem] border border-zinc-100 hover:border-black transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-8 p-4 w-fit rounded-2xl bg-zinc-50 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif text-black mb-4 group-hover:italic transition-all duration-300">{service.title}</h4>
              <p className="text-zinc-500 leading-relaxed mb-8">{service.desc}</p>
              <a 
                href="https://wa.me/5519994205344" 
                className="text-sm font-bold text-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all duration-300"
              >
                Saber Mais
                <div className="h-px w-8 bg-black transition-all duration-300 group-hover:w-12"></div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-black rounded-[3rem] p-8 md:p-16 text-center text-white overflow-hidden relative reveal">
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20"></div>
          <div className="relative z-10 space-y-6">
            <h4 className="text-3xl md:text-4xl font-serif">Pronto para começar sua transformação?</h4>
            <p className="text-zinc-400 max-w-2xl mx-auto">Agende uma avaliação inicial e descubra o melhor plano de tratamento para você.</p>
            <a 
              href="#agendar"
              className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-xl hover:shadow-white/5"
            >
              Agendar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
