'use client';

import { useState, useMemo } from 'react';
import BookCard from "@/components/books/BookCard";
import { FaSearch } from 'react-icons/fa';

const BooksContainer = ({ books }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique categories from books
    const categories = useMemo(() => {
        const cats = new Set(books.map(book => book.category));
        return ['All', ...Array.from(cats).sort()];
    }, [books]);

    // Filter books by search query AND selected category
    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            // Search filter
            const query = searchQuery.toLowerCase().trim();
            const matchesSearch = !query || 
                book.title.toLowerCase().includes(query) || 
                book.author.toLowerCase().includes(query);
            
            // Category filter
            const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
    }, [books, searchQuery, selectedCategory]);

    return (
        <div className="space-y-6">
            {/* Full‑width search bar */}
            <div className="relative w-full">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by book title or author..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 pl-11 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white transition-colors"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
                {searchQuery && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Found {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''} matching “{searchQuery}”
                    </p>
                )}
            </div>

            {/* Sidebar + Books grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {/* Sidebar - Categories */}
                <aside className="md:col-span-1">
                    <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Categories</h3>
                        <ul className="space-y-1">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                                            selectedCategory === cat
                                                ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-medium'
                                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`}
                                    >
                                        {cat}
                                        {cat !== 'All' && (
                                            <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">
                                                ({books.filter(b => b.category === cat).length})
                                            </span>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Books Grid */}
                <div className="md:col-span-5">
                    {filteredBooks.length === 0 ? (
                        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
                            <p className="text-gray-500 dark:text-gray-400">
                                {searchQuery || selectedCategory !== 'All'
                                    ? 'No books match your filters.'
                                    : 'No books found.'}
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBooks.map((book) => (
                                <BookCard key={book._id} book={book} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BooksContainer;
