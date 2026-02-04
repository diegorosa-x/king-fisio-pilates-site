
import React from 'react';
import { MapPin, Clock, Instagram } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-10 reveal">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em]">Onde Estamos</h2>
              <h3 className="text-4xl font-serif text-black italic">Visite nossa clínica em Hortolândia</h3>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-black transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-black uppercase tracking-wider text-sm">Endereço</p>
                  <p className="text-zinc-500 text-sm mt-1 transition-colors duration-200 group-hover:text-zinc-800">
                    Rua Terezinha Navarro da Silva<br />
                    Jardim do Bosque<br />
                    Hortolândia – SP | CEP 13186-241
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-black transition-transform duration-300 group-hover:scale-110">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-black uppercase tracking-wider text-sm">Funcionamento</p>
                  <p className="text-zinc-500 text-sm mt-1 transition-colors duration-200 group-hover:text-zinc-800">
                    Segunda a Sexta<br />
                    A partir das 6:00h da manhã
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-black transition-transform duration-300 group-hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-black uppercase tracking-wider text-sm">Social</p>
                  <a 
                    href="https://instagram.com/kingfisiopilates" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-500 text-sm mt-1 hover:text-black transition-colors inline-block"
                  >
                    @kingfisiopilates
                  </a>
                </div>
              </div>
            </div>
            
            <a 
               href="https://www.google.com/maps/dir/?api=1&destination=Rua+Terezinha+Navarro+da+Silva+Hortolandia+SP"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:gap-4 transition-all duration-300 active:scale-95"
            >
              Ver no Google Maps
            </a>
          </div>

          <div className="lg:col-span-2 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100 grayscale hover:grayscale-0 transition-all duration-700 hover:shadow-zinc-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14704.591244469793!2d-47.21406454792706!3d-22.871908902509534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b919d7d4f93f%3A0x6b829671f11c5211!2sHortol%C3%A2ndia%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1709141042000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
