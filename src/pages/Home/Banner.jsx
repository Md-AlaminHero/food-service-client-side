import React from 'react';
import { motion } from "motion/react";
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-10/12 py-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src="https://i.postimg.cc/k4xMq9Jt/view-ready-eat-delicious-meal-go.jpg"
                        animate={{ y: [80, 120, 80] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="max-w-sm border-orange-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                    />
                    <motion.img
                        src="https://i.postimg.cc/sD1FJyk9/pexels-duartefotografia-32538758.jpg"
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, delay: 2, repeat: Infinity }}
                        className="max-w-sm border-orange-500 border-r-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: { duration: 4 }
                        }}
                        className="text-5xl font-bold">Best <motion.span
                            animate={{
                                color: ['#ff5733', '#11a61d', '#a833ff'],
                                transition: { duration: 3, repeat: Infinity }
                            }}
                        >Food</motion.span> For You!</motion.h1>

                    <p className="py-6">
                        A restaurant website description should be concise and informative, highlighting the restaurant's unique qualities and providing essential information like location, cuisine, and hours of operation.
                    </p>
                    <Link to='/allFoods' className="bg-transparent border font-semibold border-teal-200 px-4 py-2 rounded-xl hover:bg-orange-500 transition-colors duration-200 cursor-pointer">Explore Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;