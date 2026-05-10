const CTA_LINK = "https://wa.me/5531971151972?text=Olá,%20tenho%20interesse%20em%20uma%20call%20gratuita!";

const Hero = () => (
  <section className="bg-gradient-to-b from-surface-dark to-background py-16 px-4 text-center">
    <div className="max-w-[860px] mx-auto">
      <span className="inline-block bg-primary/10 border border-primary/35 text-primary text-xs px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider font-medium">
        Exclusivo para clínicas de mesoterapia capilar
      </span>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight max-w-[820px] mx-auto mb-6">
        Como uma clínica de estética saiu do prejuízo e gerou mais de{" "}
        <span className="text-primary">R$ 60 MIL</span> em faturamento em menos de 90 dias
        — usando um processo simples que quase ninguém aplica...
      </h1>
      <p className="text-muted-foreground text-base max-w-[600px] mx-auto mb-8">
        Se você tem uma clínica de mesoterapia capilar e sente que os anúncios não estão
        trazendo resultado, continue lendo. O que vou te mostrar aqui mudou completamente o
        jogo para minha cliente.
      </p>
      <a
        href={CTA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => { if (typeof (window as any).fbq === 'function') (window as any).fbq('track', 'Lead'); }}
        className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-bold text-base hover:opacity-90 transition-opacity"
      >
        Quero entender como funciona →
      </a>
    </div>
  </section>
);

export default Hero;
