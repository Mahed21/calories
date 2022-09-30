import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-danger">
            <div class="container-fluid">
                <button type="button" class="btn btn-danger navbar-brand text-light" to="/">Navbar</button>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/' type="button" class="btn btn-danger me-1">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/' type="button" class="btn btn-danger me-1">About</Link>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-light">Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;