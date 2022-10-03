import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import "./Authentication.css";

const Login = () => {
  let navigate = useNavigate();
  const { user, emailPassLogIn } = UseAuth();
  if (user.email) {
    navigate("/");
  }
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const passHandle = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    emailPassLogIn(email, password, navigate);
  };
  return (
    <div>
      <div className="row login d-flex align-items-center">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <form onSubmit={handleLogin}>
            <h3 className="text-center mb-4">login</h3>
            <label>Enter Email</label>
            <input
              className="mb-3 w-100"
              type="email"
              onBlur={emailHandle}
              required
            />
            <br />
            <label>Enter Password</label>
            <input
              className="w-100"
              type="password"
              onBlur={passHandle}
              required
            />
            <span>
              Dont have an account? <Link to="/register">create Account</Link>{" "}
            </span>
            <br />
            <br />
            <input
              type="submit"
              value="Login"
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

export default Login;
