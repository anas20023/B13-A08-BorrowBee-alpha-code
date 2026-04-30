'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/utils/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const RegistrationPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        imageUrl: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.password) {
            toast.error("All fields are required!");
            return;
        }

        setIsLoading(true);
        try {
            const { data, error } = await authClient.signUp.email({
                name: formData.fullName,
                email: formData.email,
                password: formData.password,
                image: formData.imageUrl,
                callbackURL: "/login",
            });
            if (data) {
                toast.success("Registration Successful!");
                router.push('/login');
            }
            if (error) {
                toast.error(error.message || "Something went wrong");
                setFormData({
                    fullName: '',
                    email: '',
                    password: '',
                    imageUrl: '',
                });
            }
        } catch (err) {
            toast.error("An unexpected error occurred");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignUp = async () => {
        setIsLoading(true);
        toast.warning('Continue with Google clicked');
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-12 transition-colors">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 transition-colors">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Create an account
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        Join BorrowBee and start borrowing books
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-60"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-60"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-60"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Profile Image URL
                        </label>
                        <input
                            type="url"
                            id="imageUrl"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-60"
                            placeholder="https://example.com/avatar.jpg"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Optional – link to your profile picture
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Signing up..." : "Sign Up"}
                    </button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white dark:bg-gray-500 text-gray-500 dark:text-gray-400">
                            Or continue with
                        </span>
                    </div>
                </div>

                {/* Google Sign Up Button */}
                <button
                    onClick={handleGoogleSignUp}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    <FcGoogle size={20} />
                    <span>{isLoading ? "Please wait..." : "Continue with Google"}</span>
                </button>

                {/* Link to Login Page */}
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                    Already have an account?{' '}
                    <Link href="/login" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegistrationPage;