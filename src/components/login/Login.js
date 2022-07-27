import React from "react";
import { useForm } from "react-hook-form";
import "../registration/Registraion.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Login = () => {
  const onSubmit = async (data) => {};
  const {navigate} = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="reg-cover">
      <div className="reg-card reg-card2">
        <h2>Welcome Back!</h2>
        <p>Please login to your account</p>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-control w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="inputG"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>


          {/* ================================= */}
          <div className="form-control w-full max-w-xs">
            <input
              type="password"
              placeholder="Password"
              className="inputG"
              {...register("password", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>


          <input className="submit-btn2" type="submit" value="Sign in" />
        </form>
        <div>
          <h3>Don’t have any account? <NavLink className="log-b" to="/registration">Sign up</NavLink></h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
