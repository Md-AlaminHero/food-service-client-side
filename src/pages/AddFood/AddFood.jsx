import React from 'react';
import UseAuth from '../../hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddFood = () => {

    const { user } = UseAuth();

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const foodData = Object.fromEntries(formData.entries());
        // console.log(foodData);

        // save job to the database

        axios.post('https://food-service-server-side.vercel.app/foods', foodData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Food has been Added",
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
            <h2 className="text-3xl text-center">Add a New Food</h2>
            <form onSubmit={handleAddFood}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Basic Food Info</legend>

                    <label className="label">Food Name</label>
                    <input type="text" name='food_name' className="input w-full" placeholder="Food Name" />

                    <label className="label">Food Image</label>
                    <input type="text" name='food_image' className="input w-full" placeholder="Food Image URL" />

                    <label className="label">Quantity</label>
                    <input type="number" name='quantity' className="input w-full" placeholder="Quantity" />

                    <label className="label">Price</label>
                    <input type="number" name='price' className="input w-full" placeholder="Price" />

                </fieldset>

                {/* Food category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Food Category</legend>
                    <select defaultValue="Food Category" name='food_category' className="select w-full">
                        <option disabled={true}>Food category</option>
                        <option>Burgers & Sandwiches</option>
                        <option>Pasta & Noodles</option>
                        <option>Pizza</option>
                        <option>Rice Dishes (e.g., Biryani, Fried Rice)</option>
                        <option>Curry & Gravy Items</option>
                        <option>BBQ & Grilled Items</option>
                        <option>Steaks & Chops</option>
                        <option>Wraps & Rolls</option>
                        <option>Seafood Dishes</option>
                        <option>Vegetarian & Vegan Meals</option>
                        <option>Nachos</option>
                    </select>
                </fieldset>

                {/* Food Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Food Description</legend>
                    <textarea className="textarea w-full" name='description' placeholder="Food Description"></textarea>
                </fieldset>

                {/* Food Origin (Country) */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Food Origin</legend>
                    <select defaultValue="Bangladesh" name='food_origin' className="select w-full">
                        <option disabled={true}>Food Origin</option>
                        <option>Bangladesh</option>
                        <option>United States</option>
                        <option>Italy</option>
                        <option>Thailand</option>
                        <option>China</option>
                        <option>Mexico</option>
                        <option>Turkey</option>
                        <option>Japan</option>
                        <option>France</option>
                        <option>Spain</option>
                        <option>Lebanon</option>
                    </select>
                </fieldset>

                {/* Added By */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Added By</legend>

                    <label className="label">User Name</label>
                    <input type="text" name='user_name' defaultValue={user.name} className="input w-full" placeholder="User Name" />

                    <label className="label">User Email</label>
                    <input type="text" name='user_email' defaultValue={user.email} className="input w-full" placeholder="User Email" />
                </fieldset>

                <input type="submit" className='btn btn-primary w-full' value="Add Food" />
            </form>
        </div>
    );
};

export default AddFood;