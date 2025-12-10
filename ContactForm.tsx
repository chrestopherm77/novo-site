import React from 'react';
import Button from './ui/Button';
import { CheckCircle2, MessageSquare } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-brand-purple/10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Content */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-brand-purple/5 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-brand-orange"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para automatizar sua empresa?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Agende uma demonstração personalizada e descubra quanto tempo e dinheiro a Avexor pode economizar para o seu negócio.
            </p>

            <ul className="space-y-4">
              {[
                "Agentes de IA Personalizados",
                "CRM Visual Completo",
                "Integração WhatsApp Oficial (API)",
                "Treinamento e Suporte Dedicado"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-orange shrink-0" size={24} />
                  <span className="text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Form */}
          <div className="lg:w-1/2 p-10 lg:p-16 bg-[#0F0F0F]">
            <h3 className="text-2xl font-bold text-white mb-6">Converse com nosso especialista</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors"
                  placeholder="João Silva"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">E-mail</label>
                <input 
                  type="email" 
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors"
                  placeholder="joao@suaempresa.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
                <input 
                  type="tel" 
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Funcionários</label>
                  <select className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors appearance-none">
                    <option value="">Selecione</option>
                    <option value="1-5">1-5</option>
                    <option value="6-20">6-20</option>
                    <option value="21-50">21-50</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-400 mb-2">Faturamento Mensal</label>
                   <select className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors appearance-none">
                    <option value="">Selecione</option>
                    <option value="ate-50k">Até R$ 50k</option>
                    <option value="50k-200k">R$ 50k - R$ 200k</option>
                    <option value="200k-1m">R$ 200k - R$ 1M</option>
                    <option value="1m+">Acima de R$ 1M</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <Button variant="green" className="w-full justify-center text-lg uppercase tracking-wide py-4">
                  Converse com nosso especialista
                </Button>
                
                <a 
                  href="https://wa.me/3196274589" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-brand-orange hover:text-brand-orangeLight transition-colors font-medium w-full py-2"
                >
                  <MessageSquare size={18} />
                  Chamar agente no WhatsApp
                </a>
              </div>
              
              <p className="text-xs text-center text-gray-500 mt-2">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;