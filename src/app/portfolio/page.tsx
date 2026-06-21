import projectsData from "@/data/projects.json";
import type { Project } from "@/data/types";

const allProjects = (projectsData as Project[]).sort(
  (a, b) => a.sortOrder - b.sortOrder
);

export const metadata = {
  title: "Portfólio — ꓱLIΣꓱЦ ꓯ",
  description: "Projetos de programação e desenvolvimento.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(91,164,217,0.06)_0%,_transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Portfólio
          </p>
          <h1 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
            Meus Projetos
          </h1>
          <p className="mt-3 max-w-xl text-text-secondary">
            Uma coleção dos projetos que construí — de aplicações web a
            ferramentas, algoritmos e experimentos.
          </p>
        </div>
        <div className="glow-line" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {allProjects.length === 0 ? (
          <div className="rounded-xl border border-border-subtle bg-bg-card p-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-3xl">
              💻
            </div>
            <p className="text-text-muted">Projetos chegando em breve!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {allProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col rounded-xl border border-border-subtle bg-bg-card p-6 transition-all hover:border-accent-dim hover:bg-bg-card-hover md:p-8"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
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
                  {project.featured && (
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      Destaque
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {project.longDescription || project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack
                    .split(",")
                    .filter(Boolean)
                    .map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border-subtle bg-bg-primary px-2 py-0.5 text-xs text-text-muted"
                      >
                        {t.trim()}
                      </span>
                    ))}
                </div>

                <div className="mt-5 flex gap-4 border-t border-border-subtle pt-4">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Código fonte
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      Ver demo
                    </a>
                  )}
                  {!project.repoUrl && !project.liveUrl && (
                    <span className="text-xs text-text-muted italic">
                      Links em breve
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
