import React from "react";
export const HomeServices = ({ data }) => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-blue-300">
      <h1 className="text-center color-gradient-to-r from-blue-500 to-cyan-600 underline underline-offset-[10px] p-5 text-4xl font-semibold">
        The Process
      </h1>
      <div className="flex justify-center">
        {data.map((item) => {
          const { id, name, img } = item;
          return (
            <div
              key={id}
              className="mx-4 w-1/5 bg-gray-50 shadow-white drop-shadow-lg hover:shadow-slate-400  hover:drop-shadow-2xl my-5"
            >
              <img src={img} className="w-full object-fill" />
              <h1 className="text-center text-2xl font-semibold mb-4">
                {name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
