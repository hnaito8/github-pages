import { getAllNotes } from "../_lib/notes";
import NoteCard from "./note-card";

export default function NoteList() {
  const notes = getAllNotes();

  return (
    <ul>
      {notes.map((note) => (
        <NoteCard key={note.slug} note={note} />
      ))}
    </ul>
  );
}
