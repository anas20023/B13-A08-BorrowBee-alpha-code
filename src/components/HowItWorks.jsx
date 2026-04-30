import React from 'react';
import { FaSearch, FaBookOpen, FaHandsHelping } from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            icon: FaSearch,
            title: "Find Your Book",
            description: "Browse our extensive collection by title, author, or category. Use filters and search to discover your next read.",
        },
        {
            id: 2,
            icon: FaBookOpen,
            title: "Borrow & Read",
            description: "Select the book, click borrow, and start reading instantly. No late fees – return when you're done.",
        },
        {
            id: 3,
            icon: FaHandsHelping,
            title: "Return & Repeat",
            description: "Return books with one click. Keep exploring new arrivals and build your personal library.",
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                        How BorrowBee Works
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Three simple steps to start your reading journey – no stress, no queues.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div
                            key={step.id}
                            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-all hover:shadow-lg"
                        >
                            {/* Optional step number badge */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                                {idx + 1}
                            </div>
                            <div className="mt-4 mb-4 flex justify-center">
                                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
                                    <step.icon className="text-3xl text-indigo-600 dark:text-indigo-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Optional extra CTA */}
                <div className="text-center mt-10">
                    <a
                        href="/all-books"
                        className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                    >
                        Start borrowing now
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;