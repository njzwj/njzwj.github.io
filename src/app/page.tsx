import type { Metadata } from "next";
import Header from "./components/header";

export const metadata: Metadata = {
  title: `RandC0deGen's Blog ｜ RDCG`,
  description: `A blog about web development, programming, and other tech-related topics, by randC0deGen.`,
};

export default function Index() {
  return (
    <section>
      <Header active="Home" />
      <h1>Hi, there!</h1>
    </section>
  );
}
