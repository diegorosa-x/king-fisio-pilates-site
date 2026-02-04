
import React from 'react';
import { Crown, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-6">
             <div className="flex items-center gap-2">
                <div className="bg-black p-1 rounded-full">
                   <Crown className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  KING <span className="font-light text-zinc-500">FISIO</span>
                </span>
             </div>
             <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
               King Fisioterapia e Pilates LTDA. Excelência e cuidado humano para sua reabilitação e bem-estar em Hortolândia.
             </p>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                   <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                   <Facebook className="w-4 h-4" />
                </a>
             </div>
          </div>

          <div>
            <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-6">Navegação</h4>
            <ul className="space-y-4">
               <li><a href="#home" className="text-sm text-zinc-500 hover:text-black transition-colors">Início</a></li>
               <li><a href="#sobre" className="text-sm text-zinc-500 hover:text-black transition-colors">Sobre Nós</a></li>
               <li><a href="#servicos" className="text-sm text-zinc-500 hover:text-black transition-colors">Especialidades</a></li>
               <li><a href="#avaliacoes" className="text-sm text-zinc-500 hover:text-black transition-colors">Avaliações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-6">Contato</h4>
            <ul className="space-y-4">
               <li className="text-sm text-zinc-500 flex gap-2">
                 <span className="font-bold text-black">WhatsApp:</span> (19) 99420-5344
               </li>
               <li className="text-sm text-zinc-500 flex gap-2">
                 <span className="font-bold text-black">Email:</span> contato@kingfisio.com.br
               </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
           <p>© {new Date().getFullYear()} King Fisioterapia e Pilates LTDA. Todos os direitos reservados.</p>
           <p className="flex items-center gap-1 uppercase tracking-widest">
             Made with <span className="text-black">♥</span> in Hortolândia
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
