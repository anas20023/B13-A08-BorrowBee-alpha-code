'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import { useRouter } from 'next/navigation';

const BookOffer = () => {
    const router = useRouter();

    const offers = [
        '📚 New Arrivals: "The Midnight Library" – Just added!',
        "🎉 Special Discount on Memberships – 50% off for first 3 months!",
        '✨ Bestseller of the week: "Atomic Habits" – Borrow now!',
        "📖 Free reading events every Saturday – Join us!",
        "🔥 Limited time: Borrow 5 books, get 1 month free extension.",
        '⭐ Community pick: "Project Hail Mary" – Highly recommended.',
    ];

    const handleClick = () => {
        router.push('/all-books');
    };

    return (
        <div
            onClick={handleClick}
            className="w-full cursor-pointer bg-indigo-50 dark:bg-indigo-950/30 border-y border-indigo-100 dark:border-indigo-800 transition-colors"
        >
            <Marquee
                pauseOnHover={true}
                gradient={false}
                speed={50}
                className="py-3 text-gray-700 dark:text-gray-200 font-medium"
            >
                <div className="flex gap-8 whitespace-nowrap">
                    {offers.map((offer, index) => (
                        <span key={index} className="mx-4">
                            {offer}
                        </span>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default BookOffer;