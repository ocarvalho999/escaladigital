import bruno from "@/assets/bruno.jpg";
import notifications from "@/assets/notifications.jpg";

const AboutSection = () => (
  <section className="py-14 px-4">
    <div className="max-w-[860px] mx-auto">
      {/* Photo + bio */}
      <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
        <img
          src={bruno}
          alt="Bruno Carvalho"
          className="w-[200px] h-[260px] object-cover object-top rounded-xl border-2 border-primary/20 shrink-0"
        />
        <div>
          <p className="text-primary text-lg sm:text-xl font-bold mb-1">
            E quem é o especialista por trás desses resultados?
          </p>
          <h2 className="text-2xl font-bold mb-2">Bruno Carvalho</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Estrategista de Marketing Digital especializado em clínicas de mesoterapia capilar.
            Não sou apenas um gestor de tráfego — monto estrutura, estratégia, funil completo e
            crio copys que tocam na dor real dos clientes.
          </p>
          <p className="text-muted-foreground text-sm">
            E não gero resultado só para clientes. Faço vendas todos os dias com meus próprios
            funis automáticos de infoprodutos.
          </p>
        </div>
      </div>

      {/* Notifications proof */}
      <div className="bg-card border border-primary/20 rounded-xl p-6 text-center mb-10">
        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
          Notificações de venda automática — todo dia
        </p>
        <p className="text-muted-foreground text-sm mb-4">
          Vendas chegando no celular enquanto trabalho para os meus clientes.
        </p>
        <img
          src={notifications}
          alt="Notificações de vendas automáticas no celular"
          className="max-w-[380px] mx-auto w-full rounded-lg"
        />
      </div>


      {/* Why */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">
        Por que tenho <span className="text-primary">certeza absoluta</span> que consigo gerar
        resultados para você?
      </h2>
      <p className="text-muted-foreground text-sm mb-4">
        Simples: porque eu não sou apenas um gestor de tráfego. Gestor de tráfego aperta botões.
        Eu monto estrutura, estratégia, funil completo e crio copys que tocam na dor real dos
        clientes — e é isso que gera resultado.
      </p>
      <p className="text-muted-foreground text-sm mb-8">
        Passei pela dor da calvície e sei exatamente o que move esse público. Tenho prioridade
        para saber o que está dando certo ou não nesse mercado.
      </p>
    </div>
  </section>
);

export default AboutSection;
