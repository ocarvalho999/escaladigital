const stats = [
  { num: "+600", label: "Conversas no WhatsApp" },
  { num: "R$25k+", label: "Faturamento em menos de 60 dias" },
  { num: "R$25k+", label: "Com 1 único anúncio" },
];

const StatsSection = () => (
  <section className="py-14 px-4 bg-card">
    <div className="max-w-[860px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-background border border-primary/15 rounded-xl p-5 text-center"
          >
            <div className="text-3xl font-bold text-primary">{s.num}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <p className="text-center text-muted-foreground text-sm max-w-[600px] mx-auto">
        Se você chegou até aqui, é porque sabe que o que estou falando{" "}
        <span className="text-primary font-semibold">não é achismo</span> — é campo de batalha.
      </p>
    </div>
  </section>
);

export default StatsSection;
