import React from 'react';
import { Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-orange flex items-center justify-center text-white">
            <Cpu size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Avexor <span className="text-brand-purple">IA</span>
          </span>
        </div>

        <div className="text-gray-500 text-sm">
          © 2025 Avexor IA. Todos os direitos reservados.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Política de Privacidade</a>
          <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Termos de Serviço</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;