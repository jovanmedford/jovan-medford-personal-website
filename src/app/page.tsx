import Header from "./header";
import { CnTower } from "./_components/cn-tower";
import { Container } from "./_components/container";

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
      <Header className="pt-12" />

      <section aria-labelledby="banner-title">
        <Container className="pb-16 pt-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h1
              id="banner-title"
              className="text-5xl font-bold leading-none md:text-[4rem]"
            >
              Jovan Medford
            </h1>
            <p className="mt-3">
              Software engineer building great products and solving hard problems.
            </p>
            <CnTower className="mt-6 h-80 w-auto max-w-full" />
          </div>
        </Container>
      </section>
    </main>
  );
}
