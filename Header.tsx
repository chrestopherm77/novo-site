import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Soluções', href: '#solutions' },
    { name: 'Como Funciona', href: '#process' }, // Updated to point to timeline
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-orange flex items-center justify-center text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(138,43,226,0.5)] transition-all">
            <Cpu size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Avexor <span className="text-brand-purple">IA</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-brand-purple after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="py-2 px-4 text-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
            Falar com Especialista
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="w-full justify-center" onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}}>
            Falar com Especialista
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;