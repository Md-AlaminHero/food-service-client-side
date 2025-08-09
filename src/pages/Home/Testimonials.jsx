import React, { useState, useEffect } from "react";

const testimonials = [
    { id: 1, name: "Sarah W.", text: "The best food delivery experience I've ever had!" },
    { id: 2, name: "James K.", text: "Amazing flavors and super fast service." },
    { id: 3, name: "Lina M.", text: "Customer service was very helpful and the food was delicious." },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const { name, text } = testimonials[current];

    return (
        <section className="my-20 py-12 px-6 max-w-4xl mx-auto text-center rounded-lg shadow">
            <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
            <p className="italic text-lg text-gray-700 mb-4">"{text}"</p>
            <p className="font-semibold text-orange-500">- {name}</p>
        </section>
    );
};

export default Testimonials;
