import Link from "next/link";
import postsData from "@/data/posts.json";
import projectsData from "@/data/projects.json";
import materialsData from "@/data/materials.json";
import type { Post, Project, Material } from "@/data/types";
import { withBasePath } from "@/lib/base-path";

const allPosts = (postsData as Post[]).filter((p) => p.published);
const latestPosts = allPosts
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  .slice(0, 3);

const featuredProjects = (projectsData as Project[])
  .filter((p) => p.featured)
  .sort((a, b) => a.sortOrder - b.sortOrder)
  .slice(0, 3);

const recentMaterials = (materialsData as Material[]).slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(91,164,217,0.08)_0%,_transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-28 md:pt-36">
          <div className="animate-fade-up max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
              Bem-vindo ao meu espaço
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-text-primary md:text-6xl">
              ꓱLIΣꓱЦ ꓯ
              <span className="text-accent">.</span>
            </h1>
            <p className="animation-delay-100 animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Escrevo sobre matemática olímpica, programação e tudo mais que me
              interessa. Aqui você encontra meus artigos, materiais de estudo e
              projetos de código.
            </p>
            <div className="animation-delay-200 animate-fade-up mt-8 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg-primary transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                Ler artigos
              </Link>
              <Link
                href="/sobre"
                className="rounded-lg border border-border-subtle px-6 py-3 text-sm font-semibold text-text-secondary transition-all hover:border-accent-dim hover:text-text-primary"
              >
                Sobre mim
              </Link>
            </div>
          </div>
        </div>
        <div className="glow-line" />
      </section>

      {/* Latest posts */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Blog
            </p>
            <h2 className="mt-1 text-2xl font-bold text-text-primary">
              Artigos recentes
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-text-muted transition-colors hover:text-accent"
          >
            Ver todos →
          </Link>
        </div>

        {latestPosts.length === 0 ? (
          <p className="text-text-muted">Nenhum artigo publicado ainda.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="rounded-xl border border-border-subtle bg-bg-card p-6 transition-all group-hover:border-accent-dim group-hover:bg-bg-card-hover">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags
                      .split(",")
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-text-muted">
                    {new Date(post.createdAt).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>

      <div className="glow-line mx-auto max-w-6xl" />

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Portfólio
            </p>
            <h2 className="mt-1 text-2xl font-bold text-text-primary">
              Projetos em destaque
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-sm text-text-muted transition-colors hover:text-accent"
          >
            Ver todos →
          </Link>
        </div>

        {featuredProjects.length === 0 ? (
          <p className="text-text-muted">Nenhum projeto ainda.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group rounded-xl border border-border-subtle bg-bg-card p-6 transition-all hover:border-accent-dim hover:bg-bg-card-hover"
              >
                <div className="mb-3 flex items-center gap-2 text-accent">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-text-secondary">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack
                    .split(",")
                    .filter(Boolean)
                    .map((t) => (
                      <span
                        key={t}
                        className="rounded bg-bg-primary px-2 py-0.5 text-xs text-text-muted"
                      >
                        {t.trim()}
                      </span>
                    ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-text-muted transition-colors hover:text-accent"
                    >
                      Código →
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-text-muted transition-colors hover:text-accent"
                    >
                      Demo →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <div className="glow-line mx-auto max-w-6xl" />

      {/* Materials preview */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Matemática Olímpica
            </p>
            <h2 className="mt-1 text-2xl font-bold text-text-primary">
              Materiais recentes
            </h2>
          </div>
          <Link
            href="/materiais"
            className="text-sm text-text-muted transition-colors hover:text-accent"
          >
            Ver todos →
          </Link>
        </div>

        {recentMaterials.length === 0 ? (
          <p className="text-text-muted">Nenhum material ainda.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {recentMaterials.map((mat) => (
              <article
                key={mat.id}
                className="rounded-xl border border-border-subtle bg-bg-card p-6 transition-all hover:border-accent-dim hover:bg-bg-card-hover"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {mat.category}
                  </span>
                  {mat.level && (
                    <span className="text-xs text-text-muted">{mat.level}</span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  {mat.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-text-secondary">
                  {mat.description}
                </p>
                {mat.fileUrl && (
                  <a
                    href={withBasePath(mat.fileUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-accent-light"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Baixar PDF
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
