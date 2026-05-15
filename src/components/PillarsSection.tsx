const pillars = [
  {
    num: 1,
    title: "Ação — os primeiros 7 segundos",
    text: 'Se você não fisgar o lead nos primeiros segundos, já era. Um dos anúncios que mais gerou resultado foi estilo entrevista, onde uma mulher responde se ficaria com um homem calvo: "Eu ficar com um calvo? Jamais. Se nem o cabelo dele quer ficar com ele, por que eu ficaria?" — esse gancho atacou diretamente o ego e a validação dos homens. Atenção fisgada.',
  },
  {
    num: 2,
    title: "Interesse — por que isso importa para ele",
    text: "Com a atenção conquistada, o próximo passo é gerar interesse real pelo tratamento. Isso pode ser feito mencionando estudos que comprovam que a saúde capilar impacta diretamente nas interações sociais, promoções no trabalho e na vida amorosa.",
  },
  {
    num: 3,
    title: "Desejo — o que ele realmente quer",
    text: "Por incrível que pareça, o homem não quer cabelo — ele quer validação, autoestima, confiança e presença. O cabelo é o meio. Essa parte do anúncio trabalha o desejo real de forma inconsciente.",
  },
  {
    num: 4,
    title: "Ação — o clique que vira consulta",
    text: 'A parte de ouro. Aqui incentivamos o lead a clicar em "Saiba Mais" e marcar uma consulta. É fundamental trabalhar urgência, escassez de preço promocional por tempo limitado ou agenda quase cheia.',
  },
];

const PillarsSection = () => (
  <section className="py-14 px-4 bg-card">
    <div className="max-w-[860px] mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">
        Os <span className="text-primary">4 pilares</span> de um anúncio que realmente vende
      </h2>
      <p className="text-muted-foreground mb-8 text-sm">
        Esses pilares são a base de todo anúncio que rodei para minha cliente e que gerou mais
        de 2.000 leads qualificados no WhatsApp dela.
      </p>
      <div className="flex flex-col gap-5">
        {pillars.map((p) => (
          <div key={p.num} className="bg-background border border-primary/12 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary text-primary-foreground font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                {p.num}
              </span>
              <span className="font-bold text-primary text-base">{p.title}</span>
            </div>
            <p className="text-muted-foreground text-[0.95rem]">{p.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-muted border-l-[3px] border-primary rounded-r-lg px-6 py-5 mt-8">
        <p className="text-foreground text-sm">
          Você não precisa saber tudo isso.{" "}
          <span className="text-primary font-semibold">Essa parte é comigo.</span>
        </p>
      </div>
      <div className="mt-6 space-y-5">
        <p className="text-muted-foreground text-sm leading-relaxed">
          O que expliquei acima foi um resumo. Na prática é um pouco mais complexo — mas você não
          precisa entender cada detalhe técnico. Essa é exatamente a minha função.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Analiso anúncios de clínicas de mesoterapia capilar de todo o Brasil que estão investindo
          mais de R$ 1.000,00 por dia. Com isso, tenho clareza absoluta do que está funcionando no
          mercado, pegando o que já está gerando resultado e adaptando da melhor forma para o seu
          modelo de negócio.
        </p>
        <div className="bg-muted border-l-[3px] border-primary rounded-r-lg px-6 py-5">
          <p className="text-foreground text-sm leading-relaxed">
            Tenho uma cliente de mesoterapia capilar em Brasília que gostei tanto do trabalho dela que
            fiz questão de{" "}
            <span className="font-bold">sair de Minas Gerais para fazer o tratamento com ela em Brasília</span>.
            {" "}6 meses depois, colhi um resultado muito acima do esperado! E como um bom marketeiro,
            fiz um anúncio usando minha própria imagem para anunciar para ela. Esse anúncio sozinho
            gerou mais de{" "}
            <span className="text-primary font-bold underline">R$50 mil em faturamento</span>.
          </p>
        </div>
      </div>

      {/* Social proof video card */}
      <div className="bg-card border border-primary/20 rounded-xl p-6 text-center mt-10">
        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
          Anúncio de prova social — resultado real
        </p>
        <p className="text-muted-foreground text-sm mb-6">
          Veja abaixo o anúncio que usei minha própria imagem para criar. Passei pela dor da
          calvície e sei exatamente o que move esse público — tenho prioridade para saber o que
          está dando certo ou não nesse mercado.
        </p>
        <div className="max-w-[400px] mx-auto rounded-lg overflow-hidden" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/1183167854?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            title="ads depoimento bruno + ads imagem"
          />
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        {[
          { num: "+600", label: "Conversas no WhatsApp" },
          { num: "R$50k+", label: "Faturamento em menos de 60 dias" },
          { num: "R$50k+", label: "Com 1 único anúncio" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-background border border-primary/15 rounded-xl p-5 text-center"
          >
            <div className="text-3xl font-bold text-primary">{s.num}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <p className="text-center text-muted-foreground text-sm max-w-[600px] mx-auto mt-6">
        Se você chegou até aqui, é porque sabe que o que estou falando{" "}
        <span className="text-primary font-semibold">não é achismo</span> — é campo de batalha.
      </p>
    </div>
  </section>
);

export default PillarsSection;
