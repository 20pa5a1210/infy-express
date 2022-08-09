import { useForm } from "react-hook-form";
import axios, { Axios } from "axios";
import Modal from "react-modal";
import { useState } from "react";
export default function QuotaForm() {
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8080/quota", data)
      .then((res) => {
        setOpenModal(true);
      })
      .catch((err) => alert(err.response.data));
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function closeModal() {
    setOpenModal(false);
  }
  return (
    <>
      <Modal isOpen={openModal} style={customStyles}>
        <div className="flex justify-between">
          <h1>Status</h1>
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
        <p className="text-green-600">
          Query has Been submitted Successfull. InfyExpres people will soon
          revert you with the approriate details{" "}
        </p>
      </Modal>
      <form
        method="post"
        className="flex flex-col m-4 space-y-2"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="fromLocation">
          From <sup>*</sup> (collection)
        </label>
        <input
          type="text"
          name="fromLocation"
          {...register("fromLocation", { required: true })}
          placeholder="Enter Your Pickup Location"
          className="border p-1"
        />
        {errors.fromLocation && (
          <span className="text-red-500 text-center">
            fromLocation is required
          </span>
        )}
        <label htmlFor="toLocation">
          To <sup>*</sup> (Delivery)
        </label>
        <input
          type="text"
          name="toLocation"
          {...register("toLocation", { required: true })}
          placeholder="Enter Your Delivery Location"
          className="border p-1"
        />
        {errors.toLocation && (
          <span className="text-red-500 text-center">
            toLocation is required
          </span>
        )}
        <label htmlFor="weight">
          Weight <sup>*</sup>
        </label>
        <input
          type="text"
          name="weight"
          {...register("weight", { required: true })}
          placeholder="Enter Your Package Weight"
          className="border p-1"
        />
        {errors.weight && (
          <span className="text-red-500 text-center">weight is required</span>
        )}

        <label htmlFor="length">
          Enter Parcel Dimensions (in CM)<sup>*</sup>
        </label>
        <div className="flex space-x-4">
          <input
            type="text"
            name="length"
            {...register("length", { required: true })}
            placeholder="Width"
            className="border w-[30%]"
          />
          <input
            type="text"
            name="breadth"
            {...register("breadth", { required: true })}
            placeholder="Breadth"
            className="border  w-[30%]"
          />
          <input
            type="text"
            name="height"
            {...register("height", { required: true })}
            placeholder="Height"
            className="border  w-[30%]"
          />
        </div>
        {errors.length && errors.breadth && errors.height && (
          <span className="text-red-500 text-center">
            All dimensions are required
          </span>
        )}
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 text-lg w-1/3 p-1 text-white rounded-sm"
        />
      </form>
    </>
  );
}
