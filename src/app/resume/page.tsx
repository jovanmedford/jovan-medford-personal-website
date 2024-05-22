"use client";

import experience from "./experience.json";
import projects from "./projects.json";
import {
  useEffect,
  useRef,
  useState,
  useContext,
  MutableRefObject,
} from "react";
import { RefsContext } from "./refs-context";
import { addToRefs } from "../utils";
import { Button } from "@chakra-ui/react";
import Toc from "./toc";
import Header from "../logo";

interface ExperienceItem {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate?: string;
  description: string;
  href?: string;
}

interface ProjectItem {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  href?: string;
}

interface ResumeSectionProps {
  sectionId: string;
  title: string;
  children: React.ReactNode;
}

let ResumeSection = ({ sectionId, title, children }: ResumeSectionProps) => {
  const sectionRefs = useContext(RefsContext) as unknown as MutableRefObject<
    Element[]
  >;
  return (
    <section
      id={sectionId}
      ref={addToRefs(sectionRefs)}
      className="mb-16 md:min-h-96 md:mb-40 lg:min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-2 md:mb-8">{title}</h2>
      {children}
    </section>
  );
};

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "-30%",
  threshold: 0.1,
};

let experienceList = experience.map((item: ExperienceItem) => (
  <li
    key={item.company}
    className="-ml-4 hover:bg-gradient-to-r from-primary-500 to-primary-300 py-4 px-4 rounded-md mb-8 md:flex"
  >
    <div className="justify-self-center min-w-36">
      <span className="pr-4">
        {item.startDate} - {item.endDate ? item.endDate : "PRESENT"}
      </span>
    </div>
    <div>
      <div className="flex gap-2">
        <h3 className="font-bold mb-2">{item.jobTitle} | </h3>
        <span>{item.company}</span>
      </div>
      <p>{item.description}</p>
    </div>
  </li>
));

let projectList = projects.map((project: ProjectItem) => (
  <li key={project.title} className="mb-8">
    <div className="flex gap-2">
      <h3 className="font-bold mb-2">{project.title}</h3>
      <span>
        ({project.startDate} - {project.endDate ? project.endDate : "PRESENT"})
      </span>
    </div>
    <p>{project.description}</p>
  </li>
));

const handleIntersection = (setActiveItem: (arg0: string) => void) => {
  return function (entries: IntersectionObserverEntry[]) {
    let entry = entries.find((entry) => entry.isIntersecting);
    if (entry) {
      console.log(entry.target.id);
      setActiveItem(entry.target.id);
    }
  };
};

export default function Resume() {
  const sectionRefs = useRef([]);
  const [activeItem, setActiveItem] = useState("skills");
  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersection(setActiveItem),
      options
    );
    sectionRefs.current.forEach((element) => observer.observe(element));
    return () =>
      sectionRefs.current.forEach((element) => observer.unobserve(element));
  }, [sectionRefs]);

  return (
    <>
      <main className="py-8 bg-gradient-to-r from-primary-700 to-primary-500 text-light">
        <div className="grid grid-cols-1 md:grid-cols-12 mt-8 mx-8">
          <div className="hidden md:block md:sticky md:top-16 md:self-start col-start-1 col-end-3">
            <Header></Header>
            <h1 className="text-2xl mb-8 font-bold uppercase">Resume</h1>
            <nav>
              <Toc activeItem={activeItem}></Toc>
              {/* <Button className="mt-20">Download PDF</Button> */}
            </nav>
          </div>
          <div className="col-start-1 md:col-start-4 md:col-end-12 mt-16 md:mt-40">
            <RefsContext.Provider value={sectionRefs}>
              <ResumeSection title="Skills" sectionId="skills">
                <p className="mb-4">
                  Typescript, Javascript, SQL, Docker, Git, GraphQL, Java,
                  Python, C
                </p>
                <p>
                  <span className="font-bold">Frameworks:</span>Lit, Nest.js,
                  Next.js, React{" "}
                </p>
              </ResumeSection>
              <ResumeSection title="Experience" sectionId="work-experience">
                <ul>{experienceList}</ul>
              </ResumeSection>
              <ResumeSection title="Projects" sectionId="projects">
                <ul>{projectList}</ul>
              </ResumeSection>
              <ResumeSection title="Education" sectionId="education">
                <ul>
                  <li>
                    MSc Computer Science, Georgia Institute of Technology
                    (2021-2023)
                  </li>
                  <li>
                    BSc Mathematical Finance, University of Waterloo (2016-2020)
                  </li>
                </ul>
              </ResumeSection>
            </RefsContext.Provider>
          </div>
        </div>
      </main>
    </>
  );
}
