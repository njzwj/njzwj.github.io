import type { Locale } from "@/lib/locale";
import { Header, Footer, Body } from "@/app/components";


export default function About({ locale = "zh" }: { locale?: Locale }) {
  return <>
    <Header active="About" locale={locale} />
    <Body locale={locale}>
      <article className="about" lang="en">
        <p className="eyebrow">{locale === "en" ? "ABOUT" : "ABOUT / 关于"}</p>
        <div className="about-top">
          <div><h1>I'm randc0degen.</h1><p className="about-lead">Developing, photographing,<br />and exploring by bicycle.</p></div>
          <img src="/assets/about/me.png" alt="randc0degen's avatar" width="88" height="88" />
        </div>
        <p className="about-lead" lang={locale === "en" ? "en" : "zh-CN"}>{locale === "en" ? "A place for observations, journeys, and photographs." : "在这里，记录生活中的观察、旅途与影像。"}</p>
        <h2>Experience & education</h2>
        <section className="resume-item">
          <p className="resume-date">Mar 2022</p>
          <div><h3>Software Engineer</h3><p className="resume-place">MSFT STCA · Suzhou, China</p><p>Developing applications with .NET, React and JavaScript. Building GPT chat interfaces with function calls.</p></div>
        </section>
        <section className="resume-item">
          <p className="resume-date">Sep 2019 — Mar 2022</p>
          <div><h3>Master's in Computer Science</h3><p className="resume-place">NWPU · Xi'an, China</p><p>Computer vision and machine learning for medical X-ray images, CT and MRI. Developed an X-ray image stitching system.</p></div>
        </section>
        <section className="resume-item">
          <p className="resume-date">Sep 2015 — Jul 2019</p>
          <div><h3>Bachelor of Engineering</h3><p className="resume-place">NWPU · Xi'an, China</p><p>ICPC Asia Regional medals, earned together with my teammates.</p></div>
        </section>
      </article>
    </Body>
    <Footer />
  </>;
}
