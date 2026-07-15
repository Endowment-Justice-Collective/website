import type { Metadata } from "next";
import { InnerPage } from "../site-chrome";

export const metadata: Metadata = { title: "Power Map" };

function Connector({ direction, label }: { direction: "down" | "up"; label: string }) {
  return <div className={`map-connector map-connector-${direction}`}><span aria-hidden="true">{direction === "down" ? "↓" : "↑"}</span><small>{label}</small></div>;
}

export default function Power() {
  return <InnerPage
    eyebrow="Power map"
    title={<>How Yale makes investment decisions</>}
    intro="Investment management and ethical review follow different paths. This map shows which bodies advise, which bodies decide, and which bodies execute those decisions."
    tone="dark"
  >
    <section className="content-section power-map-section">
      <header className="map-intro">
        <p className="content-label">Formal structure</p>
        <div><h2>Two paths lead to the Yale Corporation</h2><p>The left side shows who controls the portfolio. The right side shows how an ethical concern can become university policy.</p></div>
      </header>

      <div className="map-legend" aria-label="Diagram legend">
        <span><i className="legend-solid" /> Investment authority</span>
        <span><i className="legend-dotted" /> Ethical recommendation</span>
      </div>

      <div className="governance-map" aria-label="Power map of Yale endowment governance">
        <div className="map-top">
          <span className="map-role">Final policy authority</span>
          <h3>Yale Corporation</h3>
          <p>The Board of Trustees is Yale's senior policy-making body. It adopts investment and ethical investment policy.</p>
        </div>

        <div className="map-lanes">
          <section className="map-lane authority-lane" aria-labelledby="authority-title">
            <h3 id="authority-title">Managing the portfolio</h3>
            <Connector direction="down" label="delegates authority" />
            <div className="map-node">
              <span className="map-role">Decision-making authority</span>
              <h4>Investments Committee</h4>
              <p>Approves the selection and termination of managers and particular investments on behalf of the Corporation.</p>
            </div>
            <Connector direction="down" label="sets policy" />
            <div className="map-node">
              <span className="map-role">Recommends and executes</span>
              <h4>Chief Investment Officer and Yale Investments</h4>
              <p>Recommends and carries out investments under policies established by the Investments Committee.</p>
            </div>
            <Connector direction="down" label="allocates capital" />
            <div className="map-node map-node-terminal">
              <span className="map-role">Controls underlying holdings</span>
              <h4>Third-party investment managers</h4>
              <p>Yale states that its outside managers typically have full control over the investments they manage.</p>
            </div>
          </section>

          <section className="map-lane ethics-lane" aria-labelledby="ethics-title">
            <h3 id="ethics-title">Reviewing ethical concerns</h3>
            <Connector direction="up" label="recommends policy" />
            <div className="map-node">
              <span className="map-role">Corporation committee</span>
              <h4>CCIR</h4>
              <p>The Corporation Committee on Investor Responsibility decides whether to send an ethical investment recommendation to the full Board.</p>
            </div>
            <Connector direction="up" label="advises" />
            <div className="map-node">
              <span className="map-role">Advisory committee</span>
              <h4>ACIR</h4>
              <p>Reviews community requests under <em>The Ethical Investor</em> and can recommend that an investment become ineligible.</p>
            </div>
            <Connector direction="up" label="submits requests" />
            <div className="map-node map-node-terminal">
              <span className="map-role">Entry point</span>
              <h4>Yale community</h4>
              <p>Students, faculty, staff, and alumni can raise ethical investment concerns for ACIR review.</p>
            </div>
          </section>
        </div>
      </div>

      <div className="map-findings">
        <article><h3>Advice is not authority</h3><p>ACIR can investigate and recommend. CCIR can advance a recommendation. The Yale Corporation decides whether the policy is adopted.</p></article>
        <article><h3>New Haven has no formal seat</h3><p>ACIR has designated seats for students, alumni, faculty, and staff. Yale's published structure does not designate a seat for New Haven residents.</p></article>
        <article><h3>Managers add another layer</h3><p>Even after Yale adopts a divestment policy, contractual restrictions and illiquid investments can delay implementation by outside managers.</p></article>
      </div>

      <p className="map-sources">Sources: <a href="https://www.yale.edu/board-trustees/governance-historic-documents/laws" target="_blank" rel="noreferrer">Yale Corporation bylaws</a>, <a href="https://acir.yale.edu/frequently-asked-questions" target="_blank" rel="noreferrer">ACIR frequently asked questions</a>, and <a href="https://investments.yale.edu/the-endowment/" target="_blank" rel="noreferrer">Yale Investments</a>.</p>
    </section>

    <section className="content-section visibility-section">
      <div className="content-grid"><p className="content-label">The visibility gap</p><div className="prose"><h2>Most holdings are not public</h2><div className="fact-row"><div className="fact"><strong>$44.1B</strong><span>Endowment, June 2025</span></div><div className="fact"><strong>&lt;0.3%</strong><span>Publicly disclosed in Feb. 2024 filing</span></div><div className="fact"><strong>99%+</strong><span>Outside that public snapshot</span></div></div><p>Quarterly SEC filings show only part of the portfolio. Private funds, limited partnerships, and other structures keep most holdings outside public filings. <a href="https://yaledailynews.com/blog/2024/04/29/analysis-how-much-does-yale-invest-in-military-weapons-manufacturing/" target="_blank" rel="noreferrer">Read the Yale Daily News analysis</a>.</p></div></div>
    </section>
  </InnerPage>;
}
