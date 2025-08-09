import React, { use } from 'react';
import GalleryCardDetails from './GalleryCardDetails';

const FoodGalleryCard = ({ foodsPromise }) => {

    const foods = use(foodsPromise);
    return (
        <div className='py-14'>
            <h2 className='text-4xl text-center my-4'>Total Foods: {foods.length}</h2>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4'>
                {
                    foods.map(food => <GalleryCardDetails key={food._id} food={food} />)
                }
            </div>
        </div>
    );
};

export default FoodGalleryCard;