'use client';

import { Link } from "@heroui/react";
import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="flex h-16 max-w-6xl mx-auto items-center justify-between px-4 sm:px-6">
                {/* Left section: mobile menu icon + logo */}
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        {isMenuOpen ? (
                            <RxCross2 size={22} />
                        ) : (
                            <MdMenu size={22} />
                        )}
                    </button>
                    <Link
                        href="/"
                        className="text-2xl font-bold text-amber-600 no-underline hover:text-amber-700 transition-colors"
                    >
                        BorrowBee
                    </Link>
                </div>

                {/* Desktop navigation */}
                <ul className="hidden md:flex items-center gap-6">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-amber-600 no-underline transition-colors font-medium"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/all-books"
                            className="text-gray-700 hover:text-amber-600 no-underline transition-colors font-medium"
                        >
                            All Books
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/profile"
                            className="text-gray-700 hover:text-amber-600 no-underline transition-colors font-medium"
                        >
                            My Profile
                        </Link>
                    </li>
                </ul>

                {/* Login button (desktop + tablet) */}
                <div>
                    <Link
                        href="/login"
                        className="bg-amber-500 text-white px-5 py-2 rounded-md no-underline hover:bg-amber-600 transition-colors font-medium inline-block"
                    >
                        Login
                    </Link>
                </div>
            </div>

            {/* Mobile menu drawer */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
                    <ul className="flex flex-col gap-1 p-4">
                        <li>
                            <Link
                                href="/"
                                onClick={closeMenu}
                                className="block py-2.5 px-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md no-underline transition-colors font-medium"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/all-books"
                                onClick={closeMenu}
                                className="block py-2.5 px-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md no-underline transition-colors font-medium"
                            >
                                All Books
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile"
                                onClick={closeMenu}
                                className="block py-2.5 px-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md no-underline transition-colors font-medium"
                            >
                                My Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;