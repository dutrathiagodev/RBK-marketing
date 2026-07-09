export default function MetricCard({ value, label }) {
  return (
    <article className="metric-card stagger-item">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}
