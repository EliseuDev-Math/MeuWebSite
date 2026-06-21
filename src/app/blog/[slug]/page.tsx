import { notFound } from "next/navigation";
import Link from "next/link";
import postsData from "@/data/posts.json";
import type { Post } from "@/data/types";
import { PostContent } from "@/components/post-content";

const allPosts = postsData as Post[];

export function generateStaticParams() {
  return allPosts
    .filter((p) => p.published)
    .map((post) => ({ slug: post.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post não encontrado" };
  return {
    title: `${post.title} — Blog`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug && p.published);
  if (!post) notFound();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(91,164,217,0.06)_0%,_transparent_50%)]" />
        <div className="mx-auto max-w-3xl px-6 pb-10 pt-20">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-accent"
          >
            ← Voltar ao blog
          </Link>
          <div className="flex flex-wrap gap-2">
            {post.tags
              .split(",")
              .filter(Boolean)
              .map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                >
                  {tag.trim()}
                </span>
              ))}
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-text-primary md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            {new Date(post.createdAt).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="glow-line" />
      </section>

      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="prose-custom">
          <PostContent content={post.content} />
        </div>
      </article>
    </>
  );
}
