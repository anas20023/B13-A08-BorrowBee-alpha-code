import Link from 'next/link';
import { FaArrowLeft, FaUserEdit, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import { auth } from '@/utils/auth';
import { headers } from 'next/headers';
import EditProfileForm from '@/components/EditProfileForm';
import Image from 'next/image';

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
                <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Not logged in</h1>
                    <Link href="/login" className="text-indigo-600 dark:text-indigo-400 hover:underline">Login</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                {/* Back button */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-medium"
                    >
                        <FaArrowLeft size={16} />
                        Back to Home
                    </Link>
                </div>

                {/* Two‑column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left sidebar – User info card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden sticky top-24">
                            <div className="bg-indigo-600 dark:bg-indigo-700 px-6 py-4">
                                <h2 className="text-white font-semibold text-lg">Profile</h2>
                            </div>
                            <div className="p-6 text-center">
                                <div className="relative w-28 h-28 mx-auto mb-4">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-indigo-100 dark:bg-indigo-900/50 ring-4 ring-indigo-200 dark:ring-indigo-800">
                                        {user.image ? (
                                            <Image width={200} height={200} src={user.image} alt={user.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-indigo-500 dark:text-indigo-400 text-5xl">
                                                {user.name?.charAt(0).toUpperCase()}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{user.name}</h3>
                                <div className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <div className="flex items-center justify-center gap-2">
                                        <FaEnvelope className="text-indigo-500" />
                                        <span>{user.email}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <FaCalendarAlt className="text-indigo-500" />
                                        <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side – Edit profile form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                            <div className="bg-indigo-50 dark:bg-indigo-900/30 px-6 py-4 border-b border-indigo-100 dark:border-indigo-800">
                                <div className="flex items-center gap-2">
                                    <FaUserEdit className="text-indigo-600 dark:text-indigo-400" />
                                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Edit Profile</h2>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Update your name and profile picture URL
                                </p>
                            </div>
                            <div className="p-6">
                                <EditProfileForm user={user} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;