import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import TrainingCard from '../components/TrainingCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { trainings } from '../data/trainings.js';

export default function Trainings() {
  return (
    <div className="neo-page">
      <PageHero title="Agenda oficial de treinamentos">
        As vagas são estritamente limitadas para garantir alto nível de networking e entrega de conteúdo.
      </PageHero>

      <section className="section section--black">
        <div className="container">
          <Reveal className="cards-grid cards-grid--training" stagger>
            {trainings.map((item) => (
              <TrainingCard key={item.title} item={item} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section training-cta-section">
        <div className="container">
          <Reveal className="training-cta">
            <SectionTitle align="center" title="Pronto para evoluir?">
              Solicite informações sobre treinamentos in company personalizados para a realidade da sua equipe
              comercial.
            </SectionTitle>
            <a className="neo-button neo-button--dark" href="/contato">
              <span>Falar com consultor</span>
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
