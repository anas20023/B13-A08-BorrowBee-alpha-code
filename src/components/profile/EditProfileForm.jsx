'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { authClient } from '@/utils/auth-client';
import Image from 'next/image';

const EditProfileForm = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user.name || '');
    const [imageUrl, setImageUrl] = useState(user.image || '');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Adjust the API call to match your auth client
            const { error } = await authClient.updateUser({
                name: name,
                image: imageUrl,
            });
            if (error) throw new Error(error.message);
            toast.success('Profile updated successfully!');
            setIsEditing(false);
            // Refresh session and page
            window.location.reload();
        } catch (err) {
            toast.error(err.message || 'Failed to update profile');
        } finally {
            setIsLoading(false);
        }
    };

    // Preview mode – show current info with edit button
    if (!isEditing) {
        return (
            <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Current Name</div>
                    <div className="text-gray-800 dark:text-white font-medium">{user.name}</div>
                </div>
                {user.image && (
                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Current Avatar URL</div>
                        <div className="text-gray-800 dark:text-white font-mono text-sm break-all">{user.image}</div>
                    </div>
                )}
                <button
                    onClick={() => setIsEditing(true)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-4 rounded-lg transition-colors font-medium"
                >
                    Edit Profile
                </button>
            </div>
        );
    }

    // Edit mode – form
    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name *
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Your full name"
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
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Optional – leave empty to keep current or remove avatar
                </p>
            </div>
            {imageUrl && (
                <div className="mt-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Preview</div>
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                        <Image width={200} height={200} src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                </div>
            )}
            <div className="flex gap-3 pt-2">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-4 rounded-lg transition-colors disabled:opacity-50 font-medium"
                >
                    {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2.5 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EditProfileForm;