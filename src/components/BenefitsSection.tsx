import { Eye, BarChart3, Zap, Target, CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Análise Real dos Seus Concorrentes",
      description: "Vou investigar ao vivo quais são os 3 anúncios que mais estão gerando vendas dos seus concorrentes locais — e você vai ver exatamente por que funcionam.",
    },
    {
      icon: BarChart3,
      title: "Auditoria Completa do Seu Negócio",
      description: "Análise profunda de toda sua estrutura, posicionamento de marca e estratégia atual. Vou apontar os gaps que estão custando dinheiro pra você.",
    },
    {
      icon: Zap,
      title: "As 3 Mudanças que Mudam Tudo",
      description: "Vou te dar as 3 principais sugestões de adaptações que, se você aplicar HOJE, é matematicamente impossível não ter resultados expressivos em apenas 1 SEMANA.",
    },
    {
      icon: Target,
      title: "Os Anúncios que Geraram R$ 25K+",
      description: "Vou te mostrar, EM TEMPO REAL, os exatos anúncios que minha cliente usou para faturar mais de R$ 25 mil em menos de 60 dias — e como você pode adaptar a mesma fórmula para seu negócio.",
    },
    {
      icon: CheckCircle,
      title: "Implementação Pronta para Clicar",
      description: "Não é teoria. Tudo que você vai ver é prático, testado e pronto para aplicar.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#05CCEB] mb-4">
            O que você vai receber na call comigo
          </h2>
          <p className="text-xl text-white">
            Tudo que você precisa para transformar seus resultados em uma única reunião
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="mb-4 inline-block p-3 bg-gradient-to-br from-[#05CCEB] to-[#0098BC] rounded-full">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-[#05CCEB] mb-3 group-hover:text-[#0098BC] transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-slate-900">
            A verdade? <span className="text-[#05CCEB]">Se você aplicar tudo que irei te mostrar na Call, será impossível de você não colher resultados logo na primeira semana!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
