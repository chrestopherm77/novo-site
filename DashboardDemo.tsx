import React from 'react';
import Badge from './ui/Badge';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
  { name: 'Seg', leads: 40, vendas: 24 },
  { name: 'Ter', leads: 30, vendas: 13 },
  { name: 'Qua', leads: 20, vendas: 38 },
  { name: 'Qui', leads: 27, vendas: 39 },
  { name: 'Sex', leads: 68, vendas: 48 },
  { name: 'Sab', leads: 23, vendas: 38 },
  { name: 'Dom', leads: 34, vendas: 43 },
];

const channelData = [
  { name: 'WhatsApp', value: 400 },
  { name: 'Site', value: 300 },
  { name: 'Insta', value: 300 },
  { name: 'Email', value: 200 },
];

const DashboardDemo: React.FC = () => {
  return (
    <section id="dashboard" className="py-24 bg-[#050505] relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge>Resultados Comprovados</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Acompanhe o <span className="text-brand-purpleLight">crescimento das suas vendas</span> em tempo real.
          </h2>
          <p className="text-gray-400 text-lg">
            Visualize o impacto imediato da automação no seu faturamento e volume de leads. Aumente sua conversão sem aumentar a equipe.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-brand-glass backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Evolução de Conversão</h3>
              <select className="bg-black/50 border border-white/10 text-xs text-gray-300 rounded px-2 py-1 outline-none">
                <option>Últimos 7 dias</option>
                <option>Últimos 30 dias</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8A2BE2" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8A2BE2" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF8C00" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FF8C00" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="name" stroke="#666" tick={{fontSize: 12}} />
                  <YAxis stroke="#666" tick={{fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px'}}
                    itemStyle={{color: '#fff'}}
                  />
                  <Area type="monotone" dataKey="leads" stroke="#8A2BE2" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" name="Leads Totais" />
                  <Area type="monotone" dataKey="vendas" stroke="#FF8C00" strokeWidth={3} fillOpacity={1} fill="url(#colorVendas)" name="Vendas Realizadas" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* KPI Cards & Secondary Chart */}
          <div className="flex flex-col gap-6">
            {/* KPI 1 */}
            <div className="bg-brand-glass border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-20 h-20 bg-brand-purple rounded-full blur-2xl"></div>
              </div>
              <p className="text-gray-400 text-sm font-medium mb-1">Novos Leads (Mês)</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">1,248</span>
                <span className="text-green-500 text-sm font-bold">+12% ↗</span>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="bg-brand-glass border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
               <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-20 h-20 bg-brand-orange rounded-full blur-2xl"></div>
              </div>
              <p className="text-gray-400 text-sm font-medium mb-1">Taxa de Conversão</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">4.8%</span>
                <span className="text-green-500 text-sm font-bold">+0.5% ↗</span>
              </div>
            </div>

             {/* Bar Chart */}
             <div className="flex-1 bg-brand-glass border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-white mb-4">Origem das Vendas</h3>
                <div className="h-[120px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={channelData}>
                      <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px', fontSize: '12px'}}
                      />
                      <Bar dataKey="value" fill="#8A2BE2" radius={[4, 4, 0, 0]} name="Volume" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardDemo;