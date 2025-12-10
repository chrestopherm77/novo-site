import React from 'react';
import Badge from './ui/Badge';
import { Search, PenTool, BrainCircuit, Users, Rocket } from 'lucide-react';

const ImplementationProcess: React.FC = () => {
  const steps = [
    {
      icon: <Search size={24} />,
      title: "Entendemos sua Empresa",
      description: "Análise profunda do seu modelo de negócio e necessidades."
    },
    {
      icon: <PenTool size={24} />,
      title: "Desenhamos o Atendimento",
      description: "Criação dos fluxos de conversão e tom de voz ideal."
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "Treinamos a IA",
      description: "Alimentamos o sistema com as informações do seu negócio."
    },
    {
      icon: <Users size={24} />,
      title: "Treinamos sua Equipe",
      description: "Capacitação para usar o CRM e gerenciar a IA."
    },
    {
      icon: <Rocket size={24} />,
      title: "IA no Ar Atendendo",
      description: "Go-live! Sua operação rodando no piloto automático."
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge>Processo Simples e Eficiente</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Como funciona nossa <span className="text-brand-orange">implementação</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Um método validado para colocar sua operação de IA no ar sem dor de cabeça.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-brand-purple/20 via-brand-orange/20 to-brand-purple/20"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-[#0F0F0F] border-4 border-brand-dark flex items-center justify-center relative mb-6 transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <div className={`absolute inset-0 rounded-full border border-white/10 ${index % 2 === 0 ? 'bg-brand-purple/10' : 'bg-brand-orange/10'}`}></div>
                  <div className={`${index % 2 === 0 ? 'text-brand-purpleLight' : 'text-brand-orangeLight'}`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-brand-dark font-bold flex items-center justify-center border-4 border-brand-dark">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 max-w-[200px]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcess;