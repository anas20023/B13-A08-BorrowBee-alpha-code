'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { IoCopy } from "react-icons/io5";
import { Button } from '@heroui/react';

const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
        <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} size={14} />
            ))}
            {hasHalfStar && <FaStarHalfAlt size={14} />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} size={14} />
            ))}
        </div>
    );
};
const Card = ({ book }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden transition-transform hover:shadow-md duration-300 flex flex-col h-full">
            {/* Image */}
            <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
                <Image
                    src={book.image_url}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            
            {/* Content */}
            <div className="p-4 flex flex-col grow">
                <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-1">
                        {book.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 whitespace-nowrap">
                        {book.category}
                    </span>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    by {book.author}
                </p>
                
                {/* <div className="flex items-center gap-2 mt-1 mb-3">
                    {renderRating(book.rating)}
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        ({book.rating})
                    </span>
                </div> */}
                
                <div className="flex items-center justify-between mt-auto pt-2">
                    <Link
                        href={`/all-books/${book.id}`}
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium transition-colors"
                    >
                       <Button>View Details</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;