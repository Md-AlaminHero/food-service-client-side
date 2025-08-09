import React, { Suspense } from 'react';
import OrderStats from './OrderStats';
import OrdersList from './OrdersList';
import UseAuth from '../../hooks/UseAuth';
import { MyOrdersPromise } from '../../API/ordersAPI';
import LoadingSpinner from '../Shared/LoadingSpinner';

const MyOrders = () => {

    const { user } = UseAuth();
    return (
        <div className='min-h-screen'>
            <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
                <OrdersList MyOrdersPromise={MyOrdersPromise(user.email)}></OrdersList>
            </Suspense>
            <div className='py-5'>
                {/* <OrderStats></OrderStats> */}
            </div>
        </div>
    );
};

export default MyOrders;