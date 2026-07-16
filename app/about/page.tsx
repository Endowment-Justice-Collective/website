import type { Metadata } from "next";
import Image from "next/image";
import { InnerPage } from "../site-chrome";
import "./about.css";

export const metadata: Metadata = { title: "About EJC" };

const activityPhotos = [
  { src: "/activities/ejc-stadium-image.jpg", alt: "EJC organizers seated on a stadium field during a public action", caption: "Collective action", className: "activity-wide" },
  { src: "/activities/ejc-protest-image.jpg", alt: "Marchers carrying a Yale Is Complicit banner", caption: "Public protest", className: "activity-standard" },
  { src: "/activities/ejc-banners-image.jpg", alt: "Hand-painted campaign banners arranged outdoors", caption: "Banner making", className: "activity-standard" },
  { src: "/activities/ejc-dwight-image.jpg", alt: "Organizers gathered inside Dwight Hall", caption: "Campus organizing", className: "activity-standard" },
  { src: "/activities/ejc-roundtable-image.jpg", alt: "EJC members seated in a circle during a meeting", caption: "Member meetings", className: "activity-standard" },
  { src: "/activities/ejc-crosscampus-brighter-image.jpg", alt: "Campaign banners installed across Yale's Cross Campus", caption: "Cross Campus installation", className: "activity-wide" },
  { src: "/activities/ejc-cheering-image.jpg", alt: "A group of organizers cheering together indoors", caption: "Building community", className: "activity-standard" },
  { src: "/activities/ejc-crosscampus-image.jpg", alt: "Campaign banners displayed with Yale buildings in the background", caption: "Making demands visible", className: "activity-standard" },
  { src: "/activities/ejc-fireplace-image.jpg", alt: "EJC members posing together after a gathering", caption: "The collective", className: "activity-wide" },
];

export default function About() {
  return <InnerPage
    eyebrow="About EJC"
    title={<>About the collective</>}
    intro="The Endowment Justice Collective is a coalition focused on Yale’s investments, governance, and financial relationship with New Haven."
    tone="cream"
  >
    <section className="content-section">
      <div className="content-grid">
        <p className="content-label">Purpose</p>
        <div className="prose">
          <h2>Our work</h2>
          <p>Climate destruction, militarism, incarceration, displacement, debt, and austerity are connected through institutions and financial decisions. EJC studies those connections within Yale’s endowment.</p>
          <p>Members conduct research, organize teach-ins, build coalitions, develop policy demands, and plan collective action. The group is member-driven and draws on organizing practices developed through earlier divestment movements at Yale.</p>
          <h3>Principles</h3>
          <ul>
            <li>People affected by an investment should have a role in decisions about it.</li>
            <li>Transparency is necessary for public accountability.</li>
            <li>Divestment should be paired with investment in affected communities.</li>
            <li>University governance should include New Haven residents.</li>
            <li>Coalition work connects issues that financial institutions often treat separately.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="activity-section" aria-labelledby="activity-title">
      <header className="activity-heading">
        <p className="content-label">In action</p>
        <div>
          <h2 id="activity-title">Organizing in practice</h2>
          <p>Research becomes political education, public pressure, collective action, and lasting relationships.</p>
        </div>
      </header>
      <div className="activity-gallery">
        {activityPhotos.map(photo => <figure className={photo.className} key={photo.src}>
          <div className="activity-image">
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 66vw" unoptimized />
          </div>
          <figcaption>{photo.caption}</figcaption>
        </figure>)}
      </div>
    </section>
  </InnerPage>;
}
