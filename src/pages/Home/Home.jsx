import React, { Suspense } from 'react';
import Banner from './Banner';
import HotFoods from './HotFoods';
import SliderImage from './SliderImage';
import FAQ from './FAQ';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';

const Home = () => {

    const foodsPromise = fetch('https://food-service-server-side.vercel.app/foods').then(res => res.json());

    return (
        <div>
            <SliderImage></SliderImage>
            <Banner></Banner>
            <Suspense fallback={`loading.....`}>
                <HotFoods foodsPromise={foodsPromise}></HotFoods>
            </Suspense>
            <WhyChooseUs></WhyChooseUs>
            <FAQ></FAQ>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;