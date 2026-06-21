import profileData from "@/data/profile.json";
import type { Profile } from "@/data/types";
import { withBasePath } from "@/lib/base-path";

const p = profileData as Profile;

export const metadata = {
  title: "Sobre — ꓱLIΣꓱЦ ꓯ",
  description: "Quem sou eu, formação, e o que estou fazendo agora.",
};

export default function SobrePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(91,164,217,0.06)_0%,_transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Sobre
          </p>
          <h1 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
            Quem sou eu
          </h1>
        </div>
        <div className="glow-line" />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-14">
          {/* Intro */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-border-subtle bg-bg-card text-4xl">
              {p.avatarUrl ? (
                <img
                  src={withBasePath(p.avatarUrl)}
                  alt={p.name}
                  className="h-full w-full rounded-2xl object-cover"
                />
              ) : (
                <span className="text-accent">👤</span>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                {p.name}
              </h2>
              {p.tagline && (
                <p className="mt-1 text-accent">{p.tagline}</p>
              )}
              {p.bio && (
                <p className="mt-4 whitespace-pre-line leading-relaxed text-text-secondary">
                  {p.bio}
                </p>
              )}
            </div>
          </div>

          <div className="glow-line" />

          {/* O que estou fazendo agora */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <h3 className="text-lg font-semibold text-text-primary">
                O que estou fazendo agora
              </h3>
            </div>
            {p.currentFocus ? (
              <div className="whitespace-pre-line rounded-xl border border-border-subtle bg-bg-card p-6 leading-relaxed text-text-secondary">
                {p.currentFocus}
              </div>
            ) : (
              <div className="rounded-xl border border-border-subtle bg-bg-card p-6">
                <p className="italic text-text-muted">
                  Edite o arquivo profile.json para adicionar o que você está fazendo atualmente.
                </p>
              </div>
            )}
          </div>

          {/* Formação */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              🎓 Formação
            </h3>
            {p.formation ? (
              <div className="whitespace-pre-line rounded-xl border border-border-subtle bg-bg-card p-6 leading-relaxed text-text-secondary">
                {p.formation}
              </div>
            ) : (
              <div className="rounded-xl border border-border-subtle bg-bg-card p-6">
                <p className="italic text-text-muted">
                  Edite o arquivo profile.json para adicionar sua formação acadêmica.
                </p>
              </div>
            )}
          </div>

          {/* Contato & Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              🔗 Links &amp; Contato
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {p.email && (
                <a
                  href={`mailto:${p.email}`}
                  className="flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-card p-4 transition-all hover:border-accent-dim hover:bg-bg-card-hover"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Email</p>
                    <p className="text-sm text-text-primary">{p.email}</p>
                  </div>
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-card p-4 transition-all hover:border-accent-dim hover:bg-bg-card-hover"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">GitHub</p>
                    <p className="text-sm text-text-primary">Perfil</p>
                  </div>
                </a>
              )}
              {p.linkedin && (
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-card p-4 transition-all hover:border-accent-dim hover:bg-bg-card-hover"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">LinkedIn</p>
                    <p className="text-sm text-text-primary">Perfil</p>
                  </div>
                </a>
              )}
              {p.twitter && (
                <a
                  href={p.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-card p-4 transition-all hover:border-accent-dim hover:bg-bg-card-hover"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    𝕏
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Twitter / X</p>
                    <p className="text-sm text-text-primary">Perfil</p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
