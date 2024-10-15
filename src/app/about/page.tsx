import clsx from "clsx";
import { Metadata } from "next";
import { BLOG_NAME } from "@/lib/constants";
import { Header, Footer, Body } from "@/app/components";

const resumeTitleStyles = "font-semibold text-gray-500 basis-full text-sm m-0 md:text-right md:basis-1/3 md:pr-2 md:mt-1";
const whereStyles = "text-sm text-green-500";
const resumeContentStyles = "text-foreground border-gray-400 basis-full mt-1 mb-2 text-sm pl-2 md:basis-2/3 md:border-l";

export default async function About() {
  return (
    <section>
      <Header active="About" />
      <Body>
        <article className="max-w-2xl mx-auto md-20">
          <div className="flex flex-col items-center w-full">
            <img
              src="assets/about/me.png"
              alt="Avatar"
              className="rounded-full shadow-2xl max-w-48 object-cover border-4 border-white border-solid"
            />
            <h2 className="mt-4 text-2xl font-bold text-center">randc0degen</h2>
            <span className="text-gray-500">
              Developing, photographing, road cycling.
            </span>
            <div id="resume" className="w-full mt-4 flex flex-row flex-wrap">
              <div className={clsx(resumeTitleStyles)}>Mar. '22</div>
              <div className={resumeContentStyles}>
                <h3 className="font-bold">Software Engineer</h3>
                <span className={whereStyles}>MSFT STCA | Suzhou, China</span>
                <p>Developing applications with .NET, React, js.</p>
                <p>GPT based chatbot with function calls and chat interface.</p>
              </div>
              <div className={clsx(resumeTitleStyles)}>Sep. '19 ~ Mar. '22</div>
              <div className={resumeContentStyles}>
                <h3 className="font-bold">Masters in Computer Science</h3>
                <span className={whereStyles}>NWPU | Xi'an, China</span>
                <p>Computer vision and machine learning on medical X-ray images, CT, and MRI.</p>
                <p>Developed fast and high quality x-ray image stitching system.</p>
              </div>
              <div className={clsx(resumeTitleStyles)}>Sep. '15 ~ Jul. '19</div>
              <div className={resumeContentStyles}>
                <h3 className="font-bold">Bachelor of Engineering</h3>
                <span className={whereStyles}>NWPU | Xi'an, China</span>
                <p>ICPC Asia Regional with several medals thanks to teammates.</p>
              </div>
            </div>
          </div>
        </article>
      </Body>
      <Footer />
    </section>
  );
}

export function generateMetadata(): Metadata {
  const title = `About me | ${BLOG_NAME}`;

  return {
    title,
  };
}

export async function generateStaticParams() {
  return [{}];
}
