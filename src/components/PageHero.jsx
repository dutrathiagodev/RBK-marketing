import Reveal from './Reveal.jsx';

export default function PageHero({ title, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__ring" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <div className="page-hero__content">
            <h1>{title}</h1>
            <div className="title-mark" aria-hidden="true" />
            {children ? <p>{children}</p> : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
