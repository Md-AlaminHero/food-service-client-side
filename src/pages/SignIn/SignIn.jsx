import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import signInLottie from '../../assets/lotties/signin.json';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const SignIn = () => {

    const location = useLocation();
    // console.log('location in sign in page', location);

    const from = location.state || '/';
    const navigate = useNavigate();


    const { signInUser } = use(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // Sign In user
        signInUser(email, password)
            .then(result => {
                // console.log(result);
                Swal.fire({
                    title: 'Login Successful!',
                    text: 'Welcome back!',
                    icon: 'success',
                    confirmButtonText: 'Continue',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
                navigate(from)
            })
            .catch(error => {
                // console.log(error);
                Swal.fire("Please check email and password");
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{ width: '250px' }} animationData={signInLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">SignIn now!</h1>
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Sign In</button>
                            </fieldset>
                            <p>
                                <small>
                                    Don't have an account?
                                    <Link to='/register' className='btn-link text-blue-700'> Register</Link>
                                </small>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;