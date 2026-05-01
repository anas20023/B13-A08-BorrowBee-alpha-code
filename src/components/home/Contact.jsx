'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill all fields");
            return;
        }
        setIsLoading(true);
        // Replace with your API endpoint
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast.success("Message sent! We'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
    };

    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white dark:bg-gray-900 py-16 md:py-20"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a question or suggestion? We’d love to hear from you. Fill out the form or reach us directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left side – Contact Information */}
                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                Contact Information
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                We’re here to help and answer any question you might have.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="text-indigo-500 dark:text-indigo-400 mt-1" />
                                    <div>
                                        <p className="text-gray-800 dark:text-white font-medium">Visit Us</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            123 Library Street, Booktown, BK 10001
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaEnvelope className="text-indigo-500 dark:text-indigo-400 mt-1" />
                                    <div>
                                        <p className="text-gray-800 dark:text-white font-medium">Email Us</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            support@borrowbee.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaPhoneAlt className="text-indigo-500 dark:text-indigo-400 mt-1" />
                                    <div>
                                        <p className="text-gray-800 dark:text-white font-medium">Call Us</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            +1 (555) 123-4567
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaClock className="text-indigo-500 dark:text-indigo-400 mt-1" />
                                    <div>
                                        <p className="text-gray-800 dark:text-white font-medium">Support Hours</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Mon – Fri, 9:00 AM – 6:00 PM (EST)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                            <h4 className="text-gray-800 dark:text-white font-semibold mb-3">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" aria-label="Facebook" className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors">
                                    <FaFacebookF size={18} />
                                </a>
                                <a href="#" aria-label="Twitter" className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors">
                                    <FaTwitter size={18} />
                                </a>
                                <a href="#" aria-label="Instagram" className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors">
                                    <FaInstagram size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side – Contact Form */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                            Send Us a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactForm;