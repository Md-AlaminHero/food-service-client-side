import React, { Suspense } from 'react';
import HotFoods from '../Home/HotFoods';
import LoadingSpinner from '../Shared/LoadingSpinner';

const AllFoods = () => {

    const foodsPromise = fetch('https://restaurant-code-server.vercel.app/foods').then(res => res.json());
    return (
        <div>
            <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
                <HotFoods foodsPromise={foodsPromise}></HotFoods>
            </Suspense>
        </div>
    );
};

export default AllFoods;