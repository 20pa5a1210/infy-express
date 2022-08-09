import React from "react";
import { Link } from "react-router-dom";
import movinImg from "../../../public/vectors/7628.jpg";
function HomeBody() {
  return (
    <div className="flex bg-gray-100">
      <div className="w-1/2 px-20 space-y-7 py-10">
        <h1 className="text-5xl font-mono text-blue-500 underline underline-offset-[15px]">
          infy Express
        </h1>
        <p className="text-lg font-mono">
          With InfyExpress, We aim to make the entire package delivery
          experience NG straightforward - providing online tools for shipping,
          monitoring and mol tracking, lending our expertise in customs
          clearance, and keeping abreast of all the latest rules and
          regulations, duties and taxes.
        </p>
        <button className="text-lg px-5 py-2 bg-red-500 text-white cursor-pointer">
          <Link to="/services">Want To Book A Service ?</Link>
        </button>
      </div>
      <div className="w-1/2 m-auto items-center">
        <img src={movinImg} className="h-80 w-full object-cover" />
      </div>
    </div>
  );
}
export default HomeBody;
