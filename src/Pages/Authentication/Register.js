import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";

const Register = () => {
  const { emailPassSignIn } = UseAuth();
  const [email, setEmail] = useState({});
  const [pass, setPass] = useState({});
  const [conPass, setConPass] = useState({});
  const [name, setName] = useState({});
  let navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleConPass = (e) => {
    setConPass(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (pass === conPass) {
      emailPassSignIn(email, pass, navigate, name);
    } else {
      alert("Password and Confirm Password is not match");
    }
  };
  return (
    <div>
      <div className="row login d-flex align-items-center">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <form onSubmit={handleRegister}>
            <h3 className="text-center mb-4">Create Account</h3>
            <label>Enter Name</label>
            <input
              className="mb-3 w-100"
              type="text"
              onBlur={handleName}
              required
            />
            <br />
            <label>Enter Email</label>
            <input
              className="mb-3 w-100"
              type="email"
              onBlur={handleEmail}
              required
            />
            <br />
            <label>Enter Password</label>
            <input
              className="w-100"
              type="password"
              onBlur={handlePass}
              required
            />
            <br />
            <label>Confirm Password</label>
            <input
              className="w-100"
              type="password"
              onBlur={handleConPass}
              required
            />
            <Link to="/login">Already account?</Link>
            <br />
            <br />
            <input
              type="submit"
              value="Register"
              className="loginBtn ps-3 pe-3 pt-1 pb-1"
            />
            <br />
          </form>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default Register;
