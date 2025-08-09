import React from "react";
import { NavLink } from "react-router";

const SliderImage = () => {
    return (
        <div className="carousel w-full h-[450px] sm:h-[400px] xs:h-[300px] md:h-[450px] relative">
            {/* slide1 */}
            <div id="slide1" className="carousel-item relative w-full h-full">
                <img
                    src="https://i.postimg.cc/NjvXkCWb/burger-cover1.jpg"
                    className="w-full h-full object-cover"
                    alt="Burger"
                />
                <div className="absolute top-[45%] left-[5%] max-w-xs sm:max-w-md md:max-w-lg text-white">
                    <p className="text-base sm:text-lg md:text-xl">
                        A restaurant website description should be concise and informative, highlighting the restaurant's unique qualities and providing essential information like location, cuisine, and hours of operation
                    </p>
                    <NavLink to="/allFoods">
                        <button className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition-colors duration-200 cursor-pointer">
                            Explore
                        </button>
                    </NavLink>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>

            {/* slide2 */}
            <div id="slide2" className="carousel-item relative w-full h-full">
                <img
                    src="https://i.postimg.cc/ry9Nsk3c/cover-images-food.jpg"
                    className="w-full h-full object-cover"
                    alt="Food"
                />
                <div className="absolute top-[45%] left-[5%] max-w-xs sm:max-w-md md:max-w-lg text-white">
                    {/* <p className="text-base sm:text-lg md:text-xl">
                        A restaurant website description should be concise and informative, highlighting the restaurant's unique qualities and providing essential information like location, cuisine, and hours of operation
                    </p>
                    <NavLink to="/allFoods">
                        <button className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition-colors duration-200 cursor-pointer">
                            Explore
                        </button>
                    </NavLink> */}
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>

            {/* slide3 */}
            <div id="slide3" className="carousel-item relative w-full h-full">
                <img
                    src="https://i.postimg.cc/SQZYHNHX/might-fine-food-fare.jpg"
                    className="w-full h-full object-cover"
                    alt="Food"
                />
                <div className="absolute top-[45%] left-[5%] max-w-xs sm:max-w-md md:max-w-lg text-white">
                    <p className="text-base sm:text-lg md:text-xl">
                        A restaurant website description should be concise and informative, highlighting the restaurant's unique qualities and providing essential information like location, cuisine, and hours of operation
                    </p>
                    <NavLink to="/allFoods">
                        <button className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition-colors duration-200 cursor-pointer">
                            Explore
                        </button>
                    </NavLink>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SliderImage;
