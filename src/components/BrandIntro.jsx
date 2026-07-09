import { useEffect } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

const letters = ['R', 'B', 'K'];

export default function BrandIntro({ onComplete }) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete?.();
      return undefined;
    }

    const timer = window.setTimeout(() => {
      onComplete?.();
    }, 3250);

    return () => window.clearTimeout(timer);
  }, [onComplete, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <section className="brand-intro" aria-label="Introducao RBK Marketing Digital">
      <div className="brand-intro__field" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="brand-intro__mark">
        <span className="brand-intro__eyebrow">Marketing de alta performance</span>

        <div className="brand-intro__logo" aria-label="RBK Marketing Digital">
          <span className="brand-intro__lens" aria-hidden="true" />
          <strong className="brand-intro__name" aria-hidden="true">
            {letters.map((letter, index) => (
              // The index becomes a CSS variable so the delay is mathematical:
              // delay = base time + index * step, creating a stable stagger.
              <span key={letter} style={{ '--letter-index': index }}>
                {letter}
              </span>
            ))}
          </strong>
          <span className="brand-intro__descriptor">Marketing Digital</span>
        </div>

        <div className="brand-intro__progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
