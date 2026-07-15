import type { Metadata } from "next";
import { InnerPage } from "../site-chrome";
import "./power.css";

export const metadata: Metadata = { title: "Power Map" };

const authorityPath = [
  ["Yale Corporation", "Adopts investment policy."],
  ["Investments Committee", "Approves managers and particular investments."],
  ["Yale Investments", "Recommends and executes investment strategy."],
  ["External managers", "Control many underlying holdings."],
];

const ethicsPath = [
  ["Yale community", "Submits ethical investment concerns."],
  ["ACIR", "Reviews requests and advises CCIR."],
  ["CCIR", "Chooses whether to recommend policy to the Corporation."],
  ["Yale Corporation", "Makes the final policy decision."],
];

function DecisionPath({ id, label, note, steps, className }: {
  id: string;
  label: string;
  note: string;
  steps: string[][];
  className: string;
}) {
  return <section className={`map-lane ${className}`} aria-labelledby={id}>
    <header className="map-lane-header">
      <p>{note}</p>
      <h3 id={id}>{label}</h3>
    </header>
    <ol className="map-path">
      {steps.map(([name, description], index) => <li key={name}>
        <span className="map-step">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </li>)}
    </ol>
  </section>;
}

export default function Power() {
  return <InnerPage eyebrow="Power map" title={<>How Yale makes investment decisions</>} intro="Investment management and ethical review follow separate paths. Both end with the Yale Corporation." tone="dark">
    <section className="content-section power-map-section">
      <header className="map-intro">
        <p className="content-label">Formal structure</p>
        <div>
          <h2>Two paths to a final decision</h2>
          <p>Each column reads from top to bottom. Investment authority is delegated; ethical concerns move through review and recommendation.</p>
        </div>
      </header>
      <div className="governance-map" aria-label="Decision paths for Yale endowment governance">
        <div className="map-lanes">
          <DecisionPath id="authority-title" label="Investment authority" note="Delegated control" steps={authorityPath} className="authority-lane" />
          <DecisionPath id="ethics-title" label="Ethical review" note="Community to Corporation" steps={ethicsPath} className="ethics-lane" />
        </div>
      </div>
      <dl className="map-facts"><div><dt>Final decision</dt><dd>Yale Corporation</dd></div><div><dt>ACIR authority</dt><dd>Advisory only</dd></div><div><dt>Formal New Haven seats</dt><dd>None listed</dd></div></dl>
      <p className="map-sources">Sources: <a href="https://www.yale.edu/board-trustees/governance-historic-documents/laws" target="_blank" rel="noreferrer">Yale Corporation bylaws</a>, <a href="https://acir.yale.edu/frequently-asked-questions" target="_blank" rel="noreferrer">ACIR</a>, and <a href="https://investments.yale.edu/the-endowment/" target="_blank" rel="noreferrer">Yale Investments</a>.</p>
    </section>
    <section className="content-section visibility-section"><div className="content-grid"><p className="content-label">The visibility gap</p><div className="prose"><h2>Most holdings are not public</h2><div className="fact-row"><div className="fact"><strong>$44.1B</strong><span>Endowment, June 2025</span></div><div className="fact"><strong>&lt;0.3%</strong><span>Publicly disclosed in Feb. 2024 filing</span></div><div className="fact"><strong>99%+</strong><span>Outside that public snapshot</span></div></div><p>Quarterly SEC filings show only part of the portfolio. Private funds and limited partnerships keep most holdings outside public filings. <a href="https://yaledailynews.com/blog/2024/04/29/analysis-how-much-does-yale-invest-in-military-weapons-manufacturing/" target="_blank" rel="noreferrer">Read the Yale Daily News analysis</a>.</p></div></div></section>
  </InnerPage>;
}
