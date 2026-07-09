import { Calendar, MessageCircle } from 'lucide-react';

export default function TrainingCard({ item, horizontal = false }) {
  return (
    <article className={`training-card ${horizontal ? 'training-card--horizontal' : ''} stagger-item`}>
      <div className={`training-card__media training-card__media--${item.tone}`} aria-hidden="true">
        <span>
          <Calendar size={16} strokeWidth={2} />
          {item.date}
        </span>
      </div>
      <div className="training-card__body">
        <span className="training-card__status">{item.status}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a className="button button--outline button--full" href="/contato">
          <MessageCircle size={18} strokeWidth={1.9} aria-hidden="true" />
          Inscrever-se
        </a>
      </div>
    </article>
  );
}
