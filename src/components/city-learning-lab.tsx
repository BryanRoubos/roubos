"use client";

import { useState } from "react";

type Choice = "help" | "question" | "refuse";
type Character = {
  id: string;
  name: string;
  role: string;
  caution: number;
  empathy: number;
  trust: number;
  goal: string;
};
const characters: Character[] = [
  { id: "keeper", name: "The Keeper", role: "Checkpoint guard", caution: 8, empathy: 4, trust: 3, goal: "Keep the checkpoint secure" },
  { id: "runner", name: "The Runner", role: "District messenger", caution: 3, empathy: 8, trust: 6, goal: "Help people reach safety" },
];
const choices: { id: Choice; label: string }[] = [
  { id: "help", label: "Offer help" },
  { id: "question", label: "Ask questions" },
  { id: "refuse", label: "Refuse entry" },
];
const clamp = (n: number) => Math.max(0, Math.min(10, n));
function decide(character: Character, danger: number, familiarity: number) {
  // Transparent, hand-written rules. No trained ML model is involved.
  const help = character.empathy * 1.5 + familiarity * 1.2 + character.trust * .5 - danger * 1.2;
  const question = character.caution * 1.1 + (10 - familiarity) * .5 + danger * .4;
  const refuse = character.caution * .7 + danger * 1.4 - character.empathy * .55 - familiarity * .7;
  const scores = { help, question, refuse };
  const ranked = choices.map(choice => ({ ...choice, score: scores[choice.id] }))
    .sort((a, b) => b.score - a.score);
  const winner = ranked[0];
  const reasons = [
    character.empathy >= 7 ? "High empathy increases willingness to help." : "Empathy contributes to the choice.",
    character.caution >= 7 ? "High caution makes the character more reluctant to act immediately." : "Caution affects how quickly the character acts.",
    familiarity >= 7 ? "The stranger is familiar, which makes helping more attractive." : familiarity <= 3 ? "The stranger is unfamiliar, increasing uncertainty." : "Some familiarity adds context.",
    danger >= 7 ? "The situation appears dangerous, increasing caution and refusal." : danger <= 3 ? "The situation seems relatively safe." : "Risk remains part of the decision.",
  ];
  return { winner, ranked, reasons };
}

export function CityLearningLab() {
  const [selected, setSelected] = useState(characters[0].id);
  const [danger, setDanger] = useState(5);
  const [familiarity, setFamiliarity] = useState(3);
  const [run, setRun] = useState(1);
  const character = characters.find(c => c.id === selected) ?? characters[0];
  const result = decide(character, danger, familiarity);
  return (
    <section className="city-lab character-lab" aria-label="Interactive character decision simulation">
      <div className="lab-head"><span>FIELD STUDY / 001</span><span className="lab-live"><i /> RUNS IN YOUR BROWSER</span></div>
      <div className="lab-title">
        <div><span className="lab-eyebrow">FANTASY WORLD AI LAB / RULE-BASED PROTOTYPE</span><h3>Same situation. Different choices.</h3></div>
        <span className="lab-version">SIMULATION / V0.1</span>
      </div>
      <p className="lab-description">A stranger asks to pass through a checkpoint. Change the character and the circumstances to see how explicit decision rules affect the outcome. The characters and attributes below are synthetic examples, not established story canon.</p>
      <div className="character-lab-grid">
        <div className="character-lab-panel">
          <span className="character-lab-label">01 / CHARACTER</span>
          <label className="character-lab-field">Choose a character
            <select value={selected} onChange={e => { setSelected(e.target.value); setRun(n => n + 1); }}>
              {characters.map(c => <option key={c.id} value={c.id}>{c.name} — {c.role}</option>)}
            </select>
          </label>
          <p className="character-lab-goal"><span>GOAL</span>{character.goal}</p>
          <dl className="character-lab-traits">
            <div><dt>Caution</dt><dd>{character.caution}/10</dd><meter min="0" max="10" value={character.caution} aria-label="Caution" /></div>
            <div><dt>Empathy</dt><dd>{character.empathy}/10</dd><meter min="0" max="10" value={character.empathy} aria-label="Empathy" /></div>
            <div><dt>Trust</dt><dd>{character.trust}/10</dd><meter min="0" max="10" value={character.trust} aria-label="Trust" /></div>
          </dl>
        </div>
        <div className="character-lab-panel">
          <span className="character-lab-label">02 / SITUATION</span>
          <p className="character-lab-scenario">A stranger approaches the checkpoint and asks for help crossing to the other district.</p>
          <label className="character-lab-field">Perceived danger <strong>{danger}/10</strong>
            <input type="range" min="0" max="10" step="1" value={danger} onChange={e => setDanger(clamp(Number(e.target.value)))} />
          </label>
          <label className="character-lab-field">Familiarity with stranger <strong>{familiarity}/10</strong>
            <input type="range" min="0" max="10" step="1" value={familiarity} onChange={e => setFamiliarity(clamp(Number(e.target.value)))} />
          </label>
          <button className="character-lab-action" type="button" onClick={() => setRun(n => n + 1)}>Simulate decision ↗</button>
        </div>
        <div className="character-lab-panel character-lab-result">
          <span className="character-lab-label">03 / DECISION · RUN {run}</span>
          <div aria-live="polite"><span className="character-lab-result-caption">RULE-BASED CHOICE</span><h4>{result.winner.label}</h4></div>
          <p className="character-lab-why">The action with the highest score under the current hand-written rules.</p>
          <div className="character-lab-options">{result.ranked.map(c => (
            <div key={c.id} className={c.id === result.winner.id ? "character-lab-option chosen" : "character-lab-option"}>
              <span>{c.label}</span><strong>{c.score.toFixed(1)}</strong>
            </div>
          ))}</div>
        </div>
      </div>
      <div className="character-lab-explain">
        <span className="character-lab-label">WHY THIS HAPPENED</span>
        <ul>{result.reasons.map(reason => <li key={reason}>{reason}</li>)}</ul>
        <p>These scores come from an understandable rule system, not measured probabilities. The next steps in my ML roadmap are to generate decision datasets, train predictive models and compare them against these rules.</p>
      </div>
      <p className="lab-note">Demonstration uses fictional sample profiles and deterministic scoring. No trained machine-learning model, personality inference, or real-time learning is claimed.</p>
    </section>
  );
}
