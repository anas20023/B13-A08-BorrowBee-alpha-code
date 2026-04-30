'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/utils/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            toast.error("Email and password are required!");
            return;
        }

        setIsLoading(true);
        try {
            const { data, error } = await authClient.signIn.email({
                email: formData.email,
                password: formData.password,
                callbackURL: "/",
            });

            if (data) {
                toast.success("Login Successful!");
                router.push('/');
            }
            if (error) {
                toast.error(error.message || "Something went wrong");
                setFormData({
                    email: '',
                    password: '',
                });
            }
        } catch (err) {
            toast.error("An unexpected error occurred");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        try {
            await authClient.signIn.social({
                provider: "google",
            })
            toast.success('Login with Google Successfully');
        } catch (error) {
            toast.error(error.message || 'Something went wrong');
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-12 transition-colors">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 transition-colors">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Welcome back
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        Log in to continue borrowing books
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Logging in..." : "Log In"}
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

                {/* Google Login Button */}
                <button
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    <FcGoogle size={20} />
                    <span>{isLoading ? "Please wait..." : "Continue with Google"}</span>
                </button>

                {/* Link to Registration Page */}
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                    Don&apos;t have an account?{' '}
                    <Link href="/register" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;