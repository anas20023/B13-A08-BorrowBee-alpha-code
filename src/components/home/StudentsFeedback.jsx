'use client';

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useRouter } from 'next/navigation';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const StudentsFeedback = () => {
    const router = useRouter();
    
    const feedbacks = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Computer Science Student",
            text: "BorrowBee made finding books so easy – highly recommended!",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
            id: 2,
            name: "Michael Thompson",
            role: "Literature Major",
            text: "Amazing collection and fast delivery. Love the community.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Graduate Student",
            text: "As a student, I saved hundreds on textbooks. Thank you!",
            avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            id: 4,
            name: "David Lee",
            role: "PhD Candidate",
            text: "Best book borrowing platform out there. 5 stars!",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
            id: 5,
            name: "Anna Kim",
            role: "Self‑learner",
            text: "The ratings and reviews helped me choose great reads.",
            avatar: "https://randomuser.me/api/portraits/women/89.jpg",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full bg-white dark:bg-gray-900 border-y border-indigo-100 dark:border-indigo-800 transition-colors"
        >
            {/* <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white pt-8 pb-2">
                    What Students Say
                </h1>
                <p className="text-center text-gray-500 dark:text-gray-400 pb-4">
                    Join thousands of satisfied readers
                </p>
            </div>
             */}
            <Marquee gradient={false} speed={50} className="py-6">
                <div className="flex gap-8 mx-4">
                    {feedbacks.map((feedback) => (
                        <div
                            key={feedback.id}
                            className="w-80 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 shrink-0 transition-all hover:shadow-lg duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-indigo-100 dark:bg-indigo-900/50 ring-2 ring-indigo-200 dark:ring-indigo-800">
                                    <Image
                                        src={feedback.avatar}
                                        alt={feedback.name}
                                        fill
                                        className="object-cover"
                                        sizes="56px"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-white">
                                        {feedback.name}
                                    </h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {feedback.role}
                                    </p>
                                </div>
                            </div>
                            <FaQuoteLeft className="text-indigo-400 dark:text-indigo-500 text-xl mb-3" />
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                “{feedback.text}”
                            </p>
                        </div>
                    ))}
                </div>
            </Marquee>
        </motion.div>
    );
};

export default StudentsFeedback;