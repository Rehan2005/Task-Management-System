import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("User signed up:", data);
    // Here you can add API call for signing up
    navigate("/dashboard"); // Redirect after signup
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600">
              Join TaskMate today!
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
              <span>Sign Up</span>
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-6 bg-white px-10 pt-14 pb-14"
          >
            <div>
              <p className="text-blue-600 text-3xl font-bold text-center">
                Create an account
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <Textbox
                placeholder="Your Name"
                type="text"
                name="name"
                label="Full Name"
                className="w-full rounded-full"
                register={register("name", { required: "Name is required!" })}
                error={errors.name ? errors.name.message : ""}
              />

              <Textbox
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Email Address"
                className="w-full rounded-full"
                register={register("email", { required: "Email Address is required!" })}
                error={errors.email ? errors.email.message : ""}
              />

              <Textbox
                placeholder="your password"
                type="password"
                name="password"
                label="Password"
                className="w-full rounded-full"
                register={register("password", { required: "Password is required!" })}
                error={errors.password ? errors.password.message : ""}
              />

              <Button
                type="submit"
                label="Sign Up"
                className="w-full h-10 bg-blue-700 text-white rounded-full"
              />

              <p className="text-sm text-center text-gray-600">
                Already have an account? {" "}
                <span
                  className="text-blue-600 hover:underline cursor-pointer"
                  onClick={() => navigate("/log-in")}
                >
                  Log in
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
