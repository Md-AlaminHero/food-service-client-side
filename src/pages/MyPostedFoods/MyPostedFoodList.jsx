import React, { use } from 'react';
import { Link } from 'react-router';

const MyPostedFoodList = ({ foodsCreatedByPromise }) => {
    const foods = use(foodsCreatedByPromise);

    return (
        <div>
            <h2 className="text-3xl text-center font-semibold py-3">Total Foods created: {foods.length}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Food Name</th>
                            <th>Food Category</th>
                            <th>Price</th>
                            <th>Update Food</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            foods.map((food, index) => <tr
                                key={food._id}
                                index={index}
                            >
                                <th>{index + 1}</th>
                                <td>{food.food_name}</td>
                                <td>{food.food_category}</td>
                                <td>{food.price} TK</td>
                                <td><Link to={`/customers/${food._id}`}>View Applications</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedFoodList;