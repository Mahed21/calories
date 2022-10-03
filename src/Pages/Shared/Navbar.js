import React from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";

const Navbar = () => {
  const { user, Logout } = UseAuth();
  // console.log(user);
  // console.log(user.email);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link type="button" className="btn btn-light navbar-brand" to="/">
          Calorie Calculator
        </Link>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="d-flex">
              <li className="nav-item">
                <Link to="/" type="button" className="btn btn-light me-1">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" type="button" className="btn btn-light me-1">
                  About
                </Link>
              </li>
              {user.email ? (
                <li className="nav-item ms-2">
                  <Link to="/totalCalorie">
                    <button type="button" className="btn btn-light me-1">
                      Saved Calories
                    </button>
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!user.email ? (
                <li className="nav-item">
                  <Link to="/login">
                    {" "}
                    <button type="button" className="btn btn-danger">
                      Login
                    </button>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={Logout}
                  >
                    Logout
                  </button>
                </li>
              )}

            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
