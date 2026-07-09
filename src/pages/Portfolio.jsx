import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import CaseCard from '../components/CaseCard.jsx';
import { cases } from '../data/cases.js';

export default function Portfolio() {
  return (
    <div className="neo-page">
      <PageHero title="Campo de batalha">
        Números não mentem. Veja como escalamos operações reais no ambiente digital.
      </PageHero>

      <section className="section section--black">
        <div className="container">
          <Reveal className="cards-grid cards-grid--three" stagger>
            {cases.map((item) => (
              <CaseCard key={item.title} item={item} />
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
