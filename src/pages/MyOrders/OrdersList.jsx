import React, { use } from 'react';
import MyOrderRow from './MyOrderRow';

const OrdersList = ({ MyOrdersPromise }) => {

    const orders = use(MyOrdersPromise);
    // console.log(orders);
    return (
        <div>
            <h2 className="text-3xl py-10">Total Food Purchases : {orders.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Buying Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <MyOrderRow
                                key={order._id}
                                index={index}
                                order={order}></MyOrderRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default OrdersList;