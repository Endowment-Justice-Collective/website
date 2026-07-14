import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";

const demands = [
  {
    number: "01",
    title: "Democratize",
    copy: "Give students, workers, faculty, alumni, and New Haven residents real power over the decisions that shape our lives, including a university-wide senate with more than advisory authority and protections for protest.",
    href: "/power",
  },
  {
    number: "02",
    title: "Disclose, divest, reinvest",
    copy: "Reveal Yale’s holdings. End investments in extractive and exploitative industries. Move resources toward the communities harmed by those investments, with those communities leading the way.",
    href: "/demands",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="eyebrow">Endowment Justice Collective at Yale</div>
        <h1 id="hero-title">Yale’s money<br />is everyone’s business.</h1>
        <div className="hero-bottom">
          <p className="hero-dek">We organize students, workers, alumni, and New Haven neighbors to make Yale’s wealth answer to people, not profit.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/act">Join the collective <span>↗</span></Link>
            <Link className="text-link" href="#demands">See our demands <span>↓</span></Link>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Yale endowment value">
        <div className="ticker-meta">
          <span>Yale’s endowment</span>
          <span>As of June 30, 2025</span>
        </div>
        <div className="ticker-value">$44,100,000,000</div>
        <div className="ticker-foot">
          <span>Forty-four billion, one hundred million dollars.</span>
          <a href="https://news.yale.edu/2025/10/24/yale-reports-investment-return-fiscal-2025" target="_blank" rel="noreferrer">Source: Yale ↗</a>
        </div>
      </section>

      <section className="statement section-pad">
        <p className="section-kicker">Who we are</p>
        <div>
          <h2>We follow the money and build the power to change where it goes.</h2>
          <p>EJC is a coalition fighting for democratic control, full transparency, and justice in Yale’s investments. The endowment is not a neutral pile of money. It is power: accumulated through land, labor, markets, and the choices Yale makes every day.</p>
          <Link className="arrow-link" href="/about">Meet the collective <span>→</span></Link>
        </div>
      </section>

      <section className="demands section-pad" id="demands">
        <div className="section-intro">
          <p className="section-kicker">What we demand</p>
          <h2>Money this powerful must answer to people.</h2>
        </div>
        <div className="demand-grid">
          {demands.map((demand) => (
            <article className="demand-card" key={demand.number}>
              <span className="demand-number">{demand.number}</span>
              <h3>{demand.title}</h3>
              <p>{demand.copy}</p>
              <Link className="card-link" href={demand.href}>Read the demand <span>↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="proof section-pad">
        <div className="proof-quote">
          <p>Yale publicly disclosed less than <strong>0.3%</strong> of its endowment in a February 2024 filing.</p>
          <a href="https://yaledailynews.com/blog/2024/04/29/analysis-how-much-does-yale-invest-in-military-weapons-manufacturing/" target="_blank" rel="noreferrer">See the reporting ↗</a>
        </div>
        <div className="proof-chart" aria-label="Proportional illustration showing a 0.3 percent disclosed sliver and 99.7 percent kept out of public view">
          <div className="chart-callout"><strong>0.3%</strong><span>disclosed</span><i aria-hidden="true" /></div>
          <div className="chart-bar">
            <div className="chart-disclosed" aria-hidden="true" />
            <div className="chart-hidden"><span>99.7%</span><small>kept out of public view</small></div>
          </div>
        </div>
      </section>

      <section className="pathways section-pad">
        <div className="section-intro compact">
          <p className="section-kicker">Understand the system</p>
          <h2>Opacity is a strategy.<br />So is learning the map.</h2>
        </div>
        <div className="path-list">
          <Link href="/power"><span>01</span><strong>Who actually makes investment decisions?</strong><em>Power map ↗</em></Link>
          <Link href="/history"><span>02</span><strong>How did Yale’s investment model get here?</strong><em>Endowment history ↗</em></Link>
          <Link href="/history#research"><span>03</span><strong>How do organizers trace hidden investments?</strong><em>Follow the money ↗</em></Link>
        </div>
      </section>

      <section className="history-strip">
        <div className="history-copy">
          <p className="section-kicker">A movement with a memory</p>
          <h2>From shantytowns to the Yale Bowl.</h2>
          <p>Decades of student, worker, and community organizing have forced Yale to confront the consequences of its investments. EJC carries that history forward.</p>
          <Link className="button button-light" href="/history">Explore the timeline <span>→</span></Link>
        </div>
        <div className="history-years" aria-hidden="true"><span>1986</span><span>2018</span><span>2019</span><span>NOW</span></div>
      </section>

      <section className="join-block" id="join">
        <div>
          <p className="section-kicker">The endowment is powerful. So are we.</p>
          <h2>There is a place<br />for you in this fight.</h2>
        </div>
        <div className="join-actions">
          <p>Come to a meeting, join a research team, help plan an action, or simply get the next update.</p>
          <Link className="button button-accent" href="/act">Get involved <span>↗</span></Link>
          <a className="button button-outline-light" href="mailto:endowmentjustice@yale.edu?subject=Add%20me%20to%20EJC%20updates">Get email updates <span>→</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
