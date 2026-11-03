import Link from "next/link";

type Props = { number: string; label: string; title: string; description?: string; href?: string; action?: string };

export function SectionTitle({ number, label, title, description, href, action }: Props) {
  return (
    <div className="section-title">
      <div className="section-title-meta"><span>{number} / {label}</span>{href && <Link href={href}>{action || "Explore"} <span aria-hidden="true">↗</span></Link>}</div>
      <div className="section-title-main"><h2>{title}</h2>{description && <p>{description}</p>}</div>
    </div>
  );
}
