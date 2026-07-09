import { ArrowUpRight, Trophy } from 'lucide-react';

export default function CaseCard({ item, compact = false }) {
  return (
    <article className={`case-card case-card--${item.tone} ${compact ? 'case-card--compact' : ''} stagger-item`}>
      <div className="case-card__media" aria-hidden="true">
        <div className="case-card__arrow" />
      </div>
      <div className="case-card__body">
        <span className="case-card__category">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="case-card__result">
          <Trophy size={20} strokeWidth={1.9} aria-hidden="true" />
          <span>{item.result}</span>
          <ArrowUpRight size={18} strokeWidth={1.9} aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}
