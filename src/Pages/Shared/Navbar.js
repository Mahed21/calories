import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link type="button" class="btn btn-light navbar-brand" to="/">Calorie Calculator</Link>
                <div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className='d-flex'>
                            <li class="nav-item">
                                <Link to='/' type="button" class="btn btn-light me-1">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/about' type="button" class="btn btn-light me-1">About</Link>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-danger">Login</button>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;