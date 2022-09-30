import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-danger">
            <div class="container-fluid">
                <Link type="button" class="btn btn-danger navbar-brand text-light" to="/">Calorie Calculator</Link>
                <div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className='d-flex'>
                            <li class="nav-item">
                                <Link to='/' type="button" class="btn btn-danger me-1">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/about' type="button" class="btn btn-danger me-1">About</Link>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-light">Login</button>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;