import React from "react";
import "./Authentication.css";

const Login = () => {
  return (
    <div>
      <div className="row login d-flex align-items-center">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <form>
            <h3 className="text-center mb-4">login</h3>
            <label>Enter Email</label>
            <input className="mb-3 w-100" type="email" />
            <br />
            <label>Enter Password</label>
            <input className="w-100" type="password" />
            <span>Dont have an account?create one </span>
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
