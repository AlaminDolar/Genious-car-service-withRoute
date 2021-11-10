import React from 'react';
import { Link } from 'react-router-dom';
import not from '../../../images/404.png'


const NotFound = () => {
    return (
        <div>
            <img src={not} alt=""/>
            <Link to='/'> <button>Go Back</button> </Link>
        </div>
    );
};

export default NotFound;