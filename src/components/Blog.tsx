import React, { useState } from 'react';

export default function Blog() {
  const [tab, setTab] = useState('blog');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        {tab === 'blog' ? (
          <>
            <h1 className="text-5xl font-bold mb-6">Como Gerar R$ 60k em 90 Dias</h1>
            <p className="text-xl text-gray-300 mb-12">De R$ 5 mil para R$ 65 mil em 90 dias com estratégia Full Stack de Marketing.</p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">A Situação Inicial</h2>
                <p className="text-gray-300 mb-4">Esse é o resultado real de uma clínica em Brasília que trabalhou comigo.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Os Números</h2>
                <div className="bg-[#252525] p-6 rounded-lg border border-[#00D9FF]/30">
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-gray-400">Faturamento</p><p className="text-2xl font-bold">R$ 5k → R$ 65k</p></div>
                    <div><p className="text-gray-400">Leads</p><p className="text-2xl font-bold">~30 → ~200+</p></div>
                    <div><p className="text-gray-400">Conversão</p><p className="text-2xl font-bold">5% → 18%</p></div>
                    <div><p className="text-gray-400">ROI</p><p className="text-2xl font-bold">2:1 → 5:1</p></div>
                  </div>
                </div>
              </div>

              <button className="bg-[#00D9FF] text-black font-bold py-4 px-8 rounded-full text-lg w-full hover:bg-[#00C4E0]">
                AGENDAR REUNIÃO (20 MINUTOS) →
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-5xl font-bold mb-6">Perguntas Frequentes</h1>
            <div className="space-y-4">
              {[
                { q: 'Quanto custa?', a: 'R$ 1.500/mês' },
                { q: 'Por que sem contrato?', a: 'Confiança no resultado' },
                { q: 'Quanto tempo para resultado?', a: '1-3 semanas' },
                { q: 'Qual ROI?', a: '5:1 em média' },
                { q: 'Funciona em minha cidade?', a: 'Sim, em todo Brasil' },
                { q: 'Por que você é diferente?', a: 'Especialista em mesoterapia capilar' }
              ].map((faq, i) => (
                <div key={i} className="border border-[#00D9FF]/30 rounded-lg bg-[#252525]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-6 flex justify-between items-center hover:bg-[#2a2a2a]"
                  >
                    <h3 className="font-bold text-white">{faq.q}</h3>
                    <span className="text-[#00D9FF]">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && <div className="px-6 pb-6 border-t border-[#00D9FF]/20 text-gray-300">{faq.a}</div>}
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-12 flex gap-4">
          <button
            onClick={() => setTab('blog')}
            className={`px-6 py-3 rounded-full font-bold ${tab === 'blog' ? 'bg-[#00D9FF] text-black' : 'border border-[#00D9FF] text-[#00D9FF]'}`}
          >
            Case Study
          </button>
          <button
            onClick={() => setTab('faq')}
            className={`px-6 py-3 rounded-full font-bold ${tab === 'faq' ? 'bg-[#00D9FF] text-black' : 'border border-[#00D9FF] text-[#00D9FF]'}`}
          >
            FAQ
          </button>
        </div>
      </div>
    </div>
  );
}
