import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const {SignInUsingGoogle}=useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={SignInUsingGoogle} className='btn-warning' >Google Sign In</button>
        </div>
    );
};

export default Login;