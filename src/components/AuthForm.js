import React, { useState } from "react";
 import { Formik } from 'formik';
 import * as Yup from "yup";


export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
        <Formik initialValues={{email: '', password: ''}}>
        <div className="container">
        <div className="form-toggle">
          <button
            onClick={() => setIsLogin(true)}
            className={isLogin ? "active" : ""}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={!isLogin ? "active" : ""}
          >
            Sign up
          </button>
        </div>
      
      {isLogin ? (
        <>
          <div className="form">
            <h2>Log In</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="/">Forgot password?</a>
            <button >Login</button>
            <p>
              Not a Member?{" "}
              <a href="#" onClick={() => setIsLogin(false)}>
                Sign Up
              </a>
            </p>
          </div>
        </>
      ) : (
        <>
        <div className="form">
        <h2>Sign up</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign up</button>
        </div>
        </>
      )}
    </div>
        </Formik>
    </div>
  );
}
