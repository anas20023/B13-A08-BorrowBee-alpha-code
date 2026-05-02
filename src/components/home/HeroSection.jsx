import React from 'react';
import Link from 'next/link';
import { FaBookOpen } from 'react-icons/fa';
import { getBooks } from '@/lib/books';
import BookGallery from '@/components/books/BookGallery';
import { MotionDiv } from '@/components/MotionComponents';

const HeroSection = async () => {
    const books = await getBooks();
    return (
        <section className="bg-white dark:bg-gray-900 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-24">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12">
                    {/* Left side: Text content */}
                    <MotionDiv 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center justify-center lg:justify-start mb-4">
                            <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full">
                                <FaBookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                            Find Your Next Read
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8">
                            Discover thousands of books from our community. Borrow, read, and return with ease – all free.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/all-books"
                                className="inline-flex items-center justify-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-md text-lg font-medium transition-all hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-sm"
                            >
                                Browse Now
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        {/* Trust badges */}
                        <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-500 dark:text-gray-400 justify-center lg:justify-start">
                            <div className="flex items-center gap-1">
                                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                Free membership
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                Unlimited borrowing
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                Community driven
                            </div>
                        </div>
                    </MotionDiv>

                    {/* Right side: Swiper Gallery */}
                    <MotionDiv 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:flex-1 min-w-0 flex justify-center items-start"
                    >
                        <BookGallery books={books} />
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
