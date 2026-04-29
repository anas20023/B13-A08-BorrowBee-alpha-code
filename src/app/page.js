import { getBooks } from "@/lib/books";

export default async function Home() {
  const books= await getBooks()
  return (
    <div className="flex flex-col bg-white">
      <p>{books.length}</p>
    </div>
  );
}
