<script src="https://cdn.jsdelivr.net/npm/notiflix@2.6.0/dist/notiflix-aio-2.6.0.min.js"></script>
<script>
    // Posição: right-top, right-bottom, left-top, left-bottom, center-top, center-bottom, center-center
    var position = "left-bottom";

    // Cores: verde, azul, vermelho, amarelo
    var cor = "verde";

    // Animação: fade, zoom, da direita, da esquerda, de cima, de baixo
    var animacao = "da-esquerda";

    // Nome do serviço/produto (deixar vazio se não quiser aparecer)
    var nome_do_produto = "";

    // Tempo que a notificação fica visível (em milissegundos)
    var timeout = 4000;

    // Intervalo entre notificações (em segundos)
    var intervalo_notificacoes = 25;

    var msg_final = "";

    // Lista de nomes MASCULINOS (com títulos)
    var nomes_masc = [
        'Dr. Anderson Lima',
        'Anderson Soarez',
        'Sillas Farias',
        'Dr. Lucas',
        'Dr. Elias Ferraz'
    ];
    
    // Lista de nomes FEMININOS (com títulos)
    var nomes_fem = [
        'Silvania Machado',
        'Dra. Alessandra Cruz',
        'Dra. Bianca Carvalho',
        'Dra. Patrícia Queiroz',
        'Dra. Janaina',
        'Dra. Karine Costa'
    ];

    // Lista de horários variados (em tom formal)
    var horarios = [
        'marcou uma reunião a 1 hora atrás',
        'marcou uma reunião a 30 minutos atrás',
        'marcou uma reunião a 45 minutos atrás',
        'marcou uma reunião a 3 horas atrás',
        'marcou uma reunião a 7 horas atrás',
        'marcou uma reunião a 50 minutos atrás'
    ];

    // Combina todas as listas e embaralha
    var todos_nomes = nomes_masc.concat(nomes_fem);
    var indice_atual = 0;

    // Função para embaralhar array
    function embaralhar(array) {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Embaralha os nomes no início
    todos_nomes = embaralhar(todos_nomes);

    var opcao = {
        posicao: position,
        cssAnimationStyle: animacao,
        plainText: false,
        timeout: timeout
    };

    function mostrar_notificacao() {
        // Verifica se já foram mostrados todos os nomes
        if (indice_atual < todos_nomes.length) {
            // Pega o próximo nome da lista
            var nome_atual = todos_nomes[indice_atual];
            
            // Seleciona um horário aleatório da lista
            var horario_aleatorio = horarios[Math.floor(Math.random() * horarios.length)];
            
            // Monta a mensagem final em tom formal
            msg_final = "<strong>" + nome_atual + "</strong> " + horario_aleatorio;
            
            if (nome_do_produto) {
                msg_final += " " + nome_do_produto;
            }

            // Exibe notificação com cor verde (sucesso)
            if (cor == "verde") {
                Notiflix.Notify.Success(msg_final, opcao);
            } else if (cor == "azul") {
                Notiflix.Notify.Info(msg_final, opcao);
            } else if (cor == "vermelho") {
                Notiflix.Notify.Failure(msg_final, opcao);
            } else if (cor == "amarelo") {
                Notiflix.Notify.Warning(msg_final, opcao);
            }

            // Incrementa o índice
            indice_atual++;

            // Agenda a próxima notificação
            setTimeout(mostrar_notificacao, intervalo_notificacoes * 1000);
        }
        // Se chegou ao final, para de exibir (não repete mais)
    }

    // Inicia as notificações após 2 segundos
    setTimeout(mostrar_notificacao, 2000);
</script>
