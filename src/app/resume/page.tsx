"use client";

import experience from "./experience.json";
import { useEffect, useRef, useState, useContext, createContext } from "react";
import { RefsContext } from "./refs-context";
import Toc from "./toc";

interface ExperienceItem {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate?: string;
  description: string;
}

interface ResumeSectionProps {
  sectionId: string;
  title: string;
  children: React.ReactNode;
}

const addToRefs = (refs) => {
  return function (el) {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
};

let ResumeSection = ({ sectionId, title, children }: ResumeSectionProps) => {
  const sectionRefs = useContext(RefsContext);
  return (
    <section
      id={sectionId}
      ref={addToRefs(sectionRefs)}
      className="min-h-96 mb-40"
    >
      <h2 className="text-xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
};

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "-40%",
  threshold: 0.1,
};

let experienceList = experience.map((item: ExperienceItem) => (
  <li
    key={item.company}
    className="bg-gradient-to-r from-primary-500 to-primary-300 py-4 px-8 rounded-md mb-8"
  >
    <div className="flex gap-2">
      <h3 className="font-bold mb-2">{item.company}</h3>
      <span className="opacity-60">{item.jobTitle}</span>
    </div>
    <p>{item.description}</p>
  </li>
));

const handleIntersection = (setActiveItem: (arg0: string) => void) => {
  return function ([entry]: IntersectionObserverEntry[]) {
    if (entry.isIntersecting) {
      console.log(entry.target.id)
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
            <h1 className="text-2xl mb-8 font-bold uppercase">Resume</h1>
            <nav>
              <Toc activeItem={activeItem}></Toc>
            </nav>
          </div>
          <div className="col-start-1 md:col-start-4 md:col-end-12 mt-16">
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
            </RefsContext.Provider>
          </div>
        </div>
      </main>
    </>
  );
}
