import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { type Note } from "./types";

const notesDir = path.join(process.cwd(), "content", "notes");

export function getAllNotes() {
  const files = fs.readdirSync(notesDir);

  return files.map((file) => {
    const filePath = path.join(notesDir, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: file.replace(/¥.md$/, ""),
      title: data.title,
      date: data.date,
      summary: data.summary,
    };
  });
}

export async function getNoteBySlug(slug: string) {
  const filePath = path.join(notesDir, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary,
    content: processed.toString(),
  };
}
