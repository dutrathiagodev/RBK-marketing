import { icons } from '../utils/icons.jsx';

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon];

  return (
    <article className="service-card stagger-item">
      <div className="service-card__icon" aria-hidden="true">
        {Icon ? <Icon size={24} strokeWidth={1.9} /> : null}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="service-card__orbit" aria-hidden="true" />
    </article>
  );
}
