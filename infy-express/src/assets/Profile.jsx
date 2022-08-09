import axios from "axios";
import Modal from "react-modal";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { store } from "../App";
import { Navbar } from "./Homepage/Navbar";
export default function Profile() {
  const [token, setToken] = useContext(store);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/myprofile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!token) {
    return <Navigate to="/login" />;
  }
  function closeModal() {
    setOpenModal(false);
  }
  function OpenModal() {
    setOpenModal(true);
  }

  return (
    <>
      <Modal isOpen={openModal} style={customStyles}>
        <div className="flex justify-between text-xl my-1">
          <p>Confirmation</p>
          <svg
            onClick={closeModal}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <span className="flex space-x-2 my-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </span>
          <span>Are You sure you Want to Logout</span>
        </span>
        <div className="flex justify-end space-x-2">
          <div
            onClick={closeModal}
            className="flex bg-blue-500 p-1 px-2 rounded-md text-white space-x-1 cursor-pointer"
          >
            <svg
              onClick={closeModal}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <button>NO</button>
          </div>
          <div
            onClick={() => {
              setToken(null);
              localStorage.removeItem("token");
            }}
            className="flex bg-blue-500 p-1 px-2 rounded-md text-white space-x-1 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <button>YES</button>
          </div>
        </div>
      </Modal>
      <div>
        <Navbar />
        <div>
          <h1 className="text-center text-3xl font-semibold">
            Profile Information
          </h1>
          <div className="flex flex-col justify-center bg-green-200 w-[600px] mx-auto space-y-5 p-5 rounded-md mt-4">
            {data && (
              <>
                <div className="flex justify-between">
                  <p>Name</p>
                  <p>{data.username}</p>
                </div>
                <div className="flex justify-between">
                  <p>Email</p>
                  <p>{data.mailid}</p>
                </div>
                <div className="flex justify-between">
                  <p>number</p>
                  <p>{data.number}</p>
                </div>
              </>
            )}
            <button
              className="bg-yellow-200 text-lg w-20 mx-auto p-1 text rounded-sm"
              onClick={OpenModal}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
