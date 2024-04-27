import Image from "next/image";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav><Link href="Home">Home</Link></nav>
      <main className="inset-0 absolute bg-primary-200 h-screen lg:grid lg:grid-cols-12">
        <section className="mt-14 max-w-72 bg-light mx-auto py-12 px-10 flex flex-col items-center
                          rounded-sm drop-shadow-2xl
                          lg:col-start-3 lg:col-end-11 lg:w-full lg:py-12
                          2xl:lg:col-start-4  2xl:lg:col-end-10
                          lg:h-fit lg:max-w-full lg:grid lg:grid-cols-8 lg:grid-rows-1
                          ">
          <div className="flex justify-center relative max-w-28 lg:col-start-6 lg:col-end-8 lg:max-w-40">
            <Image
              alt="Jovan Medford portrait"
              width={350}
              height={350}
              src="/jovan-portrait.png"></Image>
            <div className="h-5/6 absolute -z-10 top-1/3 left-1/3 bg-primary-200 opacity-35 aspect-square"></div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-start-1 lg:col-end-5 lg:row-start-1">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl lg:text-5xl font-bold">Jovan Medford</h1>
              <h2 className="text-md mt-1 lg:text-3xl mb-1 font-bold text-primary-300">Software Engineer</h2>
              <span>Building for the challenge and the artistry. </span>
            </div>
            <div className="mt-4 flex flex-col lg:flex-row lg:mt-3 gap-4">
              <Button variant='outline'>Resume</Button>
              <Button>Contact</Button>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
