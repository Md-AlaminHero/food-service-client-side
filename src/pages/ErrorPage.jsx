import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
            <h1 className="text-9xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Oops! Page not found</h2>
            <p className="text-gray-600 mt-2">
                The page you are looking for doesn’t exist or has been moved.
            </p>
            <Link
                to="/"
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
                Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;
