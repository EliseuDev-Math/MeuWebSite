# 🚀 Como fazer deploy no GitHub Pages

## Passo a passo

### 1. Crie um repositório no GitHub

Vá em [github.com/new](https://github.com/new) e crie um repositório.

**Para site pessoal** (recomendado):
- Nome do repo: `seuusuario.github.io`
- O site ficará em: `https://seuusuario.github.io`

**Para projeto comum**:
- Nome do repo: qualquer nome (ex: `meu-blog`)
- O site ficará em: `https://seuusuario.github.io/meu-blog`
- ⚠️ Neste caso, edite `next.config.ts` e adicione `basePath`:
  ```ts
  const nextConfig = {
    ...(isGithubPages ? { output: "export", basePath: "/meu-blog" } : {}),
    images: { unoptimized: true },
  };
  ```

### 2. Faça push do código

**Importante**: Certifique-se de incluir o `package-lock.json` no commit!

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seuusuario/seuusuario.github.io.git
git push -u origin main
```

### 3. Ative o GitHub Pages

1. Vá nas **Settings** do repositório
2. Menu lateral → **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. O deploy vai rodar automaticamente!

### 4. Pronto!

Após o build concluir (1-2 minutos), seu site estará no ar.

---

## 📝 Como editar o conteúdo

Todos os dados ficam em arquivos JSON fáceis de editar:

| Arquivo | O que contém |
|---------|-------------|
| `src/data/profile.json` | Seu nome, bio, formação, links, o que está fazendo agora |
| `src/data/posts.json` | Artigos do blog (título, conteúdo Markdown, tags) |
| `src/data/materials.json` | Materiais de matemática olímpica (título, categoria, link PDF) |
| `src/data/projects.json` | Portfólio de projetos (descrição, tech stack, links) |

### Adicionar um novo artigo

Abra `src/data/posts.json` e adicione um item ao array:

```json
{
  "id": 5,
  "title": "Título do artigo",
  "slug": "titulo-do-artigo",
  "excerpt": "Resumo breve...",
  "content": "## Conteúdo em Markdown\n\nTexto aqui...",
  "tags": "tag1,tag2",
  "published": true,
  "createdAt": "2025-06-01"
}
```

### Adicionar um PDF de material

1. Coloque o PDF na pasta `public/pdfs/` (ex: `public/pdfs/lista-tn-1.pdf`)
2. No `src/data/materials.json`, coloque o `fileUrl`: `"/pdfs/lista-tn-1.pdf"`
3. Faça commit e push — o deploy atualiza automaticamente

### Trocar sua foto

1. Coloque a imagem em `public/images/` (ex: `public/images/avatar.jpg`)
2. Em `src/data/profile.json`, coloque: `"avatarUrl": "/images/avatar.jpg"`

---

## 🔧 Testar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`

### Build estático local (simular GitHub Pages)

```bash
GITHUB_PAGES=true npm run build
npx serve out
```

---

## 📁 Estrutura do projeto

```
src/
├── app/                    # Páginas do site
│   ├── page.tsx           # Página inicial
│   ├── blog/              # Blog (listagem + posts)
│   ├── materiais/         # Materiais de matemática
│   ├── portfolio/         # Portfólio de projetos
│   └── sobre/             # Página sobre
├── components/            # Componentes reutilizáveis
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── post-content.tsx
├── data/                  # ✏️ EDITE ESTES ARQUIVOS
│   ├── profile.json
│   ├── posts.json
│   ├── materials.json
│   ├── projects.json
│   └── types.ts
public/
├── pdfs/                  # Coloque seus PDFs aqui
└── images/                # Coloque suas imagens aqui
.github/
└── workflows/
    └── deploy.yml         # Deploy automático no GitHub Pages
```
