import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Globe2,
  Lightbulb,
  Mic2,
  MousePointer2,
  Share2,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { gsap } from 'gsap';
import ramiroImage from '../assets/images/ramiro-bilek-ceo.png';
import { LetterSwapForward } from '../components/LetterSwap.jsx';
import Reveal from '../components/Reveal.jsx';
import { metrics } from '../data/metrics.js';
import { services } from '../data/services.js';
import { cases } from '../data/cases.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

const proofLogos = [
  'Edluma',
  'Centro Médico',
  'Gordo Auto Peças',
  'Boutique Elegance',
  'Tech Solutions',
  'Café Aroma',
  'Finance Prime',
  'Fitness Pro',
  'Horizonte Imóveis',
];

const serviceIconMap = {
  Share2,
  Target,
  Globe2,
  Bot,
  Lightbulb,
  Mic2,
};

const processItems = [
  {
    title: 'Estratégia personalizada',
    description: 'Diagnóstico da operação, gargalos e oportunidades de escala.',
  },
  {
    title: 'Execução ágil e precisa',
    description: 'Campanhas, conteúdos, automações e landing pages saindo do papel.',
  },
  {
    title: 'Foco total em resultado',
    description: 'Leitura semanal de dados para ajustar rota, verba e conversão.',
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const root = heroRef.current;

    if (!root) {
      return undefined;
    }

    const animatedItems = root.querySelectorAll('[data-hero-animate]');

    if (prefersReducedMotion) {
      gsap.set(animatedItems, { autoAlpha: 1, y: 0, clearProps: 'transform,opacity,visibility' });
      return undefined;
    }

    // The reveal distance is intentionally small: 20px of Y transform creates depth
    // without moving layout boxes, so the browser can keep the animation on the GPU.
    const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });
    timeline.fromTo(
      animatedItems,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        // Each item starts 0.09s after the previous one, producing a cascade
        // while every animated property remains limited to transform and opacity.
        stagger: 0.09,
      },
    );

    return () => timeline.kill();
  }, [prefersReducedMotion]);

  return (
    <div className="neo-home">
      <section ref={heroRef} className="neo-hero">
        <div className="neo-hero__motion" aria-hidden="true">
          <span className="neo-hero__wire neo-hero__wire--one" />
          <span className="neo-hero__wire neo-hero__wire--two" />
          <span className="neo-hero__wire-dot" />
        </div>

        <div className="container neo-hero__layout">
          <div className="neo-hero__copy">
            <h1 data-hero-animate>
              Performance que move{' '}
              <span className="neo-hero__accent">
                <LetterSwapForward label="resultados." reverse staggerFrom="center" className="neo-hero__letter-swap" />
              </span>
            </h1>
            <p data-hero-animate>
              Estratégia, tráfego e tecnologia para escalar seu negócio com inteligência e performance real.
            </p>

            <div className="neo-actions" data-hero-animate>
              <Link className="neo-button neo-button--solid" to="/contato">
                <span>Falar com especialista</span>
                <ArrowUpRight size={18} strokeWidth={2.1} aria-hidden="true" />
              </Link>
              <Link className="neo-button neo-button--ghost" to="/portfolio">
                <span>Ver cases</span>
                <MousePointer2 size={18} strokeWidth={2.1} aria-hidden="true" />
              </Link>
            </div>

            <div className="neo-hero__proof" data-hero-animate>
              <div className="avatar-stack" aria-hidden="true">
                <span>R</span>
                <span>B</span>
                <span>K</span>
              </div>
              <strong>+240 empresas impulsionadas</strong>
              <span>e mais de R$ 1 milhão investido em tráfego.</span>
            </div>
          </div>

          <aside className="neo-ceo" data-hero-animate aria-label="Ramiro Bilek, CEO da RBK">
            <div className="neo-ceo__frame">
              <img src={ramiroImage} alt="Ramiro Bilek, CEO da RBK Marketing Digital" />
            </div>

            <div className="neo-ceo__card">
              <span>CEO & estrategista chefe</span>
              <strong>Ramiro Bilek</strong>
              <small>+8 anos transformando negócios digitais</small>
            </div>

            <div className="neo-ceo__scroll" aria-hidden="true">
              <span>Role para evoluir</span>
              <ArrowDown size={20} strokeWidth={1.8} />
            </div>
          </aside>
        </div>

        <div className="container neo-metrics" data-hero-animate aria-label="Números da RBK">
          {metrics.map((metric, index) => (
            <article className="neo-metric" key={metric.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="neo-logo-rail" aria-label="Método aprovado por empresas">
        <p>Método aprovado por empresas que exigem performance</p>
        <div className="neo-logo-rail__track" aria-hidden="true">
          <div className="neo-logo-rail__group">
            {[...proofLogos, ...proofLogos].map((logo, index) => (
              <span key={`${logo}-${index}`}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="neo-services">
        <div className="container neo-services__layout">
          <Reveal>
            <div className="neo-section-copy">
              <h2>O que fazemos</h2>
              <p>Soluções completas para gerar mais visibilidade, autoridade e vendas para o seu negócio.</p>
              <Link className="neo-text-link" to="/servicos">
                Conhecer todos os serviços
                <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="neo-service-board" stagger>
            {services.map((service, index) => {
              const Icon = serviceIconMap[service.icon] ?? Zap;

              return (
                <article className="neo-service-line stagger-item" key={service.title}>
                  <span className="neo-service-line__index">{String(index + 1).padStart(2, '0')}</span>
                  <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="neo-system">
        <div className="container neo-system__layout">
          <Reveal>
            <div className="neo-system__title">
              <h2>RBK Operating System</h2>
              <p>Menos barulho visual. Mais método, leitura de dados e execução semanal.</p>
            </div>
          </Reveal>

          <Reveal className="neo-process" stagger>
            {processItems.map((item, index) => (
              <article className="neo-process__item stagger-item" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="neo-results">
        <div className="container">
          <Reveal>
            <div className="neo-results__head">
              <div>
                <h2>Resultados que comprovam</h2>
                <p>Estratégias personalizadas, execução impecável e números que impactam o negócio.</p>
              </div>
              <Link className="neo-button neo-button--outline" to="/portfolio">
                <span>Ver todos os cases</span>
                <ArrowUpRight size={18} strokeWidth={2.1} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="neo-case-grid" stagger>
            {cases.slice(0, 4).map((item) => (
              <article className="neo-case-card stagger-item" key={item.title}>
                <div className={`neo-case-card__media neo-case-card__media--${item.tone}`} aria-hidden="true">
                  <TrendingUp size={28} strokeWidth={1.8} />
                </div>
                <div className="neo-case-card__body">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <strong>{item.result}</strong>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="neo-cta">
        <div className="container neo-cta__layout">
          <div>
            <h2>Pronto para evoluir?</h2>
            <p>Nosso time está pronto para analisar seu cenário e criar um plano sob medida para o seu crescimento.</p>
          </div>
          <Link className="neo-button neo-button--dark" to="/contato">
            <span>Solicitar contato</span>
            <ArrowUpRight size={18} strokeWidth={2.1} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
