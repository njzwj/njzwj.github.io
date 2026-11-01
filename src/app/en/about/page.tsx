import AboutPage from "@/app/components/about-page";
export const metadata = { title: "About | RDCG", alternates: { canonical: "/en/about", languages: { "zh-CN": "/about", en: "/en/about" } } };
export default function About() { return <AboutPage locale="en" />; }
