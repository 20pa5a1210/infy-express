import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../../App";
export const Navbar = () => {
  const [token, setToken] = useContext(store);
  return (
    <div className="flex justify-between bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-100 py-3 px-20  items-center">
      <div className="text-2xl">
        <a href="#">
          <span>Infy-Express</span>
        </a>
      </div>
      <div className="flex space-x-4 text-lg">
        <a href="/">Home</a>
        <Link to="/services">List of Services</Link>
        {!token && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        {token && <Link to="/myProfile">Profile</Link>}
        {token && (
          <a
            onClick={() => {
              setToken(null);
              localStorage.removeItem("token");
            }}
          >
            Logout
          </a>
        )}
      </div>
    </div>
  );
};
