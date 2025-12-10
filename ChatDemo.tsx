import React, { useEffect, useState } from 'react';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { Send, CheckCheck } from 'lucide-react';

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Array<{id: number, type: 'user' | 'bot', text: string, time: string}>>([]);
  
  const conversation = [
    { id: 1, type: 'user', text: "Olá, gostaria de um orçamento para a consultoria empresarial.", time: "23:01" },
    { id: 2, type: 'bot', text: "Olá! Sou a IA da Avexor. Que ótimo ter você por aqui. Para qual tamanho de empresa seria a consultoria?", time: "23:01" },
    { id: 3, type: 'user', text: "Temos cerca de 50 funcionários.", time: "23:02" },
    { id: 4, type: 'bot', text: "Perfeito. Para empresas desse porte, temos um plano de otimização de processos que reduz custos em até 30%. Gostaria de agendar uma breve demonstração com nosso especialista amanhã às 10h?", time: "23:02" },
    { id: 5, type: 'user', text: "Sim, seria ótimo!", time: "23:03" },
    { id: 6, type: 'bot', text: "Agendado! Enviarei o convite para seu e-mail agora mesmo. 🚀", time: "23:03" }
  ];

  // Animation simulation loop
  useEffect(() => {
    let timeoutIds: ReturnType<typeof setTimeout>[] = [];
    
    const runAnimation = () => {
      setMessages([]);
      let delay = 0;
      
      conversation.forEach((msg, index) => {
        delay += index === 0 ? 500 : (msg.type === 'bot' ? 1500 : 1000);
        const id = setTimeout(() => {
          setMessages(prev => [...prev, msg as any]);
        }, delay);
        timeoutIds.push(id);
      });
      
      const resetId = setTimeout(runAnimation, delay + 4000); // Restart loop
      timeoutIds.push(resetId);
    };

    runAnimation();

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <Badge>Atendimento Inteligente</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Um agente de IA que <span className="text-brand-purple">entende, qualifica e converte</span> seus clientes.
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Imagine um lead chegando às 23h de um domingo. Nossa IA responde instantaneamente, qualifica o interesse, tira dúvidas complexas e agenda uma reunião diretamente no CRM da sua equipe.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Qualificação automática de leads em tempo real",
              "Agendamento direto na Google Agenda / Outlook",
              "Atendimento 24/7 em Português, Inglês e Espanhol"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center">
                  <CheckCheck size={14} className="text-brand-purple" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
            Ativar meu Agente IA
          </Button>
        </div>

        {/* Phone Mockup */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-[320px] md:w-[350px] h-[650px] bg-black border-[8px] border-neutral-800 rounded-[3rem] shadow-[0_0_50px_rgba(138,43,226,0.2)] overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 w-full h-8 bg-neutral-900 z-20 flex justify-between px-6 items-center text-[10px] text-white">
              <span>23:03</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Chat Header */}
            <div className="absolute top-8 w-full h-16 bg-neutral-900 border-b border-white/5 flex items-center px-4 gap-3 z-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-purpleLight p-0.5">
                <img src="https://picsum.photos/200/200" alt="Avatar" className="w-full h-full rounded-full border-2 border-black object-cover" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Agente Avexor</div>
                <div className="text-brand-purpleLight text-xs">Online agora</div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="absolute top-24 bottom-16 w-full overflow-y-auto p-4 space-y-4 bg-[#0d0d0d] custom-scrollbar">
               {messages.map((msg, idx) => (
                 <div key={`${msg.id}-${idx}`} className={`flex w-full ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                   <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed relative ${
                     msg.type === 'user' 
                       ? 'bg-neutral-800 text-gray-200 rounded-tr-none' 
                       : 'bg-brand-purple/20 text-white border border-brand-purple/20 rounded-tl-none'
                   }`}>
                     {msg.text}
                     <div className="text-[10px] opacity-50 text-right mt-1 flex justify-end gap-1">
                       {msg.time} {msg.type === 'user' && <CheckCheck size={12} className="text-blue-400" />}
                     </div>
                   </div>
                 </div>
               ))}
               {messages.length < conversation.length && messages[messages.length - 1]?.type === 'user' && (
                 <div className="flex justify-start animate-pulse">
                   <div className="bg-neutral-900 p-3 rounded-2xl rounded-tl-none border border-white/5">
                     <div className="flex gap-1">
                       <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                       <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100" />
                       <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200" />
                     </div>
                   </div>
                 </div>
               )}
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 w-full h-16 bg-neutral-900 px-4 flex items-center gap-2">
              <div className="flex-1 h-10 bg-neutral-800 rounded-full px-4 text-xs flex items-center text-gray-500">
                Digite uma mensagem...
              </div>
              <div className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center text-white">
                <Send size={18} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ChatDemo;