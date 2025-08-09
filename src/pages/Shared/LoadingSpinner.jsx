import React from 'react';
import { RiseLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='text-center h-screen flex items-center justify-center'>
            <RiseLoader color="#f4b61a" />
        </div>
    );
};

export default LoadingSpinner;