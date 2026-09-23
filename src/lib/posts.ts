import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostSummary = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
};

export type Post = PostSummary & {
  content: string;
};

type PostFrontmatter = Omit<PostSummary, "slug"> & {
  draft?: boolean;
};

function readPostFile(fileName: string) {
  const slug = fileName.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, fileName);
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  };
}

export function getAllPosts(): PostSummary[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readPostFile)
    .filter(({ frontmatter }) => !frontmatter.draft)
    .map(({ slug, frontmatter }) => ({
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      publishedAt: frontmatter.publishedAt,
      updatedAt: frontmatter.updatedAt,
      tags: frontmatter.tags ?? [],
    }))
    .sort(
      (first, second) =>
        new Date(second.publishedAt).getTime() -
        new Date(first.publishedAt).getTime(),
    );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fileName = slug + ".md";

  if (!fs.existsSync(path.join(postsDirectory, fileName))) {
    return null;
  }

  const { frontmatter, content } = readPostFile(fileName);

  if (frontmatter.draft) {
    return null;
  }

  const renderedContent = await remark().use(html).process(content);

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    publishedAt: frontmatter.publishedAt,
    updatedAt: frontmatter.updatedAt,
    tags: frontmatter.tags ?? [],
    content: renderedContent.toString(),
  };
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));
}
