import React, { Suspense } from 'react';
import FoodGalleryCard from './FoodGalleryCard';
import LoadingSpinner from '../Shared/LoadingSpinner';

const FoodGallery = () => {
    const foodsPromise = fetch('https://food-service-server-side.vercel.app/foods').then(res => res.json());
    return (
        <div>
            <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
                <FoodGalleryCard foodsPromise={foodsPromise} />
            </Suspense>
        </div>
    );
};

export default FoodGallery;