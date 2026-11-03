"use client";

export default function Error({ reset }) {
  return (
    <section className="not-found shell" role="alert">
      <span className="eyebrow">SOMETHING WENT WRONG</span>
      <h1>This page hit<br /><em>a problem.</em></h1>
      <p>Something unexpected happened while loading this page.</p>
      <button type="button" className="button button-primary" onClick={() => reset()}>Try again ↻</button>
    </section>
  );
}
