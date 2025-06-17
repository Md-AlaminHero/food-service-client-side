import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import MyPostedFoodList from './MyPostedFoodList';
import { foodsCreatedByPromise } from '../../API/foodsAPI';

const MyPostedFoods = () => {

    const { user } = UseAuth();
    return (
        <div className='min-h-screen'>
            {/* <h2 className="text-3xl">My Posted Jobs: </h2> */}
            <Suspense fallback={`loading job list.....`}>
                <MyPostedFoodList foodsCreatedByPromise={foodsCreatedByPromise(user.email)}></MyPostedFoodList>
            </Suspense>
        </div>
    );
};

export default MyPostedFoods;