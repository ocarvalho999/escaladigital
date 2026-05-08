import { useEffect } from 'react';
import './NotificacoesReuniao.css';

export function NotificacoesReuniao() {
  useEffect(() => {
    const nomes_masc = [
      'Dr. Anderson Lima',
      'Anderson Soarez',
      'Sillas Farias',
      'Dr. Lucas',
      'Dr. Elias Ferraz'
    ];

    const nomes_fem = [
      'Silvania Machado',
      'Dra. Alessandra Cruz',
      'Dra. Bianca Carvalho',
      'Dra. Patrícia Queiroz',
      'Dra. Janaina',
      'Dra. Karine Costa'
    ];

    const horarios = [
      'marcou uma reunião a 1 hora atrás',
      'marcou uma reunião a 30 minutos atrás',
      'marcou uma reunião a 45 minutos atrás',
      'marcou uma reunião a 3 horas atrás',
      'marcou uma reunião a 7 horas atrás',
      'marcou uma reunião a 50 minutos atrás'
    ];

    let todos_nomes = nomes_masc.concat(nomes_fem);
    let indice_atual = 0;

    const embaralhar = (array: string[]) => {
      let shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    todos_nomes = embaralhar(todos_nomes);

    const mostrar_notificacao = () => {
      if (indice_atual < todos_nomes.length) {
        const nome_atual = todos_nomes[indice_atual];
        const horario_aleatorio = horarios[Math.floor(Math.random() * horarios.length)];

        const notificacao = document.createElement('div');
        notificacao.className = 'notificacao-reuniao';
        notificacao.innerHTML = `
          <div class="notificacao-content">
            <div class="notificacao-icone">✓</div>
            <div class="notificacao-texto">
              <strong>${nome_atual}</strong> ${horario_aleatorio}
            </div>
          </div>
        `;

        document.body.appendChild(notificacao);

        setTimeout(() => {
          notificacao.classList.add('hide');
          setTimeout(() => {
            document.body.removeChild(notificacao);
          }, 300);
        }, 4000);

        indice_atual++;
        setTimeout(mostrar_notificacao, 25 * 1000);
      }
    };

    setTimeout(mostrar_notificacao, 2000);
  }, []);

  return null;
}