import type { Metadata } from "next";
import { InnerPage } from "../site-chrome";
import "./power.css";

export const metadata: Metadata = { title: "Power Map" };

function MapConnector({ direction }: { direction: "up" | "down" }) {
  const points = direction === "down" ? "5 36 10 41 15 36" : "5 8 10 3 15 8";

  return <div className={`map-connector map-connector-${direction}`} aria-hidden="true">
    <svg viewBox="0 0 20 44" focusable="false">
      <path className="map-connector-line" d="M10 0V44" />
      <polyline className="map-connector-head" points={points} />
    </svg>
  </div>;
}

export default function Power() {
  return <InnerPage eyebrow="Power map" title={<>How Yale makes investment decisions</>} intro="Investment management and ethical review follow separate paths. Both end with the Yale Corporation." tone="dark">
    <section className="content-section power-map-section">
      <header className="map-intro"><p className="content-label">Formal structure</p><div><h2>Authority and review</h2><p>Solid lines show investment authority. Dotted lines show ethical recommendations.</p></div></header>
      <div className="governance-map" aria-label="Power map of Yale endowment governance">
        <div className="map-top"><h3>Yale Corporation</h3><p>Adopts investment policy.</p></div>
        <div className="map-lanes">
          <section className="map-lane authority-lane" aria-labelledby="authority-title">
            <h3 id="authority-title">Investment authority</h3>
            <MapConnector direction="down" />
            <div className="map-node"><h4>Investments Committee</h4><p>Approves managers and particular investments.</p></div>
            <MapConnector direction="down" />
            <div className="map-node"><h4>Yale Investments</h4><p>Recommends and executes investment strategy.</p></div>
            <MapConnector direction="down" />
            <div className="map-node"><h4>External managers</h4><p>Control many underlying holdings.</p></div>
          </section>
          <section className="map-lane ethics-lane" aria-labelledby="ethics-title">
            <h3 id="ethics-title">Ethical review</h3>
            <MapConnector direction="up" />
            <div className="map-node"><h4>CCIR</h4><p>Chooses whether to recommend policy to the Corporation.</p></div>
            <MapConnector direction="up" />
            <div className="map-node"><h4>ACIR</h4><p>Reviews requests and advises CCIR.</p></div>
            <MapConnector direction="up" />
            <div className="map-node"><h4>Yale community</h4><p>Submits ethical investment concerns.</p></div>
          </section>
        </div>
      </div>
      <dl className="map-facts"><div><dt>Final decision</dt><dd>Yale Corporation</dd></div><div><dt>ACIR authority</dt><dd>Advisory only</dd></div><div><dt>Formal New Haven seats</dt><dd>None listed</dd></div></dl>
      <p className="map-sources">Sources: <a href="https://www.yale.edu/board-trustees/governance-historic-documents/laws" target="_blank" rel="noreferrer">Yale Corporation bylaws</a>, <a href="https://acir.yale.edu/frequently-asked-questions" target="_blank" rel="noreferrer">ACIR</a>, and <a href="https://investments.yale.edu/the-endowment/" target="_blank" rel="noreferrer">Yale Investments</a>.</p>
    </section>
    <section className="content-section visibility-section"><div className="content-grid"><p className="content-label">The visibility gap</p><div className="prose"><h2>Most holdings are not public</h2><div className="fact-row"><div className="fact"><strong>$44.1B</strong><span>Endowment, June 2025</span></div><div className="fact"><strong>&lt;0.3%</strong><span>Publicly disclosed in Feb. 2024 filing</span></div><div className="fact"><strong>99%+</strong><span>Outside that public snapshot</span></div></div><p>Quarterly SEC filings show only part of the portfolio. Private funds and limited partnerships keep most holdings outside public filings. <a href="https://yaledailynews.com/blog/2024/04/29/analysis-how-much-does-yale-invest-in-military-weapons-manufacturing/" target="_blank" rel="noreferrer">Read the Yale Daily News analysis</a>.</p></div></div></section>
  </InnerPage>;
}
