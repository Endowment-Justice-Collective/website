import type { Metadata } from "next";
import { InnerPage } from "../site-chrome";

export const metadata: Metadata = { title: "Our History" };

const events = [
  ["1980s", "Students and workers organize against Yale’s investments in apartheid South Africa, building a shantytown on Beinecke Plaza and forcing partial divestment."],
  ["2012", "Fossil Free Yale forms and brings climate divestment back to campus."],
  ["2018", "Fossil Free Yale and Despierta Boricua form the Endowment Justice Coalition around fossil fuels and Puerto Rican debt."],
  ["2018–19", "EJC stages Investments Office sit-ins. Dozens are arrested as hundreds rally in support."],
  ["2019", "Harvard and Yale organizers disrupt The Game. Hundreds pour onto the field; #NobodyWins becomes international news."],
  ["2020–21", "EJC occupies Cross Campus, pushes Yale’s fossil fuel committee, and redirects student activity fees toward New Haven groups."],
  ["2024–now", "The fight expands around weapons, immigration enforcement, climate destruction, transparency, and democratic governance."],
];

export default function History() {
  return <InnerPage
    eyebrow="Our history"
    title={<>A history of endowment activism at Yale</>}
    intro="EJC’s work follows earlier campaigns led by students, workers, alumni, and New Haven organizers."
    tone="cream"
  >
    <section className="content-section">
      <div className="content-grid">
        <p className="content-label">Timeline</p>
        <div className="prose">
          <h2>Major campaigns and actions</h2>
          <div className="timeline">
            {events.map(([year, text]) => <div className="timeline-item" key={year}>
              <time>{year}</time>
              <p>{text}</p>
            </div>)}
          </div>
        </div>
      </div>

      <div className="content-grid" id="research">
        <p className="content-label">Follow the money</p>
        <div className="prose">
          <h2>How we trace Yale&rsquo;s investments</h2>
          <p>There is no complete public list. Organizers build the picture piece by piece across SEC filings, nonprofit disclosures, fund-manager reports, corporate records, news archives, committee minutes, and Yale&rsquo;s own financial statements.</p>
        </div>
      </div>
    </section>
  </InnerPage>;
}
