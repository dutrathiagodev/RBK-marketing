import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <div className="neo-page">
      <PageHero title="Nosso arsenal">
        Táticas comprovadas e execução impecável para cada fronteira do campo de batalha digital.
      </PageHero>

      <section className="section section--black">
        <div className="container">
          <Reveal className="cards-grid cards-grid--three" stagger>
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
