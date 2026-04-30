import Link from 'next/link';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';
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
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Not logged in</h1>
                    <Link href="/login" className="text-indigo-600 dark:text-indigo-400 hover:underline">Login</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 md:py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Back button */}
                <div className="mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-medium"
                    >
                        <FaArrowLeft size={16} />
                        Back to Home
                    </Link>
                </div>

                {/* Profile Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    {/* Header with avatar */}
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 px-6 py-8 border-b border-indigo-100 dark:border-indigo-800">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center">
                                {user.image ? (
                                    <Image width={200} height={200} src={user.image} alt={user.name} className="w-full h-full object-cover" />
                                ) : (
                                    <FaUserCircle className="w-16 h-16 text-indigo-500 dark:text-indigo-400" />
                                )}
                            </div>
                            <div className="text-center sm:text-left">
                                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{user.name}</h1>
                                <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Member since {new Date(user.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Edit Profile Section */}
                    <div className="p-6">
                        <EditProfileForm user={user} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;