import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../header";
import { Container } from "../../_components/container";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/posts";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title + " | Jovan Medford",
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-light text-black">
      <Header className="pt-12" />

      <Container className="pb-24 md:pt-4">
        <article className="mx-auto max-w-3xl mt-8">
          <header className="mt-4 border-b border-black/15 pb-10">
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-black/55">
              <time dateTime={post.publishedAt}>
                Published {formatPostDate(post.publishedAt)}
              </time>
              {post.updatedAt && (
                <time
                  className="border-l border-black/20 pl-3"
                  dateTime={post.updatedAt}
                >
                  Updated {formatPostDate(post.updatedAt)}
                </time>
              )}
            </div>
            <h1 className="mt-3 text-4xl font-bold leading-[1.08] md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-black/70">
              {post.description}
            </p>
          </header>

          <div
            className="article-content mt-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </Container>
    </main>
  );
}
