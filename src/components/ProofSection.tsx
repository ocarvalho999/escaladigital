import adsDashboard from "@/assets/ads-dashboard.jpg";
import provaImg from "@/assets/quase-20000-investidos-cliente.png";
const ProofSection = () => (
  <section className="py-14 px-4">
    <div className="max-w-[780px] mx-auto">
      <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
          Prova real — Gerenciador de Anúncios
        </p>
        <p className="text-muted-foreground text-sm mb-4">
          Quase R$ 20.000,00 reais investidos e mais de 2 mil conversas iniciadas no WhatsApp
          — print tirado em 14/04/2026, dados recentes!
        </p>
        <img
          src={provaImg}
          alt="Dashboard do gerenciador de anúncios mostrando resultados"
          className="w-full h-auto rounded-lg object-contain"
        />
      </div>
    </div>
  </section>
);

export default ProofSection;
