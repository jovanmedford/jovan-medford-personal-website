import Link from "next/link";
import Header from "./header";

export default function Home() {
  return (
    <>
      <main className="inset-0 absolute bg-light h-screen pt-12 px-8">
        <Header />
        <section className="mt-14 mx-auto  flex flex-col md:grid md:grid-cols-12">
          <div
            className="mt-10 md:col-start-3 md:col-end-11
                          2xl:lg:col-start-4  2xl:lg:col-end-10"
          >
            <div className="lg:text-left">
              <h1 className="text-2xl lg:text-5xl font-bold">
                Hey, I'm Jovan Medford
              </h1>
              <h2 className="text-lg mt-1 lg:text-3xl mb-1">
                I’m a software engineer based in Toronto.
              </h2>
            </div>
            <p className="mt-8 max-w-sm">
              I write about my journey and things I’ve learned in my{" "}
              <a className="underline text-primary-300" href="https://medium.com/@jovanmedford">
                blog
              </a>
              . Also, if you’re curious, you can view my{" "}
              <Link className="underline text-primary-300" href="resume">
                resume
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
