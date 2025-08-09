import React, { Suspense } from 'react';
import FoodGalleryCard from './FoodGalleryCard';

const FoodGallery = () => {
    const foodsPromise = fetch('https://restaurant-code-server.vercel.app/foods').then(res => res.json());
    return (
        <div>
            <Suspense fallback={`loading.....`}>
                <FoodGalleryCard foodsPromise={foodsPromise} />
            </Suspense>
        </div>
    );
};

export default FoodGallery;