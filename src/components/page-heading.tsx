type Props = { index: string; label: string; title: string; accent: string; description: string };

export function PageHeading({ index, label, title, accent, description }: Props) {
  return (
    <section className="page-heading">
      <div className="shell">
        <div className="section-kicker"><span>{index} / {label}</span><span>BRYAN ROUBOS — INDEPENDENT PRACTICE</span></div>
        <h1>{title}<br /><em>{accent}</em></h1>
        <div className="page-heading-bottom"><p>{description}</p><span className="page-heading-mark" aria-hidden="true">✳</span></div>
      </div>
    </section>
  );
}
