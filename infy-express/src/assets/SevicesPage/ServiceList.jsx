import { Navbar } from "../Homepage/Navbar";
import img from "./service-bg.jpg";
import Services from "./Services";
export default function ServiceList() {
  return (
    <div>
      <Navbar />
      <div className="h-60 relative bg-black opacity-80">
        <img src={img} className="h-full w-full object-cover" alt="" />
        <p
          className="absolute top-32 left-20 text-white
         font-medium text-4xl"
        >
          List Of Services
        </p>
      </div>
      <div className="mx-auto w-1/3 space-y-4 mt-3 ">
        <h1 className="text-center text-3xl text-violet-600 font-semibold underline  underline-offset-8">
          Our Services
        </h1>
        <p className="text-center font-normal">
          Infy Express is believed in serving the clients at their door step.
          Our thinking is "The best certification of a quality is the
          measurement of the scale of the smile on the customers face".
        </p>
      </div>
      <Services />
    </div>
  );
}
