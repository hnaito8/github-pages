import Link from "next/link";
import { Note } from "../_lib/types";

type Props = {
  note: Note;
};

export default function NoteCard({ note }: Props) {
  return (
    <li>
      <h2>
        <Link href={`/notes/${note.slug}`}>{note.title}</Link>
      </h2>
      <p>{note.summary}</p>
      <time>{note.date}</time>
    </li>
  );
}
