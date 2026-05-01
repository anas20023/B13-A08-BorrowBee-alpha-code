'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const BookGallery = ({ books }) => {
    if (!books || books.length === 0) {
        return (
            <div className="flex items-center justify-center w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-500 dark:text-gray-400">No books available</p>
            </div>
        );
    }

    const galleryBooks = books.slice(0, 8);

    return (
        <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={galleryBooks.length > 2}
                className="w-full rounded-lg overflow-hidden shadow-lg"
            >
                {galleryBooks.map((book) => (
                    <SwiperSlide key={book.id}>
                        {/* ✅ Fixed height instead of portrait aspect ratio */}
                        <div className="relative w-full h-64 sm:h-72 lg:h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                            <Image
                                src={book.image_url}
                                alt={book.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 30vw"
                                priority={false}
                            />
                            <div className="absolute inset-0 bg-black/60 flex flex-col items-center md:items-start justify-end p-4">
                                <h3 className="text-white text-lg md:text-xl font-bold line-clamp-2">
                                    {book.title}
                                </h3>
                                <Link
                                    href={`/all-books/${book.id}`}
                                    className="mt-2 inline-flex items-center justify-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-3 py-1.5 rounded-md transition-colors w-fit"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BookGallery;