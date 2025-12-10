import React from 'react';
import { Bot, Columns, Network, TrendingUp, Cog } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Bot size={32} className="text-brand-purple" />,
      title: "Agentes de IA 24/7",
      description: "Atendimento imediato, humano e capaz de agendar reuniões enquanto você dorme."
    },
    {
      icon: <Columns size={32} className="text-brand-orange" />,
      title: "CRM Visual",
      description: "Pipeline Kanban intuitivo para gestão completa do ciclo de vendas."
    },
    {
      icon: <Network size={32} className="text-blue-500" />,
      title: "Integração Total",
      description: "Conecte WhatsApp, Instagram, E-mail e Site em um único fluxo unificado."
    },
    {
      icon: <TrendingUp size={32} className="text-green-500" />,
      title: "Foco em Conversão",
      description: "Ferramentas projetadas para maximizar taxas de venda e qualificação de leads."
    },
    {
      icon: <Cog size={32} className="text-pink-500" />,
      title: "Automação",
      description: "Elimine tarefas repetitivas e deixe sua equipe focar em fechar negócios."
    }
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-purple/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 cursor-default"
            >
              <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;