
import React, { useState, useEffect } from 'react';
import { Menu, X, Crown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Espaço', href: '#galeria' },
    { name: 'Agendar', href: '#agendar' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Avaliações', href: '#avaliacoes' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <div className="bg-black p-1.5 rounded-full flex items-center justify-center">
               <Crown className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight text-black`}>
              KING <span className="font-light text-zinc-500">FISIO</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-black transition-all duration-200 uppercase tracking-widest hover:-translate-y-0.5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#agendar"
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-black/10 active:scale-95"
            >
              AGENDAR ONLINE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 hover:text-black focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-black border-b border-zinc-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#agendar"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-black text-white px-6 py-4 rounded-xl font-bold active:scale-95 transition-transform"
          >
            AGENDAR ONLINE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
