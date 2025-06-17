import React from 'react';
import UseAuth from '../../hooks/UseAuth';
import { useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const ApplyOrder = () => {

    const { id } = useParams();
    const { user } = UseAuth();
    // console.log(user);



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
                    <input type="text" name='food_name' className="input w-full" placeholder="Food Name" />

                    <label className="label">Quantity</label>
                    <input type="number" name='quantity' className="input w-full" placeholder="Quantity" />

                    <label className="label">Price</label>
                    <input type="number" name='price' className="input w-full" placeholder="Price" />

                    <label className="label">User Name</label>
                    <input type="text" name='user_name' defaultValue={user.name} className="input w-full" placeholder="User Name" />

                    <label className="label">User Email</label>
                    <input type="text" name='user_email' defaultValue={user.email} className="input w-full" placeholder="User Email" />


                    <input type="submit" className='btn btn-primary' value="Purchase" />
                </fieldset>
            </form>
        </div>
    );
};

export default ApplyOrder;