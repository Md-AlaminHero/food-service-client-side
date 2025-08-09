import React, { Suspense } from 'react';
import FoodGalleryCard from './FoodGalleryCard';
import LoadingSpinner from '../Shared/LoadingSpinner';

const FoodGallery = () => {
    const foodsPromise = fetch('https://restaurant-code-server.vercel.app/foods').then(res => res.json());
    return (
        <div>
            <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
                <FoodGalleryCard foodsPromise={foodsPromise} />
            </Suspense>
        </div>
    );
};

export default FoodGallery;