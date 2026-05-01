import Link from 'next/link';
import Image from 'next/image';
import { getBooksbyID } from "@/lib/books";
import { FaStar, FaStarHalfAlt, FaRegStar, FaArrowLeft } from 'react-icons/fa';
import BorrowButton from '@/components/books/BorrowButton';


const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-1 text-amber-400">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} size={20} />
            ))}
            {hasHalfStar && <FaStarHalfAlt size={20} />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} size={20} />
            ))}
        </div>
    );
};

const BookDetails = async ({ params }) => {
    const { id } = await params;
    const book = await getBooksbyID(id);

    if (!book) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Book not found</h1>
                    <Link
                        href="/all-books"
                        className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                        <FaArrowLeft size={16} />
                        Back to All Books
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Back button */}
                <div className="mb-6">
                    <Link
                        href="/all-books"
                        className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-medium"
                    >
                        <FaArrowLeft size={16} />
                        Back to All Books
                    </Link>
                </div>

                {/* Book Details Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
                        {/* Left: Image */}
                        <div className="md:w-1/3">
                            <div className="relative w-full aspect-2/3 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-md">
                                <Image
                                    src={book.image_url}
                                    alt={book.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right: Book info */}
                        <div className="md:w-2/3">
                            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                                    {book.title}
                                </h1>
                                <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                                    {book.category}
                                </span>
                            </div>

                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                                by <span className="font-semibold">{book.author}</span>
                            </p>

                            <div className="flex items-center gap-3 mt-2 mb-4">
                                {renderRating(book.rating)}
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    ({book.rating} / 5)
                                </span>
                            </div>

                            <div className="mb-4">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Description</h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {book.description}
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Availability</p>
                                        <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                                            {book.available_quantity} {book.available_quantity === 1 ? 'copy' : 'copies'}
                                        </p>
                                    </div>
                                    <BorrowButton book={book}/>
                                </div>
                            </div>

                            {/* Additional info could go here */}
                            <p className="text-xs text-gray-400 dark:text-gray-500">
                                Book ID: {book.id}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;