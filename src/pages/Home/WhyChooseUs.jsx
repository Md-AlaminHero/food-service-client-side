import React from "react";

const WhyChooseUs = () => {
    const features = [
        { id: 1, title: "Fresh Ingredients", description: "We use only the freshest, locally sourced ingredients." },
        { id: 2, title: "Fast Delivery", description: "Get your food delivered hot and on time, every time." },
        { id: 3, title: "Customer Satisfaction", description: "Our customers are our priority — 5-star reviews say it all." },
    ];

    return (
        <section className="rounded-2xl border-2 border-orange-400 py-12 px-6 max-w-7xl mx-auto my-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {features.map(({ id, title, description }) => (
                    <div key={id} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2 text-orange-500">{title}</h3>
                        <p className="text-gray-700">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
