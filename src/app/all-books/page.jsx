import { getBooks } from "@/lib/books";
import BookCard from "@/components/BookCard";

const AllBooksPage = async () => {
  const books = await getBooks();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            All Books
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover our complete collection – borrow your next favourite read.
          </p>
        </div>

        {/* Book Grid */}
        {books.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No books found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooksPage;