import React from 'react';

const SliderImage = () => {
    return (
        <div className="carousel w-full h-[450px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.postimg.cc/NjvXkCWb/burger-cover1.jpg"
                    className="w-full" />
                <div className='absolute top-[45%] left-[5%]'>
                    <p className='text-xl text-white'>A restaurant website description should be concise and informative, highlighting the restaurant's unique qualities and providing essential information like location, cuisine, and hours of operation</p>
                    <button className='btn btn-primary'>Explore</button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.postimg.cc/ry9Nsk3c/cover-images-food.jpg"
                    className="w-full" />
                <div className='absolute top-[45%] left-[5%]'>
                    <p className='text-xl text-white'>A restaurant website description should be concise and informative, highlighting the restaurant's unique qualities and providing essential information like location, cuisine, and hours of operation</p>
                    <button className='btn btn-primary'>Explore</button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.postimg.cc/SQZYHNHX/might-fine-food-fare.jpg"
                    className="w-full" />
                <div className='absolute top-[45%] left-[5%]'>
                    <p className='text-xl text-white'>A restaurant website description should be concise and informative, highlighting the restaurant's unique qualities and providing essential information like location, cuisine, and hours of operation</p>
                    <button className='btn btn-primary'>Explore</button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default SliderImage;