import { getBooks } from "@/lib/books";
import Card from "@/components/books/BookCard";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { MotionSection } from "@/components/MotionComponents";
const FeaturedBooks = async () => {
    const books = await getBooks();
    const featuredBooks = books.sort((a, b) => Number(b.rating) - Number(a.rating)).slice(0, 4);
    return (
        <MotionSection 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            id="featuredbooks" 
            className="bg-gray-50 dark:bg-gray-900 py-8 md:py-10"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                        Featured Books
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover our most popular picks. Start your next adventure today.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {featuredBooks.map((book) => (
                        <Card key={book._id} book={book} />
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link
                        href="/all-books"
                        className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                    >
                        Browse all books
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </MotionSection>
    );
};

export default FeaturedBooks;