import materialsData from "@/data/materials.json";
import type { Material } from "@/data/types";
import { withBasePath } from "@/lib/base-path";

const allMaterials = materialsData as Material[];

const grouped: Record<string, Material[]> = {};
for (const mat of allMaterials) {
  if (!grouped[mat.category]) grouped[mat.category] = [];
  grouped[mat.category].push(mat);
}
const categories = Object.keys(grouped);

export const metadata = {
  title: "Materiais de Matemática Olímpica — Seu Nome",
  description: "PDFs, listas e materiais de estudo para olimpíadas de matemática.",
};

export default function MateriaisPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(91,164,217,0.06)_0%,_transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Matemática Olímpica
          </p>
          <h1 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
            Materiais de Estudo
          </h1>
          <p className="mt-3 max-w-xl text-text-secondary">
            Listas de exercícios, apostilas, soluções e materiais que preparei
            ou curei ao longo da minha jornada em olimpíadas de matemática.
          </p>
        </div>
        <div className="glow-line" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {categories.length === 0 ? (
          <div className="rounded-xl border border-border-subtle bg-bg-card p-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-3xl">
              📐
            </div>
            <p className="text-text-muted">
              Materiais em breve. Estou organizando os arquivos!
            </p>
          </div>
        ) : (
          <div className="space-y-14">
            {categories.map((category) => (
              <div key={category}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border-subtle" />
                  <h2 className="shrink-0 text-sm font-semibold uppercase tracking-widest text-accent">
                    {category}
                  </h2>
                  <div className="h-px flex-1 bg-border-subtle" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {grouped[category].map((mat) => (
                    <article
                      key={mat.id}
                      className="group rounded-xl border border-border-subtle bg-bg-card p-6 transition-all hover:border-accent-dim hover:bg-bg-card-hover"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
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
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        {mat.level && (
                          <span className="rounded-full border border-border-subtle px-2 py-0.5 text-xs text-text-muted">
                            {mat.level}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-text-primary group-hover:text-accent">
                        {mat.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-3 text-sm text-text-secondary">
                        {mat.description}
                      </p>
                      {mat.fileUrl ? (
                        <a
                          href={withBasePath(mat.fileUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
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
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                          Baixar PDF
                        </a>
                      ) : (
                        <p className="mt-4 text-xs text-text-muted italic">
                          Link em breve
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
