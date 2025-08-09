import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import FoodDetails from '../pages/FoodDetails/FoodDetails';
import PrivateRoute from '../Context/PrivateRoute';
import ApplyOrder from '../pages/ApplyOrder/ApplyOrder';
import MyOrders from '../pages/MyOrders/myOrders';
import AddFood from '../pages/AddFood/AddFood';
import MyPostedFoods from '../pages/MyPostedFoods/MyPostedFoods';
import ViewOrders from '../pages/ViewOrders/ViewOrders';
import AllFoods from '../pages/AllFoods/AllFoods';
import AboutUs from '../pages/Shared/AboutUs';
import Contact from '../pages/Shared/Contact';
import FoodGallery from '../pages/Home/FoodGallery';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/aboutUs',
                Component: AboutUs
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/food-gallery',
                Component: FoodGallery
            },
            {
                path: 'allFoods',
                Component: AllFoods
            },
            {
                path: '/foods/:id',
                Component: FoodDetails,
                loader: ({ params }) => fetch(`https://restaurant-code-server.vercel.app/foods/${params.id}`)
            },
            {
                path: '/purchase/:id',
                element: <PrivateRoute>
                    <ApplyOrder></ApplyOrder>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://restaurant-code-server.vercel.app/foods/${params.id}`)
            },
            {
                path: 'myOrders',
                element: <PrivateRoute>
                    <MyOrders></MyOrders>
                </PrivateRoute>
            },
            {
                path: '/AddFood',
                element: <PrivateRoute>
                    <AddFood></AddFood>
                </PrivateRoute>
            },
            {
                path: 'MyPostedFoods',
                element: <PrivateRoute>
                    <MyPostedFoods></MyPostedFoods>
                </PrivateRoute>
            },
            {
                path: 'customers/:food_id',
                element: <PrivateRoute>
                    <ViewOrders></ViewOrders>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://restaurant-code-server.vercel.app/customers/food/${params.food_id}`)
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/signin',
                Component: SignIn
            }
        ]
    }
])
