import Link from "next/link";

export function Mark() {
  return <span className="mark" aria-hidden="true"><i /><i /><i /></span>;
}

export function SiteHeader() {
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="Endowment Justice Collective home"><Mark /><span><b>Endowment Justice</b><b>Collective</b></span></Link>
    <nav aria-label="Primary navigation"><Link href="/demands">Demands</Link><Link href="/power">Power map</Link><Link href="/history">History</Link><Link href="/news">News</Link></nav>
    <Link className="header-cta" href="/act">Get involved <span>↗</span></Link>
    <details className="mobile-menu"><summary aria-label="Open menu"><span /><span /></summary><div><Link href="/demands">Demands</Link><Link href="/power">Power map</Link><Link href="/history">History</Link><Link href="/news">News</Link><Link href="/about">About EJC</Link><Link href="/act">Get involved ↗</Link></div></details>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-brand"><Mark /><p>Endowment Justice<br />Collective at Yale</p></div>
    <div className="footer-links"><div><span>Explore</span><Link href="/demands">Demands</Link><Link href="/power">Power map</Link><Link href="/history">History</Link></div><div><span>Connect</span><Link href="/act">Get involved</Link><a href="mailto:endowmentjustice@yale.edu">Email us</a><a href="https://www.instagram.com/yaleendowmentjustice/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div>
    <div className="footer-note"><span>New Haven, Connecticut</span><span>Built for people, not profit.</span></div>
  </footer>;
}

export function InnerPage({ eyebrow, title, intro, children, tone = "cream" }: { eyebrow: string; title: React.ReactNode; intro: string; children: React.ReactNode; tone?: "cream" | "blue" | "dark" }) {
  return <main className={`inner-page tone-${tone}`}><SiteHeader /><header className="inner-hero"><p className="section-kicker">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></header>{children}<SiteFooter /></main>;
}
