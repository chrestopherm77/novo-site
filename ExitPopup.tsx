import React, { useEffect, useState } from 'react';
import { X, Gift } from 'lucide-react';
import Button from './ui/Button';

const ExitPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasOpened) {
        setIsVisible(true);
        setHasOpened(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasOpened]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-[#0F0F0F] border-2 border-brand-purple rounded-3xl p-8 shadow-[0_0_50px_rgba(138,43,226,0.3)] animate-in zoom-in-95 duration-300">
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white mb-6 animate-bounce shadow-lg shadow-red-500/20">
            <span className="text-3xl">🎯</span>
          </div>

          <h2 className="text-3xl font-extrabold text-white mb-2">
            Espere! Não Vá Embora...
          </h2>
          <p className="text-gray-300 mb-8">
            Você está a <strong className="text-white">1 passo</strong> de transformar seu WhatsApp em uma máquina de vendas!
          </p>

          <div className="w-full border-2 border-dashed border-brand-orange/50 bg-brand-orange/5 rounded-2xl p-6 mb-8 relative">
            <div className="flex items-center justify-center gap-2 text-brand-orangeLight font-bold uppercase tracking-wide mb-2">
              <Gift size={20} />
              Bônus Especial
            </div>
            <p className="text-gray-300">
              Cadastre-se agora e ganhe uma <br/>
              <strong className="text-brand-orange text-lg">consultoria gratuita</strong> <br/>
              de 30 minutos com nossos especialistas!
            </p>
          </div>

          <Button 
            variant="primary" 
            className="w-full justify-center text-lg py-4 shadow-[0_0_20px_rgba(255,140,0,0.4)]"
            onClick={() => {
              setIsVisible(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            💎 Quero Minha Consultoria Grátis
          </Button>

          <button 
            onClick={() => setIsVisible(false)}
            className="mt-4 text-gray-600 text-sm hover:text-gray-400 underline decoration-gray-700"
          >
            Não, prefiro continuar perdendo vendas
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;