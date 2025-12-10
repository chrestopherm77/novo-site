import React from 'react';
import Badge from './ui/Badge';
import { MoreHorizontal, Calendar, DollarSign, Plus, Search, Filter } from 'lucide-react';

const KanbanDemo: React.FC = () => {
  const columns = [
    {
      title: "Novos Leads",
      color: "bg-blue-500",
      count: 12,
      cards: [
        { title: "Empresa Solar Tech", value: "R$ 45.000", tag: "WhatsApp", time: "10 min" },
        { title: "Construtora ABC", value: "R$ 120.000", tag: "Site", time: "2h" },
        { title: "Moda & Estilo", value: "R$ 8.500", tag: "Instagram", time: "4h" },
        { title: "Consultório Dr. André", value: "R$ 15.000", tag: "Site", time: "5h" },
        { title: "Restaurante Sabor", value: "R$ 3.000", tag: "WhatsApp", time: "1 dia" },
        { title: "Imobiliária Prime", value: "R$ 220.000", tag: "Indicação", time: "1 dia" },
      ]
    },
    {
      title: "Em Negociação",
      color: "bg-brand-orange",
      count: 5,
      cards: [
        { title: "Varejo Express", value: "R$ 15.000", tag: "Instagram", time: "1 dia" },
        { title: "Auto Peças Sul", value: "R$ 12.000", tag: "WhatsApp", time: "2 dias" },
        { title: "Academia Fit", value: "R$ 6.800", tag: "Site", time: "2 dias" },
        { title: "Café Colonial", value: "R$ 4.200", tag: "WhatsApp", time: "3 dias" },
      ]
    },
    {
      title: "Fechamento",
      color: "bg-brand-purple",
      count: 8,
      cards: [
        { title: "Global Logistics", value: "R$ 80.000", tag: "Indicação", time: "3 dias" },
        { title: "Tech Startup", value: "R$ 32.000", tag: "Linkedin", time: "4 dias" },
        { title: "Clínica Vida", value: "R$ 45.000", tag: "Site", time: "5 dias" },
        { title: "Escola Aprender", value: "R$ 18.000", tag: "Email", time: "1 sem" },
        { title: "Móveis Planejados", value: "R$ 55.000", tag: "Instagram", time: "1 sem" },
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#080808] relative">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        <div className="text-center max-w-3xl mb-16">
          <Badge>Gestão Visual Completa</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Seu pipeline de vendas <span className="text-brand-orange">organizado e visível</span> em uma única tela.
          </h2>
          <p className="text-gray-400 text-lg">
            Centralize leads de todos os seus canais (site, redes sociais, WhatsApp) em um pipeline Kanban. Acompanhe cada etapa da negociação em tempo real.
          </p>
        </div>

        {/* Kanban Board Visual */}
        <div className="w-full max-w-6xl p-4 md:p-6 bg-brand-glass backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
          
          {/* Simulated App Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-white/5 pb-4 gap-4">
            <div className="flex items-center gap-3">
               <h3 className="text-white font-bold text-lg tracking-tight">Pipeline Principal</h3>
               <span className="bg-white/5 text-gray-400 text-[10px] px-2 py-1 rounded-full">v2.4</span>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
                <div className="hidden sm:flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-gray-400 text-xs border border-white/5 flex-1 md:flex-none">
                    <Search size={14} />
                    <span className="opacity-50">Buscar lead...</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-gray-400 text-xs border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                    <Filter size={14} />
                    <span className="hidden sm:inline">Filtros</span>
                </div>
                <button className="bg-brand-purple hover:bg-brand-purpleLight text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-all cursor-default shadow-[0_0_15px_rgba(138,43,226,0.2)]">
                    <Plus size={16} />
                    Nova Negociação
                </button>
            </div>
          </div>

          <div className="flex gap-4 min-w-[800px] overflow-x-auto pb-4">
            {columns.map((col, idx) => (
              <div key={idx} className="flex-1 min-w-[280px] bg-white/[0.02] rounded-xl p-3 flex flex-col gap-3 border border-white/5">
                {/* Column Header */}
                <div className="flex justify-between items-center mb-1 px-1">
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                    <span className="font-semibold text-gray-200 text-sm">{col.title}</span>
                    <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-gray-400 font-mono">{col.count}</span>
                  </div>
                  <MoreHorizontal size={14} className="text-gray-600 hover:text-white cursor-pointer" />
                </div>

                {/* Cards Container - Scrollable */}
                <div className="flex flex-col gap-3 h-[500px] overflow-y-auto custom-scrollbar pr-1">
                  {col.cards.map((card, cIdx) => (
                    <div key={cIdx} className="bg-[#121212] border border-white/5 p-3 rounded-lg hover:border-brand-purple/50 transition-all cursor-pointer group shadow-sm hover:shadow-lg hover:bg-[#161616]">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5 group-hover:text-white group-hover:bg-brand-purple/20 group-hover:border-brand-purple/20 transition-colors">{card.tag}</span>
                        <MoreHorizontal size={12} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-bold text-gray-200 text-sm mb-1 leading-snug">{card.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-brand-orangeLight font-medium mb-2">
                        <DollarSign size={10} />
                        {card.value}
                      </div>
                      <div className="flex items-center justify-between border-t border-white/5 pt-2 mt-1">
                        <div className="flex -space-x-1.5">
                          <img src={`https://picsum.photos/24/24?random=${cIdx + idx * 10}`} className="w-5 h-5 rounded-full border border-[#121212]" alt="rep" />
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-gray-600 font-medium">
                          <Calendar size={10} />
                          {card.time}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Drag placeholder */}
                  <div className="h-16 border border-dashed border-white/5 rounded-lg flex items-center justify-center text-gray-700 text-[10px] uppercase tracking-wider font-medium opacity-50 hover:opacity-100 transition-opacity cursor-default">
                    + Arraste para mover
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default KanbanDemo;