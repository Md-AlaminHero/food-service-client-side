import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import ToggleTheme from './ToggleTheme';

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);

    //* console.log(user.email);  ----  eita deyate error aschilo

    const links = <>
        {
            user ? <>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/aboutUs'>About Us</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </> : <>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/allFoods'>All Foods</NavLink></li>
                <li><NavLink to='/'>Food Gallery</NavLink></li>
                <li><NavLink to='/aboutUs'>About Us</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </>
        }
    </>

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('sign out user');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-100 shadow-lg border-b-2 border-yellow-500 sticky top-0 left-0 w-full z-50 px-2 lg:px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='text-2xl font-bold text-orange-400'><NavLink to='/'>Foodi</NavLink></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {/* {
                    user ? <button onClick={handleSignOut} className='btn'>Sign out</button> :
                        <>
                            <NavLink className='btn' to='/register'>Register</NavLink>
                            <NavLink className='btn' to='/signin'>SignIn</NavLink>
                        </>
                } */}
                {user ?
                    <div className='flex gap-3 items-center'>
                        {/* <ToggleTheme></ToggleTheme> */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" data-tip="hello">
                                    <img
                                        title='User Name'
                                        alt="Tailwind CSS Navbar component"
                                        src={`${user && user.photoURL}`} />
                                    {
                                        user ?
                                            <Link to='/signin' onClick={handleSignOut} className="btn btn-primary px-10 ">Log Out</Link> :
                                            <Link to='/signin' className="btn btn-primary px-10 ">Login</Link>
                                    }
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3">
                                <ToggleTheme></ToggleTheme>
                                <li><NavLink to='/MyOrders'>MyOrders</NavLink></li>
                                <li><NavLink to='/AddFood'>Add Food</NavLink></li>
                                <li><NavLink to='/MyPostedFoods'>My Posted Foods</NavLink></li>
                                <li><NavLink to='/allFoods'>All Foods</NavLink></li>
                                <li><NavLink to='/'>Food Gallery</NavLink></li>
                                <li><Link to='/signin' onClick={handleSignOut} className="btn btn-primary px-10 ">Log Out</Link></li>
                            </ul>
                        </div>
                    </div> :
                    <div className='flex gap-1 items-center'>
                        {/* <NavLink className='btn' to='/register'>Register</NavLink> */}
                        <NavLink className='btn' to='/signin'>SignIn</NavLink>
                        <ToggleTheme></ToggleTheme>
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;