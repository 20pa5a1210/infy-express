import { Link, Navigate } from "react-router-dom";
import loginImg from "./login.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { store } from "../../App";
export default function LoginForm() {
  const [token, setToken] = useContext(store);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:8080/login", data).then((res) => {
      localStorage.setItem("token", res.data.token);
      setToken(localStorage.getItem("token"));
    });
  };
  if (token) {
    return <Navigate to="/myProfile" />;
  }

  return (
    <>
      <div className="flex justify-center bg-gray-50 drop-shadow-2xl shadow-white w-[1000px] mt-10 mx-auto">
        <img
          src={loginImg}
          className="w-[600px] object-cover  bg-slate-900 h-[500px]"
          alt="login"
        />
        <div className="mx-auto">
          <form
            className="mt-32 space-y-3"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-center text-2xl font-mono">Login</h1>
            <div className="flex">
              <label htmlFor="email" className="bg-gray-200 px-1 rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                className="px-1 mx-1 border border-black rounded-sm w-72"
                {...register("mailid", { required: true })}
              />
            </div>
            {errors.mailid && (
              <span className="text-red-500 text-center">
                Email ID is required
              </span>
            )}
            <div className="flex">
              <label htmlFor="password" className="bg-gray-200 px-1 rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="px-1 mx-1 border border-black rounded-sm w-72"
                {...register("password", { required: true })}
              />
            </div>
            {errors.password && (
              <span className="text-red-500 text-center">
                Password is required
              </span>
            )}
            <div className="text-center">
              <input
                type="submit"
                value="Login"
                className="bg-blue-500 text-white text-lg px-6 py-1 cursor-pointer rounded-sm"
              />
            </div>
          </form>
          <p className="text-center my-2">
            Dont Have an Account?{" "}
            <Link to="/register" className="text-blue-800 cursor-pointer">
              Create New
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
