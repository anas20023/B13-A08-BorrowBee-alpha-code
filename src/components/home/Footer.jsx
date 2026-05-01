import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MotionFooter } from '@/components/MotionComponents';

const Footer = () => {
    return (
        <MotionFooter 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gray-900 dark:bg-gray-950 text-gray-300"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand & Description */}
                    <div>
                        <h3 className="text-2xl font-bold text-indigo-400 mb-4">BorrowBee</h3>
                        <p className="text-sm text-gray-400">
                            Your go‑to platform for borrowing books from a vibrant community. Read more, spend less.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
                            <li><Link href="/all-books" className="hover:text-indigo-400 transition-colors">All Books</Link></li>
                            <li><Link href="/profile" className="hover:text-indigo-400 transition-colors">My Profile</Link></li>
                            <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2"><FaEnvelope /> support@borrowbee.com</li>
                            <li className="flex items-center gap-2"><FaPhoneAlt /> +1 (555) 123-4567</li>
                            <li className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Library St, Booktown, BK 10001</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="#" aria-label="Twitter" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" aria-label="Instagram" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" aria-label="GitHub" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors">
                                <FaGithub size={18} />
                            </a>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">Get updates about new arrivals and offers.</p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} BorrowBee. All rights reserved.
                </div>
            </div>
        </MotionFooter>
    );
};

export default Footer;