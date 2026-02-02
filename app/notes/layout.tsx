import Link from "next/link";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <header className="mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:underline">
          ← Home
        </Link>
        <h1 className="mt-4 text-2xl font-bold">Tech Notes</h1>
      </header>

      <main>{children}</main>
    </div>
  );
}
