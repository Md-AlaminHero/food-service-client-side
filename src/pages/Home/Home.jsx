import React, { Suspense } from 'react';
import Banner from './Banner';
import HotFoods from './HotFoods';
import SliderImage from './SliderImage';

const Home = () => {

    const foodsPromise = fetch('https://restaurant-code-server.vercel.app/foods').then(res => res.json());

    return (
        <div>
            <SliderImage></SliderImage>
            <Banner></Banner>
            <Suspense fallback={`loading.....`}>
                <HotFoods foodsPromise={foodsPromise}></HotFoods>
            </Suspense>
        </div>
    );
};

export default Home;