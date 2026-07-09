import ramiroImage from '../assets/images/ramiro-bilek-ceo.png';
import GlobeInteractive from '../components/GlobeInteractive.jsx';
import { LetterSwapForward } from '../components/LetterSwap.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function About() {
  return (
    <div className="neo-page">
      <PageHero title="Cultura implacável">
        Não acreditamos em fórmulas mágicas. Acreditamos em dados, trabalho duro e execução magistral.
      </PageHero>

      <section className="section manifesto-section">
        <div className="container manifesto-grid">
          <Reveal>
            <SectionTitle title="O manifesto RBK">
              A RBK Marketing Digital não nasceu para ser mais uma agência. Nascemos da inconformação com promessas
              vazias e métricas de vaidade substituindo resultado real.
            </SectionTitle>
          </Reveal>

          <Reveal className="manifesto-copy" stagger>
            <p className="stagger-item">
              Desde 2018, assumimos uma postura de parceiros estratégicos. Se um projeto não tem potencial de escala,
              nós não entramos.
            </p>
            <p className="stagger-item">
              Hoje, após 240+ operações escaladas e mais de 1 milhão investido em tráfego, nosso compromisso permanece
              intacto: transparência brutal, excelência técnica e obsessão por ROI.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section global-presence-section" aria-labelledby="global-presence-title">
        <div className="container global-presence">
          <Reveal>
            <div className="global-presence__copy">
              <h2 id="global-presence-title">
                Atendimento sem <LetterSwapForward label="fronteiras" staggerFrom="last" />
              </h2>
              <p>
                A RBK atende empresas no Brasil e acompanha operações com clientes na Europa, Ásia e Américas, mantendo
                a mesma obsessão por dados, clareza e execução.
              </p>
            </div>
          </Reveal>

          <Reveal className="global-presence__visual">
            <GlobeInteractive />
          </Reveal>

          <Reveal className="global-presence__stats" stagger>
            <article className="stagger-item">
              <span>01</span>
              <strong>Américas</strong>
              <p>Operações e campanhas para negócios em mercados locais e internacionais.</p>
            </article>
            <article className="stagger-item">
              <span>02</span>
              <strong>Europa</strong>
              <p>Projetos com visão de expansão, posicionamento e aquisição de demanda.</p>
            </article>
            <article className="stagger-item">
              <span>03</span>
              <strong>Ásia</strong>
              <p>Leitura estratégica para marcas que precisam competir em ambientes digitais exigentes.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--black">
        <div className="container">
          <Reveal>
            <SectionTitle align="center" title="A tropa de elite" />
          </Reveal>
          <Reveal className="team-grid" stagger>
            <article className="team-card stagger-item">
              <img src={ramiroImage} alt="Ramiro Bilek" />
              <h3>Ramiro Bilek</h3>
              <p>CEO & Estrategista Chefe</p>
            </article>
            <article className="team-card team-card--initials stagger-item">
              <div aria-hidden="true">CC</div>
              <h3>Crislaine Cristina</h3>
              <p>Gerente financeiro</p>
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
