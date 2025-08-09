import React from "react";

export default function Contact() {
    return (
        <div className="flex items-center">
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                <p className="text-lg mb-4">
                    We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
                </p>
                <p className="mb-2">
                    Email: <span className="text-green-500 hover:underline">alaminrajf8@gmail.com</span>
                </p>
                <p className="mb-2">
                    Phone: <span className="text-green-500 hover:underline">+8801533686793</span>
                </p>
                <p>
                    Address: Mirpur-1, Dhaka, Bangladesh
                </p>
            </div>
        </div>
    );
}
