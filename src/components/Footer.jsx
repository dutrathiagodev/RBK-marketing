import { Link } from 'react-router-dom';
import { Building2, Instagram, Mail, MapPin, Phone, Users } from 'lucide-react';

const footerNav = [
  { label: 'Home', to: '/' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Portfólio', to: '/portfolio' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <section className="footer-cta" aria-labelledby="footer-cta-title">
          <h2 id="footer-cta-title">O próximo nível exige ação</h2>
          <p>A competição não dorme. Sua marca também não deveria.</p>
          <Link className="button button--dark" to="/contato">
            Iniciar projeto
          </Link>
        </section>

        <div className="footer-grid">
          <div>
            <Link className="brand brand--footer" to="/">
              <span>RBK</span>
              <small>Marketing</small>
            </Link>
            <p className="footer-copy">
              Transformando negócios através de estratégias digitais de alta performance e resultados reais.
            </p>
          </div>

          <div>
            <h3>Navegação</h3>
            <ul className="footer-list">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contato</h3>
            <ul className="footer-list footer-list--contact">
              <li>
                <Mail size={17} />
                diretoria@rbkagencia.com.br
              </li>
              <li>
                <Building2 size={17} />
                Comercial: (43) 9 9649-6660
              </li>
              <li>
                <Users size={17} />
                RH: (43) 9 9967-3044
              </li>
              <li>
                <Phone size={17} />
                CEO: (43) 9 9818-3835
              </li>
              <li>
                <MapPin size={17} />
                Rua 24 de Maio, nº 334, Centro, Santo Antônio da Platina-PR
              </li>
            </ul>
          </div>

          <div>
            <h3>Redes sociais</h3>
            <ul className="footer-list footer-list--social">
              <li>
                <Instagram size={18} />
                @rbkagenciademkt
              </li>
              <li>
                <Instagram size={18} />
                @ramirobilek.mkt
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 RBK Agência de Marketing. Todos os direitos reservados.</span>
          <span>Privacidade · Termos</span>
        </div>
      </div>
    </footer>
  );
}
