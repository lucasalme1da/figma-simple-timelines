const communityUrl =
  "https://www.figma.com/community/search?query=Simple%20Timelines&resource_type=plugins";
const coffeeUrl = "https://www.buymeacoffee.com/";

const features = [
  {
    number: "01",
    title: "Timeline ou calendário",
    text: "Escolha a visualização que melhor explica o seu projeto sem reconstruir tudo do zero.",
  },
  {
    number: "02",
    title: "Preview em tempo real",
    text: "Veja o resultado mudar enquanto ajusta datas, textos, cores e atividades.",
  },
  {
    number: "03",
    title: "Atividades completas",
    text: "Crie, duplique, exclua, reordene ou organize atividades automaticamente pela data inicial.",
  },
  {
    number: "04",
    title: "Eventos de um dia",
    text: "Destaque entregas, reuniões e marcos com um losango fácil de reconhecer.",
  },
  {
    number: "05",
    title: "Cores sob controle",
    text: "Defina uma cor para cada atividade e mantenha a leitura clara em todas as visualizações.",
  },
  {
    number: "06",
    title: "Semana do seu jeito",
    text: "Comece a semana no domingo ou na segunda-feira, conforme o seu contexto.",
  },
  {
    number: "07",
    title: "15 idiomas",
    text: "Gere rótulos e datas no idioma que seu time ou cliente precisa.",
  },
  {
    number: "08",
    title: "Edite quando precisar",
    text: "Selecione uma timeline já criada, abra o plugin novamente e atualize os dados.",
  },
];

const timelineRows = [
  { className: "bar-purple", label: "Pesquisa e descoberta", date: "3–9 out" },
  { className: "bar-blue", label: "UX e visual design", date: "7–15 out" },
  { className: "bar-teal", label: "Desenvolvimento", date: "12–23 out" },
  { className: "bar-orange", label: "QA e refinamentos", date: "21–28 out" },
];

const octoberDays = Array.from({ length: 31 }, (_, index) => index + 1);
const novemberDays = Array.from({ length: 30 }, (_, index) => index + 1);

