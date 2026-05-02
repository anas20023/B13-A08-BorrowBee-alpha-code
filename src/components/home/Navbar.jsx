'use client';

import { authClient } from "@/utils/auth-client";
import { Button, Link, Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import NavLink from "../NavLink";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { data } = authClient.useSession();
    const router = useRouter()

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'All Books', href: '/all-books' },
        { label: 'Featured Books', href: '/#featuredbooks' },
    ];

    const closeMenu = () => setIsMenuOpen(false);

    const handleLogout = async () => {
        setLoading(true);
        try {
            await authClient.signOut();
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error(error.message)
        } finally {
            setLoading(false);
            router.refresh()
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm"
        >
            <div className="flex h-16 max-w-6xl mx-auto items-center justify-between px-4 sm:px-6">
                {/* Logo + mobile menu button */}
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden text-gray-600 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <RxCross2 size={22} /> : <MdMenu size={22} />}
                    </button>
                    <Link
                        href="/"
                        className="text-2xl font-bold text-indigo-600 no-underline hover:text-indigo-700 transition-colors"
                    >
                        BorrowBee
                    </Link>
                </div>

                {/* Desktop navigation */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <NavLink link={item.href}>{item.label}</NavLink>
                        </li>
                    ))}
                    {data && (
                        <li>
                            <NavLink link="/profile">My Profile</NavLink>
                        </li>
                    )}
                </ul>

                {/* Auth section */}
                <div>
                    {data ? (
                        <div className="flex flex-row justify-between items-center gap-2">
                            <p className="line-clamp-1 text-zinc-700 font-bold"> Welcome, {data?.user?.name.split(' ', 1)}</p>
                            <Button
                                onClick={handleLogout}
                                variant="danger"
                                disabled={loading}
                            >
                                {loading ? <Spinner size="sm" /> : "Logout"}
                            </Button>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="bg-indigo-600 text-white px-5 py-2 rounded-md no-underline hover:bg-indigo-700 transition-colors font-medium inline-block"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
                    <ul className="flex flex-col gap-1 p-4">
                        {navLinks.map((item) => (
                            <li key={item.href}>
                                <NavLink link={item.href} onClick={closeMenu}>
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                        {data && (
                            <li>
                                <NavLink link="/profile" onClick={closeMenu}>
                                    My Profile
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;