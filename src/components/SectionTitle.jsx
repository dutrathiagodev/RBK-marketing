export default function SectionTitle({ align = 'left', kicker, title, children }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {kicker ? <p className="section-title__kicker">{kicker}</p> : null}
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
