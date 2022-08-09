import { Navbar } from "../Homepage/Navbar";
import img from "./Hdeliver.jpg";
import QuotaForm from "./QuotaForm";
import { Link, Navigate, useParams } from "react-router-dom";
import services from "./listofservices";
import { store } from "../../App";
import { useContext } from "react";
export default function SingleService() {
  const [token, setToken] = useContext(store);
  if (!token) {
    return <Navigate to="/login" />;
  }
  const { Id } = useParams();
  const serivce = services.find((serivce) => serivce.name1 == Id);
  const { name, des } = serivce;

  return (
    <>
      <Navbar />
      <div className="flex w-[70%] mx-auto ">
        <div className="flex-col w-2/3 space-y-4 my-10 mx-4">
          <h1 className="text-fuchsia-800 text-4xl font-semibold">{name}</h1>
          <p className="text-lg">{des}</p>
          <h1 className="text-2xl font-semibold underline underline-offset-4">
            Parcel Size
          </h1>
          <p>
            Package Size up to 500cm (total dimensions of 3 sides) and 3 Kgs
          </p>
          <h1 className="text-2xl font-semibold underline underline-offset-8">
            Package Charges
          </h1>
          <p>
            Packages are charged on the basis of on their weight and travel
            distance
          </p>
          <h1 className="text-2xl font-semibold underline underline-offset-4">
            FAQ
          </h1>
          <ol>
            <li className="border border-gray-400 p-2 border-b-0 font-semibold">
              When will infyExpress Will Deliver
            </li>
            <li className="border border-gray-400 p-2 border-b-0 font-semibold">
              When will infyExpress Will Deliver
            </li>
            <li className="border border-gray-400 p-2 border-b-0 font-semibold">
              When will infyExpress Will Deliver
            </li>
            <li className="border border-gray-400 p-2 border-b-0 font-semibold">
              When will infyExpress Will Deliver
            </li>
            <li className="border border-gray-400 p-2 font-semibold">
              When will infyExpress Will Deliver
            </li>

            <li className="text-center">
              <button className="bg-blue-500 w-full border-0 my-2 py-1 rounded-sm cursor-pointer">
                Book Service
              </button>
            </li>
          </ol>
        </div>
        <div className=" flex-co w-1/3 ">
          <div className="mx-auto">
            <img src={img} className="w-64 h-60 object-cover" alt="" />
          </div>
          <div className="w-full h-96 overflow-y-scroll bg-gray-50 drop-shadow-2xl shadow-white py-1 my-1">
            <h1 className="text-center text-xl font-semibold">
              Get a Quote...{" "}
            </h1>

            <QuotaForm />
          </div>
        </div>
      </div>
    </>
  );
}
