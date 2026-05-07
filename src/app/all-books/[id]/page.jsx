import Link from 'next/link';
import Image from 'next/image';
import { getBooksbyCategory, getBooksbyID } from "@/lib/books";
import { FaStar, FaStarHalfAlt, FaRegStar, FaArrowLeft, FaBookOpen, FaUser, FaTag, FaCheckCircle } from 'react-icons/fa';
import BorrowButton from '@/components/books/BorrowButton';
import BookCard from '@/components/books/BookCard'
const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-1.5 text-amber-400">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} className="w-5 h-5 md:w-6 md:h-6" />
            ))}
            {hasHalfStar && <FaStarHalfAlt className="w-5 h-5 md:w-6 md:h-6" />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} className="w-5 h-5 md:w-6 md:h-6" />
            ))}
        </div>
    );
};

const BookDetails = async ({ params }) => {
    const { id } = await params;
    const book = await getBooksbyID(id);
    console.log(book)
    const similar = await getBooksbyCategory(id,book.category)
    if (!book) {
        return (
            <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <div className="text-6xl mb-4">📚</div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Book not found</h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">The book you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                        <Link
                            href="/all-books"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                        >
                            <FaArrowLeft size={16} />
                            Browse All Books
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back button - Floating style */}
                <div className="mb-8">
                    <Link
                        href="/all-books"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        <FaArrowLeft size={14} />
                        <span className="text-sm font-medium">Back to Collection</span>
                    </Link>
                </div>

                {/* Main Book Card */}
                <div className="relative">
                    {/* Card Container */}
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                        {/* Top gradient accent bar */}
                        <div className="h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                        <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-8 lg:p-10">
                            {/* Left: Image Section */}
                            <div className="lg:w-2/5">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                                    <div className="relative bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
                                        <div className="relative aspect-2/3 w-full">
                                            <Image
                                                src={book.image_url}
                                                alt={book.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                sizes="(max-width: 1024px) 100vw, 35vw"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Book Info Section */}
                            <div className="lg:w-3/5 flex flex-col">
                                {/* Title and Category Row */}
                                <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
                                        {book.title}
                                    </h1>
                                    <span className="px-3 py-1.5 rounded-full bg-linear-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-xs md:text-sm font-semibold border border-indigo-200 dark:border-indigo-800 shadow-sm">
                                        {book.category}
                                    </span>
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-2 mb-4">
                                    <FaUser className="text-gray-400 dark:text-gray-500 text-sm" />
                                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                                        by <span className="font-semibold text-gray-800 dark:text-white">{book.author}</span>
                                    </p>
                                </div>

                                {/* Rating Section */}
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    {renderRating(book.rating)}
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            {book.rating}
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            / 5
                                        </span>
                                        <span className="text-xs text-gray-400 dark:text-gray-500">
                                            (42 reviews)
                                        </span>
                                    </div>
                                </div>

                                {/* Quick Info Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                        <FaBookOpen className="text-indigo-500 dark:text-indigo-400 text-lg" />
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Category</p>
                                            <p className="text-sm font-semibold text-gray-800 dark:text-white">{book.category}</p>
                                        </div>
                                    </div>
                                    {/* <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                        <FaTag className="text-purple-500 dark:text-purple-400 text-lg" />
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Book ID</p>
                                            <p className="text-sm font-semibold text-gray-800 dark:text-white font-mono">{book._id}</p>
                                        </div>
                                    </div> */}
                                </div>

                                {/* Description */}
                                <div className="mb-6">
                                    <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                                        Description
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                                        {book.description || "No description available for this book."}
                                    </p>
                                </div>

                                {/* Availability & Action Section */}
                                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="relative">
                                                <div className={`absolute inset-0 rounded-full ${book.available_quantity > 0 ? 'bg-green-400' : 'bg-red-400'} animate-pulse opacity-75`}></div>
                                                <FaCheckCircle className={`relative text-2xl ${book.available_quantity > 0 ? 'text-green-500' : 'text-red-500'} bg-white dark:bg-gray-800 rounded-full`} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Availability</p>
                                                <p className="text-xl md:text-2xl font-bold">
                                                    <span className={book.available_quantity > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                                                        {book.available_quantity}
                                                    </span>
                                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-1">
                                                        {book.available_quantity === 1 ? 'copy' : 'copies'} available
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-auto">
                                            <BorrowButton book={book} />
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Meta Info */}
                                <div className="mt-6 pt-4 text-center sm:text-left">
                                    <p className="text-xs text-gray-400 dark:text-gray-500">
                                        Added to library • Last updated recently
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Suggestions Section (Optional enhancement) */}
                    <div className="mt-12 w-full">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                                You might also like
                            </h2>
                            <Link href="/all-books" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
                                View all →
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                           {
                            similar && similar.map((book,index)=><BookCard key={index} book={book}/>)
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;