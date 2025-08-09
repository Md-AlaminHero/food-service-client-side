import React, { useState } from "react";

const faqs = [
    {
        question: "What types of food do you offer?",
        answer: "We offer a wide variety of dishes including burgers, salads, desserts, and local specialties."
    },
    {
        question: "Do you provide home delivery?",
        answer: "Yes, we deliver fresh food directly to your doorstep within the city limits."
    },
    {
        question: "Can I customize my order?",
        answer: "Absolutely! You can customize your order with extra toppings, sides, and sauces."
    },
    {
        question: "What are your operating hours?",
        answer: "We are open daily from 10:00 AM to 10:00 PM."
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto my-20 py-12 px-6 rounded-lg shadow">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                        <button
                            className="w-full text-left px-6 py-4 hover:shadow-2xl flex justify-between items-center focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-semibold text-lg">{faq.question}</span>
                            <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="px-6 py-4 ">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
