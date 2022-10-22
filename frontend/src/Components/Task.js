import React from "react";

const Task = ({ task, price,verify }) => {
  return (
    <>
      <div className="flex justify-center flex-col border mt-1 p-4">
        <div className="flex justify-between">
          <p className=" text-green-700 ">{task}</p>
          <small className="font-bold text-danger-500">{price.toFixed(2)} Ether</small>
        </div>
        <div className="flex ">
        <a
          href="#"
          className={`  ${verify ? "bg-green-600" : "bg-gray-900" } mr-4 w-1/6 text-white mt-1  rounded-md text-sm font-medium`}
          aria-current="page"
        >
          {verify ? "Accept":"Do It"}
        </a>
        {verify ?<a
          href="#"
          className={`  bg-red-500  w-1/6 text-white mt-1  rounded-md text-sm font-medium`}
          aria-current="page"
        >
          Decline
        </a>:null}
          </div>
      </div>
    </>
  );
};

export default Task;
