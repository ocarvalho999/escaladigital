const CTA_LINK = "https://wa.me/5531971151972?text=Olá,%20tenho%20interesse%20em%20uma%20call%20gratuita!";

const CtaSection = () => (
  <section id="agendar" className="bg-card border-t border-primary/15 py-16 px-4 text-center">
    <div className="max-w-[640px] mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">
        Se faz sentido o que você leu e está dedicado a aumentar seu faturamento — clica no botão
        abaixo e vamos conversar.
      </h2>
      <a
        href={CTA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => { if (typeof (window as any).fbq === 'function') (window as any).fbq('track', 'Lead'); }}
        className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-bold text-base hover:opacity-90 transition-opacity"
      >
        Agendar Reunião Breve →
      </a>
      <p className="text-muted-foreground text-sm mt-4 max-w-[520px] mx-auto">
        Vou analisar o seu negócio e te dizer com honestidade se sou apto a gerar os resultados
        que mostrei — ou melhores. Meu objetivo é simples: colocando mais dinheiro no seu bolso,
        eu também prospero.
      </p>
    </div>
  </section>
);

export default CtaSection;
