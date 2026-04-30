import { Spinner } from "@heroui/react";

export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900">
            <Spinner size="lg" color="primary" label="Loading..." labelColor="primary" />
        </div>
    );
}