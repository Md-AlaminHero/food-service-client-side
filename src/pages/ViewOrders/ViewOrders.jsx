import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewOrders = () => {
    const { food_id } = useParams();
    const myOrders = useLoaderData();

    const handleStatusChange = (e, customer_id) => {
        // console.log(e.target.value, customer_id);

        axios.patch(`https://restaurant-code-server.vercel.app/customers/${customer_id}`, { status: e.target.value })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Job singleOrder Status has been Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='min-h-screen'>
            <h2 className="text-3xl py-6 text-center">{myOrders.length} Total Orders for Food id : {food_id}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Email</th>
                            <th>Food Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            myOrders.map((singleOrder, index) => <tr key={singleOrder._id} index={index}>
                                <th>{index + 1}</th>
                                <td>{singleOrder.user_email}</td>
                                <td>{singleOrder.food_name}</td>
                                <td>
                                    <select onChange={e => handleStatusChange(e, singleOrder._id)}
                                        defaultValue={singleOrder.status}
                                        className="select">
                                        <option disabled={true}>Update Status</option>
                                        <option>Order Placed</option>
                                        <option>Processing</option>
                                        <option>Packing</option>
                                        <option>Delivering</option>
                                        <option>Delivered</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewOrders;