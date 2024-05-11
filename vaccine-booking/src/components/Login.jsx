import React, { useState } from "react";
import email from "../assets/email.png";
import password from "../assets/password.png";
import person from "../assets/person.png";
import "../styles/Login.css";
//login

function Login() {
  const [action, setAction] = useState("Sign up");
  return (
    <div className="container-login">
      <div className="header">
        <div className="text"> {action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"? <div></div>:<div className="input">
          <img src={person} alt="" />
          <input type="text" placeholder="Enter your name" />
        </div>}
        
        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input type="password" placeholder="Enter your password" />
        </div>
      </div>
      {action==="Sign up"?<div></div>:<div className="forgotpassword">
        Lost password?<span>Click here</span>
      </div>}
      <div className="submitcontainer">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign up");
          }}
        >
          Sign up
        </div>
        <div
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default Login;
