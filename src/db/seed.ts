import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { posts, materials, projects, profile } from "./schema";

async function seed() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool);

  console.log("🌱 Seeding database...");

  // Profile
  await db.insert(profile).values({
    name: "Seu Nome Aqui",
    tagline: "Matemático olímpico · Desenvolvedor · Eterno estudante",
    bio: `Olá! Sou apaixonado por matemática e programação. Minha jornada começou nas olimpíadas de matemática e se estendeu para o mundo do desenvolvimento de software.

Acredito que resolver problemas é uma das habilidades mais valiosas que podemos cultivar — seja demonstrando um teorema elegante ou arquitetando um sistema robusto.

Este site é meu espaço para compartilhar o que aprendo, os projetos que construo e os materiais que preparo. Fique à vontade para explorar!`,
    currentFocus: `→ Estudando álgebra abstrata e teoria dos números avançada
→ Desenvolvendo projetos com Next.js e TypeScript
→ Preparando materiais para olimpíadas de matemática
→ Escrevendo artigos sobre algoritmos e estruturas de dados`,
    formation: `🎓 Graduação em [Seu Curso] — [Sua Universidade]
   Período: [Ano início] — [Ano fim ou "Cursando"]

📚 Cursos complementares e certificações:
   • [Nome do curso/certificação]
   • [Nome do curso/certificação]
   • [Nome do curso/certificação]

🏅 Conquistas em Olimpíadas:
   • [Medalha/Menção] — [Nome da Olimpíada] — [Ano]
   • [Medalha/Menção] — [Nome da Olimpíada] — [Ano]`,
    email: "seu@email.com",
    github: "https://github.com/seuusuario",
    linkedin: "https://linkedin.com/in/seuusuario",
    twitter: "",
    avatarUrl: "",
  });

  // Blog posts
  await db.insert(posts).values([
    {
      title: "Por que estudar Matemática Olímpica?",
      slug: "por-que-estudar-matematica-olimpica",
      excerpt:
        "Uma reflexão sobre como as olimpíadas de matemática desenvolvem o raciocínio lógico, a criatividade e a resiliência — habilidades que transcendem a matemática.",
      content: `## O início de tudo

Quando comecei a estudar matemática olímpica, não imaginava o impacto que isso teria na minha vida. Não se tratava apenas de resolver problemas difíceis — era sobre aprender a **pensar de forma diferente**.

## O que as olimpíadas ensinam

As olimpíadas de matemática ensinam muito mais do que fórmulas e teoremas:

- **Pensamento criativo**: cada problema é único e exige uma abordagem original
- **Perseverança**: nem todo problema se resolve na primeira tentativa
- **Rigor lógico**: uma demonstração precisa ser impecável
- **Humildade**: sempre há algo novo para aprender

## Além da competição

O maior valor das olimpíadas não está nas medalhas, mas nas habilidades que desenvolvemos ao longo do caminho. A capacidade de abstrair, generalizar e encontrar padrões é útil em qualquer área — da programação à ciência, da engenharia à filosofia.

> "A matemática é a rainha das ciências e a teoria dos números é a rainha da matemática." — Carl Friedrich Gauss

## Conclusão

Se você está pensando em começar, meu conselho é simples: **comece**. Não importa o nível — o importante é a jornada, não o destino.

Nos próximos artigos, vou compartilhar dicas de estudo, materiais e reflexões sobre tópicos específicos. Fique ligado!`,
      tags: "matemática,olimpíadas,reflexão",
      published: true,
    },
    {
      title: "Introdução à Teoria dos Números para Olimpíadas",
      slug: "introducao-teoria-dos-numeros",
      excerpt:
        "Um guia introdutório sobre divisibilidade, congruências e o Pequeno Teorema de Fermat — ferramentas essenciais para olimpíadas de matemática.",
      content: `## Divisibilidade

A base de tudo em teoria dos números começa com a divisibilidade. Dizemos que \`a\` divide \`b\` (escrevemos \`a | b\`) quando existe um inteiro \`k\` tal que \`b = a · k\`.

### Propriedades fundamentais

1. Se \`a | b\` e \`a | c\`, então \`a | (b + c)\`
2. Se \`a | b\` e \`a | c\`, então \`a | (b - c)\`
3. Se \`a | b\` e \`b | c\`, então \`a | c\` (transitividade)

## Congruências

A notação de congruências, introduzida por Gauss, simplifica enormemente o trabalho com restos:

\`a ≡ b (mod n)\` significa que \`n | (a - b)\`

### Exemplo prático

Qual o resto da divisão de \`2^100\` por \`7\`?

Observe o padrão:
- \`2^1 ≡ 2 (mod 7)\`
- \`2^2 ≡ 4 (mod 7)\`
- \`2^3 ≡ 1 (mod 7)\`
- \`2^4 ≡ 2 (mod 7)\` — o ciclo se repete!

Como \`100 = 33 × 3 + 1\`, temos \`2^100 ≡ 2^1 ≡ 2 (mod 7)\`.

## Pequeno Teorema de Fermat

Se \`p\` é primo e \`mdc(a, p) = 1\`, então:

\`a^(p-1) ≡ 1 (mod p)\`

Este resultado é incrivelmente poderoso para calcular restos de potências grandes.

## Próximos passos

Nos próximos artigos, abordaremos:
- Função totiente de Euler
- Teorema Chinês do Resto
- Equações Diofantinas`,
      tags: "matemática,teoria dos números,tutorial",
      published: true,
    },
    {
      title: "Clean Code: Princípios que uso no dia a dia",
      slug: "clean-code-principios",
      excerpt:
        "Lições práticas sobre código limpo que aplico nos meus projetos — naming, funções, abstrações e a arte de escrever código legível.",
      content: `## Código é comunicação

O código que escrevemos é lido muito mais vezes do que é escrito. Por isso, clareza deve ser prioridade.

### Nomes significativos

\`\`\`typescript
// ❌ Ruim
const d = new Date();
const fn = (x: number) => x * 2;

// ✅ Bom
const currentDate = new Date();
const doubleValue = (value: number) => value * 2;
\`\`\`

## Funções pequenas e focadas

Uma função deve fazer **uma coisa** e fazer bem. Se você precisa usar "e" para descrever o que ela faz, provavelmente deveria ser duas funções.

## O princípio DRY (não se repita)

Repetição é o inimigo da manutenção. Mas cuidado: abstração prematura é pior que repetição. A regra dos três é um bom guia — repita uma vez, tudo bem; repita duas vezes, considere abstrair.

## Comentários

> "Bom código é sua melhor documentação." — Steve McConnell

Prefira código auto-explicativo a comentários. Mas quando o **porquê** não é óbvio, comente.

## Conclusão

Clean code não é sobre perfeição — é sobre **respeito**: com quem vai ler seu código (incluindo seu eu do futuro).`,
      tags: "programação,clean code,boas práticas",
      published: true,
    },
    {
      title: "Minha jornada: das olimpíadas ao código",
      slug: "minha-jornada-olimpiadas-ao-codigo",
      excerpt:
        "Como o pensamento algorítmico das olimpíadas de matemática me levou naturalmente à programação e ao desenvolvimento de software.",
      content: `## O começo

Tudo começou com um convite para participar de uma olimpíada de matemática na escola. Eu tinha [sua idade] anos e achava que matemática era "fazer conta". Como eu estava errado.

## A descoberta

Os problemas olímpicos me mostraram uma matemática completamente diferente: elegante, criativa, desafiadora. Não era sobre decorar fórmulas — era sobre **pensar**.

## A transição

A transição para a programação aconteceu naturalmente. Quando você passa anos resolvendo problemas, estruturando argumentos lógicos e buscando soluções elegantes, programar se torna uma extensão natural desse processo.

## O que aprendi

1. **Decomposição**: quebrar problemas grandes em partes menores
2. **Padrões**: reconhecer estruturas que se repetem
3. **Abstração**: ignorar detalhes irrelevantes
4. **Algoritmos**: criar procedimentos sistemáticos

Essas habilidades são o núcleo tanto da matemática olímpica quanto da ciência da computação.

## Hoje

Hoje, uso essas habilidades para construir software, resolver problemas complexos e continuar aprendendo. A jornada nunca acaba — e é isso que a torna fascinante.`,
      tags: "pessoal,matemática,programação",
      published: true,
    },
  ]);

  // Materials
  await db.insert(materials).values([
    {
      title: "Lista de Teoria dos Números — Nível 1",
      description:
        "Exercícios introdutórios sobre divisibilidade, MDC, MMC e congruências. Ideal para quem está começando.",
      category: "Teoria dos Números",
      level: "Iniciante",
      fileUrl: "",
    },
    {
      title: "Lista de Teoria dos Números — Nível 2",
      description:
        "Problemas intermediários envolvendo o Pequeno Teorema de Fermat, função de Euler e equações diofantinas.",
      category: "Teoria dos Números",
      level: "Intermediário",
      fileUrl: "",
    },
    {
      title: "Combinatória — Princípios de Contagem",
      description:
        "Apostila com teoria e exercícios sobre princípio aditivo, multiplicativo, permutações e combinações.",
      category: "Combinatória",
      level: "Iniciante",
      fileUrl: "",
    },
    {
      title: "Combinatória — Princípio de Inclusão-Exclusão",
      description:
        "Material avançado sobre PIE com aplicações em problemas olímpicos clássicos.",
      category: "Combinatória",
      level: "Avançado",
      fileUrl: "",
    },
    {
      title: "Geometria — Semelhança e Potência de Ponto",
      description:
        "Teoria e problemas sobre semelhança de triângulos, potência de ponto e eixo radical.",
      category: "Geometria",
      level: "Intermediário",
      fileUrl: "",
    },
    {
      title: "Álgebra — Desigualdades Clássicas",
      description:
        "AM-GM, Cauchy-Schwarz, Jensen e outras desigualdades essenciais com demonstrações e exercícios.",
      category: "Álgebra",
      level: "Intermediário",
      fileUrl: "",
    },
    {
      title: "Soluções — OBM 2023 (Fase 3)",
      description:
        "Soluções comentadas de todos os problemas da terceira fase da OBM 2023.",
      category: "Soluções",
      level: "Avançado",
      fileUrl: "",
    },
  ]);

  // Projects
  await db.insert(projects).values([
    {
      title: "Nome do Projeto 1",
      description: "Breve descrição do projeto — o que ele faz e por que foi criado.",
      longDescription:
        "Descrição mais detalhada do projeto. Aqui você pode falar sobre a motivação, os desafios enfrentados, as decisões de arquitetura e o que aprendeu durante o desenvolvimento.",
      techStack: "Next.js,TypeScript,PostgreSQL,Tailwind CSS",
      repoUrl: "https://github.com/seuusuario/projeto-1",
      liveUrl: "",
      featured: true,
      sortOrder: 1,
    },
    {
      title: "Nome do Projeto 2",
      description: "Outra descrição breve — ferramenta/app/lib que você construiu.",
      longDescription:
        "Detalhes sobre o segundo projeto. Conte a história por trás dele — qual problema resolve, como funciona internamente, e quais foram os resultados.",
      techStack: "Python,FastAPI,React,Docker",
      repoUrl: "https://github.com/seuusuario/projeto-2",
      liveUrl: "https://projeto2.example.com",
      featured: true,
      sortOrder: 2,
    },
    {
      title: "Nome do Projeto 3",
      description: "Mais um projeto interessante que você desenvolveu.",
      longDescription:
        "Descrição completa do terceiro projeto. Pode ser uma CLI, uma lib, um bot, um app mobile — qualquer coisa que demonstre suas habilidades.",
      techStack: "Rust,WebAssembly,JavaScript",
      repoUrl: "https://github.com/seuusuario/projeto-3",
      liveUrl: "",
      featured: true,
      sortOrder: 3,
    },
    {
      title: "Nome do Projeto 4",
      description: "Um projeto de estudo ou contribuição open source.",
      longDescription:
        "Descrição do quarto projeto. Contribuições open source também contam! Fale sobre pull requests, issues resolvidas ou features que implementou.",
      techStack: "Go,gRPC,Redis",
      repoUrl: "https://github.com/seuusuario/projeto-4",
      liveUrl: "",
      featured: false,
      sortOrder: 4,
    },
  ]);

  console.log("✅ Seed complete!");
  await pool.end();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
