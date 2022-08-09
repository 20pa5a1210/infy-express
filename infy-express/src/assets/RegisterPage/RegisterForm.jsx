import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios, { Axios } from "axios";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8080/register", data)
      .then((res) => alert(res.data))
      .catch((err) => alert(err.response.data));
  };
  return (
    <div className="w-[400px] mx-auto drop-shadow-2xl bg-white py-5 shadow-white rounded-md mt-10">
      <h1 className="text-center text-2xl font-semibold">REGISTER</h1>

      <form
        method="post"
        className="flex flex-col space-y-3 box-border px-5 "
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="username">Name</label>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Enter The Name"
          className="border border-gray-400 rounded-sm px-2"
        />
        {errors.username && (
          <span className="text-red-500 text-center">Username is required</span>
        )}
        <label htmlFor="emailid">Email id</label>

        <input
          type="email"
          name="mailid"
          {...register("mailid", { required: true })}
          placeholder="Enter The Email id"
          className="border border-gray-400 rounded-sm px-2"
        />
        {errors.mailid && (
          <span className="text-red-500 text-center">Email ID is required</span>
        )}
        <label htmlFor="number">Ph No:</label>

        <input
          type="number"
          name="number"
          {...register("number", { required: true })}
          placeholder="Enter The Phone Number"
          className="border border-gray-400 rounded-sm px-2"
        />
        {errors.number && (
          <span className="text-red-500 text-center">Number is required</span>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          {...register("password", { required: true })}
          placeholder="Enter The Password"
          className="border border-gray-400 rounded-sm px-2"
        />
        {errors.password && (
          <span className="text-red-500 text-center">Password is required</span>
        )}
        <label htmlFor="confirmpassword">Confirm Password</label>

        <input
          type="password"
          name="confirmpassword"
          {...register("confirmpassword", { required: "enter a password" })}
          placeholder="Confirm Password"
          className="border border-gray-400 rounded-sm px-2"
        />
        {errors.confirmpassword && (
          <span className="text-red-500 text-center">
            Confirm Password is required
          </span>
        )}

        <input
          type="submit"
          value="Register"
          className="bg-blue-500 py-1 text-white"
        />
      </form>
    </div>
  );
};
