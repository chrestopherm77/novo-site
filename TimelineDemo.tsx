import React from 'react';
import Badge from './ui/Badge';
import { MessageCircle, Calendar, FileText, CheckCircle2, User } from 'lucide-react';

const TimelineDemo: React.FC = () => {
  const events = [
    { icon: <MessageCircle size={18} />, title: "Lead Capturado", desc: "Via WhatsApp", time: "14:00", color: "bg-blue-500" },
    { icon: <User size={18} />, title: "IA Qualificou", desc: "Interesse: Alto", time: "14:02", color: "bg-brand-purple" },
    { icon: <Calendar size={18} />, title: "Reunião Agendada", desc: "Google Meet", time: "14:05", color: "bg-brand-orange" },
    { icon: <FileText size={18} />, title: "Proposta Enviada", desc: "PDF Automático", time: "16:30", color: "bg-yellow-500" },
    { icon: <CheckCircle2 size={18} />, title: "Contrato Assinado", desc: "Cliente Fechado", time: "18:00", color: "bg-green-500" }
  ];

  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text */}
        <div className="order-1">
          <Badge>Timeline 360°</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O histórico completo do cliente, <span className="text-brand-purple">a um clique de distância</span>.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Chega de informações perdidas em planilhas e conversas de WhatsApp pessoais. Crie uma linha do tempo unificada para cada cliente, desde o primeiro "Oi" até a assinatura do contrato e pós-venda.
          </p>
        </div>

        {/* Timeline Visual */}
        <div className="order-2 relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-brand-purple/50 to-transparent"></div>
          
          <div className="space-y-8 relative">
            {events.map((event, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className={`relative z-10 w-16 h-16 rounded-2xl ${event.color} bg-opacity-10 border border-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`absolute inset-0 rounded-2xl ${event.color} opacity-20 blur-lg`}></div>
                  {event.icon}
                </div>
                
                <div className="flex-1 bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-white">{event.title}</h4>
                    <span className="text-xs text-gray-500 font-mono">{event.time}</span>
                  </div>
                  <p className="text-sm text-gray-400">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TimelineDemo;