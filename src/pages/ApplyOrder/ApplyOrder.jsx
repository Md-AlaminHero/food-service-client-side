import React from 'react';
import UseAuth from '../../hooks/UseAuth';
import { useLoaderData, useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const ApplyOrder = () => {
    const food = useLoaderData();
    const { id } = useParams();
    const { user } = UseAuth();
    console.log(user, food);



    const handleApplyOrder = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const foodData = Object.fromEntries(formData.entries());

        const currentTime = new Date(Date.now()).toLocaleString();

        const order = {
            foodId: id,
            customer: user.email,
            buying_time: currentTime,
            ...foodData
        }

        axios.post('https://restaurant-code-server.vercel.app/customers', order)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your order has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log(order);
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div className='max-w-10/12 mx-auto py-5'>
            <div>
                <h2 className="text-2xl text-center py-4">Purchase Form</h2>
            </div>
            <form onSubmit={handleApplyOrder}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Food Name</label>
                    <input type="text" name='food_name' defaultValue={food.food_name} readOnly className="input w-full" placeholder="Food Name" />

                    <label className="label">Quantity</label>
                    <input type="number" name='quantity' defaultValue={food.quantity} readOnly className="input w-full" placeholder="Quantity" />

                    <label className="label">Price</label>
                    <input type="number" name='price' defaultValue={food.price} readOnly className="input w-full" placeholder="Price" />

                    <label className="label">User Name</label>
                    <input type="text" name='user_name' defaultValue={user.displayName} className="input w-full" placeholder="User Name" />

                    <label className="label">User Email</label>
                    <input type="email" name='user_email' defaultValue={user.email} className="input w-full" placeholder="User Email" />

                    <label className="label">User Address</label>
                    <input type="text" name='user_address' className="input w-full" placeholder="User Address" />


                    <input type="submit" className='bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition-colors duration-200 cursor-pointer' value="Purchase" />
                </fieldset>
            </form>
        </div>
    );
};

export default ApplyOrder;