function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`brand-mark${small ? " brand-mark-small" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function TimelineExample() {
  return (
    <div className="artifact-window timeline-window" aria-label="Exemplo de timeline de lançamento de produto">
      <div className="artifact-topbar">
        <div className="artifact-caption">
          <span>TIMELINE</span>
          <i />
          <span>03 OUT → 30 OUT</span>
        </div>
        <strong>Lançamento do produto</strong>
      </div>
      <div className="timeline-weeks" aria-hidden="true">
        <span>3–9 out</span>
        <span>10–16 out</span>
        <span>17–23 out</span>
        <span>24–30 out</span>
      </div>
      <div className="timeline-canvas">
        <div className="timeline-lines" aria-hidden="true"><i /><i /><i /></div>
        {timelineRows.map((row) => (
          <div className={`timeline-bar ${row.className}`} key={row.label}>
            <b>{row.label}</b>
            <span>{row.date}</span>
          </div>
        ))}
        <div className="timeline-milestone">
          <i aria-hidden="true" />
          <span><b>Lançamento</b>30 out</span>
        </div>
      </div>
    </div>
  );
}

function CalendarMonth({
  title,
  days,
  blanks,
  variant,
}: {
  title: string;
  days: number[];
  blanks: number;
  variant: "october" | "november";
}) {
  return (
    <div className={`calendar-month ${variant}`}>
      <div className="month-title"><span>2026</span><strong>{title}</strong></div>
      <div className="weekdays" aria-hidden="true">
        {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}
      </div>
      <div className="month-grid">
        {Array.from({ length: blanks }, (_, index) => <span className="empty-day" key={`blank-${index}`} />)}
        {days.map((day) => (
          <span className={`day-cell${(day + blanks) % 7 === 0 || (day + blanks) % 7 === 6 ? " weekend" : ""}`} key={day}>
            {day}
            {variant === "october" && day === 30 && <i className="day-diamond" aria-hidden="true" />}
          </span>
        ))}
        {variant === "october" ? (
          <>
            <span className="calendar-event event-purple"><b>Pesquisa</b></span>
            <span className="calendar-event event-blue"><b>Design</b></span>
            <span className="calendar-event event-teal"><b>Desenvolvimento</b></span>
            <span className="calendar-event event-orange"><b>QA</b></span>
          </>
        ) : (
          <>
            <span className="calendar-event event-pink"><b>Lançamento</b></span>
            <span className="calendar-event event-teal-next"><b>Acompanhamento</b></span>
          </>
        )}
      </div>
      <div className="calendar-legend">
        <span><i className="dot purple" />Pesquisa</span>
        <span><i className="dot teal" />Desenvolvimento</span>
        {variant === "october" && <span className="legend-milestone"><i />Lançamento</span>}
      </div>
    </div>
  );
}

function CalendarExample() {
  return (
    <div className="calendar-artifact" aria-label="Exemplo de calendário de lançamento de produto">
      <div className="calendar-artifact-header">
        <div className="artifact-caption"><span>CALENDÁRIO</span><i /><span>OUT → NOV 2026</span></div>
        <strong>Plano de lançamento</strong>
      </div>
      <div className="calendar-months">
        <CalendarMonth title="Outubro" days={octoberDays} blanks={3} variant="october" />
        <CalendarMonth title="Novembro" days={novemberDays} blanks={6} variant="november" />
      </div>
    </div>
  );
}

function CommunityButton({ className = "" }: { className?: string }) {
  return (
    <a className={`button button-primary ${className}`} href={communityUrl} target="_blank" rel="noreferrer">
      Instalar no Figma <ArrowIcon />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Navegação principal">
        <a className="brand" href="#top" aria-label="Simple Timelines — início">
          <BrandMark small />
          <span>Simple Timelines</span>
        </a>
        <div className="nav-links">
          <a href="#recursos">Recursos</a>
          <a href="#exemplos">Exemplos</a>
          <CommunityButton className="nav-cta" />
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Plugin para Figma</div>
          <h1>Seu projeto,<br /><em>claro de verdade.</em></h1>
          <p>Crie timelines e calendários bonitos, organizados e prontos para apresentar — sem montar cada bloco na mão.</p>
          <div className="hero-actions">
            <CommunityButton />
            <a className="text-link" href="#exemplos">Ver exemplos <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note">
            <span>✓</span> Direto no seu arquivo do Figma
            <span>✓</span> Resultado editável
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="dot-field" />
          <div className="plugin-panel">
            <div className="panel-header"><BrandMark small /><b>Simple Timelines</b></div>
            <div className="panel-step"><span>01</span><div><b>Detalhes da timeline</b><small>Defina o período e o idioma.</small></div></div>
            <div className="segmented"><span className="active">Timeline</span><span>Calendário</span></div>
            <label>Nome da timeline<span>Lançamento do produto</span></label>
            <label>Descrição<span>PLANO DE PRODUTO</span></label>
            <div className="mini-fields"><label>Data inicial<span>03/10/2026</span></label><label>Data final<span>30/10/2026</span></label></div>
            <div className="panel-activity"><i /><b>Pesquisa e descoberta</b><span /></div>
            <div className="panel-button">Criar timeline <b>→</b></div>
          </div>
          <div className="hero-preview-card">
            <div className="mini-title"><small>PLANO DE PRODUTO</small><b>Lançamento do produto</b></div>
            <div className="mini-weeks"><span>3–9</span><span>10–16</span><span>17–23</span><span>24–30</span></div>
            <div className="mini-timeline">
              <i className="mini-bar one" /><i className="mini-bar two" /><i className="mini-bar three" /><i className="mini-bar four" />
              <i className="mini-diamond" />
            </div>
          </div>
          <div className="floating-badge"><span>✓</span> Pronto no Figma</div>
        </div>
      </section>

      <section className="benefit-strip" aria-label="Principais benefícios">
        <div><strong>2</strong><span>visualizações<br />completas</span></div>
        <div><strong>15</strong><span>idiomas<br />disponíveis</span></div>
        <div><strong>1</strong><span>plugin para<br />organizar tudo</span></div>
      </section>

      <section className="workflow section-pad">
        <div className="section-intro centered">
          <span className="section-kicker">Simples por escolha</span>
          <h2>Do planejamento ao canvas<br />em três passos.</h2>
        </div>
        <div className="steps">
          <article><span>01</span><div className="step-icon calendar-icon"><i /><i /></div><h3>Defina o período</h3><p>Escolha as datas, o idioma e o início da semana.</p></article>
          <article><span>02</span><div className="step-icon list-icon"><i /><i /><i /></div><h3>Adicione atividades</h3><p>Organize tarefas, fases e marcos com suas próprias cores.</p></article>
          <article><span>03</span><div className="step-icon spark-icon"><i /><i /><i /></div><h3>Crie no Figma</h3><p>Revise o preview e gere o artefato pronto no canvas.</p></article>
        </div>
      </section>

      <section className="examples section-pad" id="exemplos">
        <div className="example-block">
          <div className="example-copy">
            <span className="section-kicker">Visualização 01</span>
            <h2>Timeline para enxergar o fluxo.</h2>
            <p>Perfeita para roadmaps, lançamentos, sprints e qualquer plano em que duração e sequência importam.</p>
            <ul><li>Períodos organizados por semana</li><li>Atividades em faixas coloridas</li><li>Marcos de um dia em destaque</li></ul>
          </div>
          <TimelineExample />
        </div>
        <div className="example-block calendar-block">
          <CalendarExample />
          <div className="example-copy">
            <span className="section-kicker">Visualização 02</span>
            <h2>Calendário para ver cada data.</h2>
            <p>Ideal para calendários editoriais, campanhas e planejamentos que precisam de leitura diária.</p>
            <ul><li>Até 12 meses por calendário</li><li>Finais de semana identificados</li><li>Legenda automática de atividades</li></ul>
          </div>
        </div>
      </section>

      <section className="features section-pad" id="recursos">
        <div className="section-intro">
          <span className="section-kicker">Tudo que importa</span>
          <h2>Menos trabalho manual.<br />Mais clareza.</h2>
          <p>Os controles certos para criar, ajustar e apresentar seu planejamento sem complicação.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.number}>
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="edit-section section-pad">
        <div className="edit-card">
          <div className="edit-visual" aria-hidden="true">
            <div className="select-outline"><span>Simple Timeline</span><i /><i /><i /><i /></div>
            <div className="edit-pill"><b>↻</b> Editar timeline</div>
          </div>
          <div className="edit-copy">
            <span className="section-kicker">Nada fica engessado</span>
            <h2>Mudou o plano?<br />Atualize o resultado.</h2>
            <p>Selecione uma timeline criada pelo plugin e abra o Simple Timelines novamente. Seus dados voltam para o editor, prontos para ajustar.</p>
          </div>
        </div>
      </section>

      <section className="coffee section-pad">
        <div className="coffee-card">
          <div className="coffee-cup" aria-hidden="true"><span>☕</span><i /></div>
          <div>
            <span className="section-kicker">Feito com carinho (e cafeína)</span>
            <h2>Curtiu o plugin?<br />Me paga um café hehe :P</h2>
            <p>Seu apoio ajuda a manter o Simple Timelines evoluindo.</p>
          </div>
          <a className="button coffee-button" href={coffeeUrl} target="_blank" rel="noreferrer">Buy me a coffee <ArrowIcon /></a>
        </div>
      </section>

      <section className="final-cta section-pad">
        <div className="final-mark"><BrandMark /></div>
        <span className="section-kicker">Seu próximo planejamento começa aqui</span>
        <h2>Transforme datas em uma<br />história fácil de entender.</h2>
        <p>Abra no Figma, organize o projeto e crie sua primeira timeline.</p>
        <CommunityButton />
      </section>

      <footer className="site-footer">
        <a className="brand" href="#top"><BrandMark small /><span>Simple Timelines</span></a>
        <p>Timelines e calendários, sem complicação.</p>
        <a href={communityUrl} target="_blank" rel="noreferrer">Figma Community <ArrowIcon /></a>
      </footer>
    </main>
  );
}
