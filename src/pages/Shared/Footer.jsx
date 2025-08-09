import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand Info */}
                <div>
                    <h2 className='text-2xl font-bold text-orange-400'><NavLink to='/'>Foodi</NavLink></h2>
                    <p className="text-gray-400">
                        Bringing you the best food from local kitchens to your doorstep.
                        Fresh, fast, and full of flavor.
                    </p>
                </div>
                {/* Features */}
                <nav className="md:text-center">
                    <h6 className="footer-title">Company</h6>
                    <ul className="space-y-2 text-gray-400 md:text-center">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allFoods'>All Foods</NavLink></li>
                        <li><NavLink to='/food-gallery'>Food Gallery</NavLink></li>
                        <li><NavLink to='/aboutUs'>About Us</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>

                {/* Social Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/" className="p-2 bg-gray-700 rounded-full hover:bg-green-500 transition">
                            <FaFacebookF />
                        </a>
                        <a href="https://x.com/" className="p-2 bg-gray-700 rounded-full hover:bg-green-500 transition">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/" className="p-2 bg-gray-700 rounded-full hover:bg-green-500 transition">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-800 text-center py-4 text-gray-500 text-sm">
                © {new Date().getFullYear()} Foodi. All rights reserved.
            </div>
        </footer>
    );
}
