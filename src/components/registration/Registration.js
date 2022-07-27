import React from "react";
import { useForm } from "react-hook-form";
import "./Registraion.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Registration = () => {
  const onSubmit = async (data) => {};
  const {navigate} = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="reg-cover">
      <div className="reg-card">
        <h2>Create Account</h2>
        <p>Fill in the details below to create an account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="inputG"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
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

          {/* ===================== */}

          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Your ID"
              className="inputG"
              {...register("id", {
                required: {
                  value: true,
                  message: "ID is Required",
                },
              })}
            />
            <label className="label">
              {errors.id?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.id.message}
                </span>
              )}
            </label>
          </div>

          {/* =================== */}

          <div className="form-control w-full max-w-xs">
            <input
              type="number"
              placeholder="Your Mobile Number"
              className="inputG"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone number is Required",
                },
              })}
            />
            <label className="label">
              {errors.phone?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.phone.message}
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

          {/* ================================ */}

          <div className="form-control w-full max-w-xs">
            <input
              type="password"
              placeholder="Confirm Password"
              className="inputG"
              {...register("passwordC", {
                required: {
                  value: true,
                  message: "Password didn't match",
                },
              })}
            />
            <label className="label">
              {errors.passwordC?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.passwordC.message}
                </span>
              )}
            </label>
          </div>
          {/* =========================================== */}
          <div className="form-control choice last">
            <label className="label">
              <span className="label-text">Select Your Role</span>
            </label>
            <select
              type="text"
              className="inputG"
              {...register("role", {
                required: {
                  value: true,
                  message: "Role is Required",
                },
              })}
            >
              <option
                className="select-text selected"
                value=""
                disabled
                selected
              ></option>
              <option className="select-text" value="HUB">
                HUB
              </option>
              <option className="select-text" value="EFF">
                EFF
              </option>
              <option className="select-text" value="TSG">
                TSG
              </option>
            </select>

            <label className="label">
              {errors.role?.type === "required" && (
                <span className="label-text-alt">{errors.role.message}</span>
              )}
            </label>
          </div>
          <div className="terms">
            <input className="check-btn" type="checkbox" />I read and agree to
            the <a href="">Terms &amp; Conditions</a>
          </div>

          <input className="submit-btn" type="submit" value="Create Account" />
        </form>
        <div>
          <h3>Already have an account?<NavLink className="log-b" to="/login">Sign In</NavLink></h3>
        </div>
      </div>
    </div>
  );
};

export default Registration;
