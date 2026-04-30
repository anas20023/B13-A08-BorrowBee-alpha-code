'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { authClient } from '@/utils/auth-client';
import { useRouter } from 'next/navigation';

const EditProfileForm = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user.name || '');
    const [imageUrl, setImageUrl] = useState(user.image || '');
    const [isLoading, setIsLoading] = useState(false);
    const router=useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { error } = await authClient.updateUser({
                name: name,
                image: imageUrl,
            });
            if (error) throw new Error(error.message);
            toast.success('Profile updated successfully!');
            router.refresh()
            setIsEditing(false);
        } catch (err) {
            toast.error(err.message || 'Failed to update profile');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isEditing) {
        return (
            <div className="text-center">
                <button
                    onClick={() => setIsEditing(true)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                    Edit Profile
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Profile Image URL
                </label>
                <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://example.com/avatar.jpg"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Optional – leave blank to keep current avatar
                </p>
            </div>
            <div className="flex gap-3">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50"
                >
                    {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EditProfileForm;