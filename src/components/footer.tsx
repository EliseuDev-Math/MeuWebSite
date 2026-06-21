import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Branding */}
          <div>
            <p className="text-sm font-semibold text-text-primary">
              <span className="text-accent">{"{"}</span>
              &nbsp;ꓱLIΣꓱЦ ꓯ.&nbsp;
              <span className="text-accent">{"}"}</span>
            </p>
            <p className="mt-2 text-sm text-text-muted">
              Matemática, programação e física.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Navegação
            </p>
            {[
              { href: "/blog", label: "Blog" },
              { href: "/materiais", label: "Materiais" },
              { href: "/portfolio", label: "Portfólio" },
              { href: "/sobre", label: "Sobre" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-text-secondary transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Contato
            </p>
            <a
              href="mailto:eliseualexandre496@gmail.com"
              className="text-sm text-text-secondary transition-colors hover:text-accent"
            >
              eliseualexandre496@gmail.com
            </a>
            <a
              href="https://github.com/EliseuDev-Math"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="glow-line mt-8" />
        <p className="mt-6 text-center text-xs text-text-muted">
          © {new Date().getFullYear()} · Tu manja de geometria diferencial?
        </p>
      </div>
    </footer>
  );
}
