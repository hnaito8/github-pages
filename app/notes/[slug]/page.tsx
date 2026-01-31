import { getNoteBySlug } from "@/app/_lib/notes";

export default function NotePage({ params }: { params: { slug: string } }) {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    return <div>Not found</div>;
  }

  return (
    <article>
      <h1>{note.title}</h1>
      <p>{note.date}</p>
      <p>{note.summary}</p>
    </article>
  );
}
