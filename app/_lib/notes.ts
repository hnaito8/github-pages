export type Note = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export const notes: Note[] = [
  {
    slug: "first-note",
    title: "はじめての Tech Note",
    date: "2026-01-01",
    summary: "Next.js と GitHub Pages で開発ログを始めた話",
  },
  {
    slug: "github-pages-next.js",
    title: "GitHub Pages × Next.js でハマったこと",
    date: "2026-01-02",
    summary: "basePath や static export 周りの落とし穴",
  },
];

export function getAllNotes(): Note[] {
  return notes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((note) => note.slug === slug);
}
