'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBookOpen } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="bg-white dark:bg-gray-900 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-18 lg:py-22">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left side: Text content */}
                    <div className="flex-1 text-center lg:text-left">
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
                    </div>

                    {/* Right side: Image */}
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-full max-w-md lg:max-w-full aspect-square lg:aspect-auto lg:h-100 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="https://i.ibb.co.com/Dft4DD8G/emil-widlund-xrbb-XIXAWY0-unsplash.jpg"
                                alt="Person reading a book surrounded by floating books"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                unoptimized // optional: if you don't want Next.js optimization for external images, or configure domains in next.config.js
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;