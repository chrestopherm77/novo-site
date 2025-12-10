import React from 'react';
import Button from './ui/Button';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8 z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
            Sua empresa operando no <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-purpleLight drop-shadow-[0_0_15px_rgba(138,43,226,0.5)]">
              piloto automático
            </span> <br />
            com Inteligência Artificial.
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-400 max-w-xl leading-relaxed">
            Implementamos agentes de IA para um atendimento ao cliente 24/7 e estruturamos seu CRM para transformar dados em vendas. Tudo em uma única plataforma.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" icon onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Converse com nosso especialista
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('solutions')?.scrollIntoView({behavior: 'smooth'})}>
              Conheça as Soluções
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/100/100?random=${i}`} 
                  alt="User" 
                  className="w-8 h-8 rounded-full border-2 border-brand-dark"
                />
              ))}
            </div>
            <p>+500 empresas já confiam na Avexor</p>
          </div>
        </div>

        {/* Visual / Illustration */}
        <div className="relative z-10 hidden lg:block">
          {/* Abstract Glass Card Composition */}
          <div className="relative w-full h-[600px] animate-float">
            
            {/* Back Card */}
            <div className="absolute top-0 right-10 w-[80%] h-[500px] bg-brand-glass backdrop-blur-sm border border-brand-glassBorder rounded-2xl transform rotate-6 z-0" />
            
            {/* Main Dashboard Preview Card */}
            <div className="absolute top-10 right-20 w-[90%] h-[500px] bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-10 p-6 flex flex-col gap-6 overflow-hidden">
              {/* Fake Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-gray-500">Avexor Dashboard v2.0</div>
              </div>

              {/* Fake Content */}
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="h-2 w-20 bg-brand-purple/50 rounded mb-4" />
                  <div className="space-y-2">
                    <div className="h-8 w-full bg-white/5 rounded relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-[70%] bg-gradient-to-r from-brand-purple to-transparent opacity-30" />
                    </div>
                    <div className="h-8 w-full bg-white/5 rounded relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-[40%] bg-gradient-to-r from-brand-orange to-transparent opacity-30" />
                    </div>
                    <div className="h-8 w-full bg-white/5 rounded relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-[90%] bg-gradient-to-r from-brand-purple to-transparent opacity-30" />
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex flex-col justify-between">
                   <div className="h-2 w-24 bg-brand-orange/50 rounded" />
                   <div className="flex items-end gap-2 h-32 justify-between">
                      <div className="w-full bg-white/10 h-[40%] rounded-t" />
                      <div className="w-full bg-brand-purple h-[70%] rounded-t shadow-[0_0_15px_rgba(138,43,226,0.3)]" />
                      <div className="w-full bg-white/10 h-[50%] rounded-t" />
                      <div className="w-full bg-brand-orange h-[90%] rounded-t shadow-[0_0_15px_rgba(255,140,0,0.3)]" />
                   </div>
                </div>
                <div className="col-span-2 bg-white/5 rounded-lg p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                        <Play size={20} fill="currentColor" />
                    </div>
                    <div>
                        <div className="text-sm text-gray-300">Novo Lead Qualificado</div>
                        <div className="text-xs text-gray-500">há 2 minutos via WhatsApp</div>
                    </div>
                </div>
              </div>
            </div>

            {/* Floating Notification Badge */}
            <div className="absolute top-[20%] right-[0%] bg-brand-dark/90 backdrop-blur-md border border-brand-purple/50 p-4 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20 flex items-center gap-3 animate-pulse-slow">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div>
                <div className="text-white text-sm font-bold">IA Ativa</div>
                <div className="text-brand-purpleLight text-xs">Processando leads...</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;