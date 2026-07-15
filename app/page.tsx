import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";
import "./home.css";

export default function Home() {
  return <main>
    <SiteHeader />

    <section className="hero hero-single" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Endowment Justice Collective at Yale</p>
        <h1 id="hero-title">Organizing for a transparent and accountable Yale</h1>
        <p className="hero-dek">EJC is a coalition of students, workers, alumni, and New Haven residents. We research Yale’s investments, advocate for divestment from harmful industries, and organize for democratic oversight of university decisions.</p>
        <div className="hero-actions">
          <Link className="button button-dark" href="/act">Get involved</Link>
          <Link className="text-link" href="/demands">Read our demands</Link>
        </div>
      </div>
    </section>

    <section className="endowment-summary" aria-label="Yale endowment value">
      <div className="stat-label"><span>Yale’s endowment</span><span>June 30, 2025</span></div>
      <div className="ticker-value">$44,100,000,000</div>
      <div className="stat-note"><p>Yale reported an endowment value of $44.1 billion after distributing $2.1 billion to its operating budget during the 2025 fiscal year.</p><a href="https://news.yale.edu/2025/10/24/yale-reports-investment-return-fiscal-2025" target="_blank" rel="noreferrer">Yale’s 2025 report</a></div>
    </section>

    <section className="work section-pad">
      <div className="section-heading"><p className="section-kicker">What EJC does</p><h2>Research, education, and organizing</h2></div>
      <div className="work-grid">
        <article><span>01</span><h3>Research investments</h3><p>We use financial reports, regulatory filings, public records, and reporting to identify Yale’s investments and outside fund managers.</p></article>
        <article><span>02</span><h3>Explain the system</h3><p>We document how the Investments Office, advisory committees, and Yale Corporation make decisions about the endowment.</p></article>
        <article><span>03</span><h3>Organize for change</h3><p>We build coalitions, hold teach-ins, make policy demands, and organize collective action when existing channels fail.</p></article>
      </div>
    </section>

    <section className="demands section-pad" id="demands">
      <div className="section-heading"><p className="section-kicker">Current campaign</p><h2>Our demands</h2></div>
      <div className="demand-grid">
        <article className="demand-card"><span className="demand-number">01</span><h3>Democratize Yale</h3><p>Create meaningful shared governance for students, workers, faculty, alumni, and New Haven residents. Establish a university-wide senate with authority beyond an advisory role and protect the right to organize and protest.</p><Link className="card-link" href="/demands">Read the governance demand</Link></article>
        <article className="demand-card"><span className="demand-number">02</span><h3>Disclose, divest, reinvest</h3><p>Publish Yale’s holdings and outside managers. End investments in extractive and exploitative industries. Commit resources to affected communities, with those communities determining priorities.</p><Link className="card-link" href="/demands">Read the investment demand</Link></article>
      </div>
    </section>

    <section className="proof section-pad">
      <div className="proof-copy">
        <p className="section-kicker">Limited disclosure</p>
        <h2>Most of the endowment cannot be identified through public filings.</h2>
        <p>A February 2024 SEC filing disclosed less than 0.3% of Yale’s endowment. Private funds, limited partnerships, and other structures leave the rest outside that public snapshot.</p>
        <a href="https://yaledailynews.com/blog/2024/04/29/analysis-how-much-does-yale-invest-in-military-weapons-manufacturing/" target="_blank" rel="noreferrer">Read the Yale Daily News analysis</a>
      </div>
      <div className="proof-chart" aria-label="Proportional illustration showing a 0.3 percent disclosed sliver and 99.7 percent kept out of public view">
        <div className="chart-callout"><strong>0.3%</strong><span>disclosed</span><i aria-hidden="true" /></div>
        <div className="chart-bar"><div className="chart-disclosed" aria-hidden="true" /><div className="chart-hidden"><span>99.7%</span><small>outside the public filing</small></div></div>
      </div>
    </section>

    <section className="learn section-pad">
      <div className="section-heading"><p className="section-kicker">Learn more</p><h2>How the endowment works</h2></div>
      <div className="path-list">
        <Link href="/power"><span>Power map</span><strong>Who makes investment decisions at Yale?</strong><em>View</em></Link>
        <Link href="/history"><span>History</span><strong>How did Yale’s investment model develop?</strong><em>View</em></Link>
        <Link href="/history#research"><span>Research</span><strong>How does EJC trace Yale’s investments?</strong><em>View</em></Link>
      </div>
    </section>

    <section className="history-summary section-pad">
      <div><p className="section-kicker">History</p><h2>Endowment activism at Yale</h2></div>
      <div><p>EJC grew from organizing by Fossil Free Yale and Despierta Boricua. Its work also draws on earlier campaigns against Yale’s investments in apartheid South Africa and on decades of worker and community organizing in New Haven.</p><Link className="text-link" href="/history">View the timeline</Link></div>
    </section>

    <section className="join-block">
      <div><p className="section-kicker">Get involved</p><h2>Join a meeting or receive updates.</h2></div>
      <div className="join-actions"><p>New members can contribute to research, political education, coalition outreach, communications, and action planning.</p><Link className="button button-light" href="/act">Ways to participate</Link><a className="text-link" href="mailto:endowmentjustice@yale.edu?subject=Add%20me%20to%20EJC%20updates">Request email updates</a></div>
    </section>

    <SiteFooter />
  </main>;
}
