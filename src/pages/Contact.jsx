import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { contacts } from '../data/contacts.js';
import { icons } from '../utils/icons.jsx';

export default function Contact() {
  return (
    <div className="neo-page">
      <PageHero title="Inicie a escala">
        Estamos prontos para analisar sua operação. Preencha o formulário ou acesse nossos canais diretos.
      </PageHero>

      <section className="section section--black contact-section">
        <div className="container contact-grid">
          <Reveal>
            <div>
              <h2 className="inline-heading">Envie seu briefing</h2>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal className="contact-aside" stagger>
            <h2 className="inline-heading stagger-item">Coordenadas oficiais</h2>
            {contacts.map((item) => {
              const Icon = icons[item.icon];
              return (
                <article className="contact-item stagger-item" key={item.title}>
                  <div aria-hidden="true">{Icon ? <Icon size={23} strokeWidth={1.9} /> : null}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                </article>
              );
            })}
            <div className="expect-card stagger-item">
              <h3>O que esperar?</h3>
              <p>
                Após o envio, nosso time analisará sua presença atual em até 24h úteis. Entraremos em contato apenas se
                identificarmos potencial real de escala.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
