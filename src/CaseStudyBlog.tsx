import React from 'react';

export default function CaseStudyBlog() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-20">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <div className="inline-block mb-6 px-4 py-2 border border-[#00D9FF] rounded-full">
            <span className="text-[#00D9FF] text-sm font-medium">CASE STUDY REAL</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Como Gerar R$ 60k em 90 Dias em Clínica de Mesoterapia
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            De R$ 5 mil em faturamento mensal para R$ 65 mil. Em apenas 90 dias, investindo menos de R$ 12 mil em anúncios.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <p className="text-lg text-gray-300 mb-4">
          Esse não é um número inventado. Esse é o resultado real de uma clínica de mesoterapia em Brasília que trabalhou comigo usando a metodologia Full Stack de Marketing.
        </p>
      </div>

      {/* Section: Situação Inicial */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-white">A Situação Inicial: Problema Comum</h2>
        
        <div className="space-y-4 mb-8">
          {['Anúncios que não geravam leads qualificados', 'Muita concorrência e pouca diferenciação', 'Scripts de atendimento genéricos', 'Perfil do Instagram desalinhado com a estratégia', 'Faturamento preso em R$ 5 mil/mês'].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-[#00D9FF] text-xl mt-1">✗</span>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-300">
          Esse é o problema que 90% das clínicas de mesoterapia enfrentam. Não é falta de mercado. É falta de <span className="text-white font-bold">estratégia estruturada</span>.
        </p>
      </div>

      {/* Section: O Que Mudou */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-white">O Que Mudou: Full Stack de Marketing</h2>
        
        <p className="text-gray-300 mb-8">Não foi apenas "botar dinheiro em anúncio". Isso gera tráfego morto, não conversão.</p>
        
        <div className="space-y-8">
          {[
            {
              num: '1',
              title: 'Análise Real dos Concorrentes',
              desc: 'Investigamos quais anúncios estavam dando resultado no mercado. Descobrimos o padrão de copy, visual, direcionamento e oferta que mais vendia.'
            },
            {
              num: '2',
              title: 'Copy que Toca na Dor Real',
              desc: '90% dos anúncios falam sobre técnica. Ninguém quer isso. Homem com queda quer validação, confiança, presença. Taxa de clique +340%.'
            },
            {
              num: '3',
              title: 'Scripts de WhatsApp Otimizados',
              desc: 'Leads chegavam, mas conversão era baixa. Adaptamos para responder objeções, criar urgência e qualificar em 3 mensagens. Conversão +250%.'
            },
            {
              num: '4',
              title: 'Instagram Alinhado com Estratégia',
              desc: 'Estruturamos com antes/depois em alta qualidade, depoimentos de pacientes, stories do dia a dia e reels educativos. Engagement +180%.'
            }
          ].map((item, i) => (
            <div key={i} className="border border-[#00D9FF]/30 rounded-lg p-6 bg-[#252525]">
              <div className="flex gap-4">
                <div className="min-w-fit">
                  <div className="w-12 h-12 rounded-full bg-[#00D9FF] flex items-center justify-center text-black font-bold text-lg">
                    {item.num}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Números */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-white">Os Números: O Que Realmente Importa</h2>
        
        <p className="text-gray-300 mb-8">Aqui estão os números <span className="font-bold">reais</span> que geramos em 90 dias:</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#00D9FF]/30">
                <th className="text-left py-4 px-4 text-[#00D9FF] font-bold">Métrica</th>
                <th className="text-left py-4 px-4 text-[#00D9FF] font-bold">Antes</th>
                <th className="text-left py-4 px-4 text-[#00D9FF] font-bold">Depois (90 dias)</th>
                <th className="text-left py-4 px-4 text-[#00D9FF] font-bold">Crescimento</th>
              </tr>
            </thead>
            <tbody>
              {[
                { metric: 'Faturamento Mensal', before: 'R$ 5.000', after: 'R$ 65.000', growth: '+1200%' },
                { metric: 'Leads/Mês', before: '~30', after: '~200+', growth: '+566%' },
                { metric: 'Conversão de Leads', before: '5%', after: '18%', growth: '+360%' },
                { metric: 'ROI do Anúncio', before: '2:1', after: '5:1', growth: '+150%' }
              ].map((row, i) => (
                <tr key={i} className="border-b border-[#00D9FF]/10 hover:bg-[#252525]/50">
                  <td className="py-4 px-4 text-white font-medium">{row.metric}</td>
                  <td className="py-4 px-4 text-gray-300">{row.before}</td>
                  <td className="py-4 px-4 text-gray-300">{row.after}</td>
                  <td className="py-4 px-4 text-[#00D9FF] font-bold">{row.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-lg">
          <p className="text-white font-bold">Lucro gerado em 90 dias: R$ 60.000+</p>
          <p className="text-gray-300">(investimento em anúncios: R$ 12.000)</p>
        </div>
      </div>

      {/* Section: Por Que Funciona */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-white">Por Que Funciona Essa Estratégia</h2>
        
        <p className="text-gray-300 mb-6">
          Não é mágica. É <span className="font-bold">estrutura + dados + psicologia</span>.
        </p>

        <p className="text-gray-300 mb-8">
          A maioria das agências oferece apenas "gestão de tráfego". Eles botam dinheiro em anúncio e veem o que sobrevive. É aleatório.
        </p>

        <p className="text-gray-300 mb-8">Nós fazemos diferente:</p>

        <div className="space-y-3">
          {[
            'Estudamos o que funciona no mercado real (anúncios dos competidores que estão investindo 10k+/mês)',
            'Estruturamos a copy tocando na dor psicológica real (não na técnica médica)',
            'Otimizamos o pipeline inteiro (Instagram, WhatsApp, follow-up)',
            'Testamos, medimos e escalamos o que funciona'
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-[#00D9FF] mt-1">✓</span>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Melhor Parte */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="border-l-4 border-[#00D9FF] pl-6 py-4">
          <h3 className="text-2xl font-bold text-white mb-4">E o Melhor Parte?</h3>
          <p className="text-gray-300 mb-4">
            Minha cliente <span className="font-bold">não tem contrato</span> comigo. Se o resultado parar, ela sai. Mas os resultados continuam chegando mês após mês porque a estrutura foi montada certa.
          </p>
          <p className="text-gray-300">
            Ela recebeu consultoria completa, entendeu o processo, mas percebeu que sozinha não conseguiria manter o nível de resultado que entrego. Então continua comigo — não por contrato, mas por resultar.
          </p>
        </div>
      </div>

      {/* Section: CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Você Quer o Mesmo para Sua Clínica?</h2>
        
        <p className="text-gray-300 mb-8 text-lg">
          Se você é dono de clínica de mesoterapia e está faturando entre R$ 5 mil e R$ 30 mil/mês, essa estratégia pode multiplicar seus resultados.
        </p>

        <p className="text-gray-300 mb-12 text-lg">
          Não é para todo mundo. Porque exige investimento em anúncios (mínimo R$ 1.500/mês) + meu serviço (R$ 1.500/mês).
        </p>

        <button className="bg-[#00D9FF] text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-[#00C4E0] transition">
          Reserve sua call de análise gratuita →
        </button>
      </div>

      {/* Section: FAQ */}
      <div className="max-w-4xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold mb-12 text-white">Perguntas Comuns</h2>
        
        <div className="space-y-6">
          {[
            {
              q: 'Quanto tempo leva para ver resultado?',
              a: 'Primeira semana você já tem leads chegando. Conversão real e faturamento acontece semana 2-3. Escalação continua nos 90 dias.'
            },
            {
              q: 'E se meu mercado é diferente?',
              a: 'Essa estratégia funciona em todo Brasil. A psicologia do homem com queda de cabelo é a mesma. O que muda é o investimento em anúncio.'
            },
            {
              q: 'Qual é o investimento mínimo em anúncios?',
              a: 'R$ 1.500/mês. Abaixo disso, não conseguimos testar propriamente. Acima disso, escalamos.'
            },
            {
              q: 'Por que vocês não usam contrato?',
              a: 'Porque temos confiança no resultado. Se não gerar resultado, você sai. Simples assim.'
            }
          ].map((faq, i) => (
            <div key={i} className="border border-[#00D9FF]/30 rounded-lg p-6 bg-[#252525]">
              <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
              <p className="text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
