import Link from "next/link";
import postsData from "@/data/posts.json";
import type { Post } from "@/data/types";

const allPosts = (postsData as Post[])
  .filter((p) => p.published)
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

const allTags = Array.from(
  new Set(
    allPosts.flatMap((p) =>
      p.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    )
  )
);

export const metadata = {
  title: "Blog — ꓱLIΣꓱЦ ꓯ",
  description: "Artigos sobre matemática, programação e mais.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(91,164,217,0.06)_0%,_transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Blog
          </p>
          <h1 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
            Artigos &amp; Reflexões
          </h1>
          <p className="mt-3 max-w-xl text-text-secondary">
            Textos sobre matemática olímpica, ciência da computação,
            programação e ideias que me movem.
          </p>
        </div>
        <div className="glow-line" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {allTags.length > 0 && (
          <div className="mb-10 flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border-subtle bg-bg-card px-3 py-1 text-xs font-medium text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {allPosts.length === 0 ? (
          <div className="rounded-xl border border-border-subtle bg-bg-card p-12 text-center">
            <p className="text-text-muted">
              Nenhum artigo publicado ainda. Em breve!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {allPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="rounded-xl border border-border-subtle bg-bg-card p-6 transition-all group-hover:border-accent-dim group-hover:bg-bg-card-hover md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap gap-2">
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
                      <h2 className="text-xl font-semibold text-text-primary transition-colors group-hover:text-accent">
                        {post.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">
                        {post.excerpt}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm text-text-muted md:ml-8">
                      {new Date(post.createdAt).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
