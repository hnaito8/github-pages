import { getNoteBySlug, getAllNotes } from "@/app/_lib/notes";

export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function NotePage({
  params,
}: {
  params: { slug: string };
}) {
  const note = await getNoteBySlug(params.slug);

  return (
    <article className="prose prose-neutral dark:prose-invert">
      <h1>{note.title}</h1>
      <p className="text-sm text-gray-500">{note.date}</p>

      <div dangerouslySetInnerHTML={{ __html: note.content }} />
    </article>
  );
}
