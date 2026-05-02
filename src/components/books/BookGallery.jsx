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
        <div className="relative w-full max-w-2xl mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={galleryBooks.length > 2}
                className="w-full rounded-xl overflow-hidden shadow-lg"
            >
                {galleryBooks.map((book) => (
                    <SwiperSlide key={book.id}>
                        <div className="relative w-full aspect-auto min-h-72 sm:min-h-80 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
                            <Image
                                src={book.image_url}
                                alt={book.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                                priority={false}
                                loading='lazy'
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bottom-4 flex flex-col items-center md:items-start justify-end p-4 sm:p-6">
                                <h3 className="text-white text-lg md:text-xl font-bold line-clamp-2 text-center md:text-left">
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
