import React from 'react';
import Link from 'next/link';
import { FaBookOpen, FaHome } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-16 transition-colors">
            <div className="max-w-lg w-full text-center dark:bg-gray-800  p-8 transition-colors">
                {/* Decorative book icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-4 transition-colors">
                        <FaBookOpen className="text-indigo-500 dark:text-indigo-400 w-12 h-12" />
                    </div>
                </div>

                {/* Error code */}
                <h1 className="text-7xl font-bold text-gray-800 dark:text-gray-100 mb-2">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                    Page not found
                </h2>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                    Oops! The book or page you’re looking for seems to have been borrowed
                    by someone else. Let’s get you back on track.
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    >
                        <FaHome className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <Link
                        href="/all-books"
                        className="inline-flex items-center justify-center gap-2 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 bg-transparent px-6 py-3 rounded-md font-medium transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-900/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    >
                        <BiSearchAlt className="w-4 h-4" />
                        Browse All Books
                    </Link>
                </div>

                {/* Helpful suggestion */}
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-8">
                    Or go back to the{' '}
                    <Link href="/" className="text-indigo-500 dark:text-indigo-400 underline hover:no-underline">
                        homepage
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;