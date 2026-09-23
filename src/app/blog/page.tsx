import type { Metadata } from "next";
import Link from "next/link";
import Header from "../header";
import { Container } from "../_components/container";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing | Jovan Medford",
  description: "Notes on software engineering, learning, and building products.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-light text-black">
      <Header className="md:pt-12" />

      <Container className="pb-24">
        <div className="max-w-3xl">

          <section aria-label="Articles" className="divide-y divide-black/15">
            {posts.map((post) => (
              <article key={post.slug} className="py-10">
                <time
                  className="text-sm text-black/55"
                  dateTime={post.publishedAt}
                >
                  {formatPostDate(post.publishedAt)}
                </time>
                <h2 className="mt-2 text-2xl font-bold leading-snug md:text-3xl">
                  <Link
                    href={"/blog/" + post.slug}
                    className="transition-colors hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-7 text-black/70">
                  {post.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/15 px-2.5 py-1 text-xs uppercase tracking-wide text-black/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </section>
        </div>
      </Container>
    </main>
  );
}
