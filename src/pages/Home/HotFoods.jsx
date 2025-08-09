import React, { useState, useMemo } from "react";
import FoodCard from "./FoodCard";

const HotFoods = ({ foodsPromise }) => {
  const foods = React.use(foodsPromise);

  // State for sorting order: 'asc' | 'desc' | 'none'
  const [sortOrder, setSortOrder] = useState("none");

  // Sort foods based on price and sortOrder
  const sortedFoods = useMemo(() => {
    if (sortOrder === "none") return foods;

    return [...foods].sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      else return b.price - a.price;
    });
  }, [foods, sortOrder]);

  return (
    <div className="py-14 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl text-center my-4">Total Foods: {foods.length}</h2>

      {/* Sorting controls */}
      <div className="w-full flex justify-end mb-6 space-x-4">
        <label htmlFor="sort" className="font-medium self-center">
          Sort by Price:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="text-primary border border-gray-300 rounded px-3 py-1"
        >
          <option value="none">Default</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Food cards grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sortedFoods.map((food) => (
          <div key={food._id} className="h-full">
            {/* Wrap FoodCard in a div with fixed height for consistent size */}
            <FoodCard food={food} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotFoods;
