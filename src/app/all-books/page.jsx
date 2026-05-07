import AddBookModal from "@/components/books/AddBook";
import BooksContainer from "@/components/books/BooksContainer";
import { getBooks } from "@/lib/books";

const AllBooksPage = async () => {
  const books = await getBooks();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6 md:py-10">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="my-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            All Books
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover our complete collection – borrow your next favourite read.
          </p>
        </div>
        <AddBookModal/>
        <BooksContainer books={books} />
      </div>
    </div>
  );
};

export default AllBooksPage;
