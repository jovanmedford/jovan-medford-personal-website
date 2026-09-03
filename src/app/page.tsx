import Link from "next/link";
import Header from "./header";
import { CnTower } from "./_components/cn-tower";

export default function Home() {
  return (
    <>
      <main className="inset-0 absolute bg-light h-screen pt-12 px-8 overflow-hidden">
        <Header />
        <section className="mt-14 mx-auto  flex flex-col md:grid md:grid-cols-12">
          <div
            className="mt-10 md:col-start-3 md:col-end-9"
          >
            <div className="lg:text-left">
              <h1 className="text-2xl lg:text-5xl 2xl:text-6xl font-bold">
                Hey, I'm Jovan Medford
              </h1>
              <h2 className="text-lg mt-1 lg:text-3xl 2xl:text-4xl mb-1">
                I’m a software engineer based in Toronto.
              </h2>
            </div>
            <p className="mt-6 max-w-sm xl:max-w-xl xl:text-md">
              I write about my journey and things I’ve learned in my{" "}
              <a className="underline text-primary-300" href="https://medium.com/@jovanmedford">
                blog
              </a>
              . Also, if you’re curious, you can view my{" "}
              <Link className="underline text-primary-300" href="resume">
                portfolio & resume
              </Link>
              .
            </p>
          </div>
          <CnTower className="md:col-span-4 w-auto mx-auto mt-8 md:mx-0 md:mt-0 h-72 lg:h-80 xl:h-96" />
        </section>
      </main>
    </>
  );
}
