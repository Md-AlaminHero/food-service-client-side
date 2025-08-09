import React, { use } from 'react';
import FoodCard from './FoodCard';

const HotFoods = ({ foodsPromise }) => {

    const foods = use(foodsPromise);
    // console.log(foods);

    return (
        <div className='py-14'>
            <h2 className='text-4xl text-center my-4'>Total Foods: {foods.length}</h2>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default HotFoods;