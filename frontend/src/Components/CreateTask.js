import React from "react";
import Task from './Task';
const tasks= ["Host a MERN Website on EC2","Matrix Multiplication Task of 1000x1000 Matrix","Encryption of 10x10 Matrix","Run a flask backend on Elastic Bean"];

const CreateTask = () => {
  return (
    <>
      <div className="flex p-5">
        <form method="POST" target="_blank">
            <div className="mb-3 pt-0">
                <input
                type="text"
                placeholder="Task Name"
                name="name"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
                />
            </div>
            <div className="mb-3 pt-0">
                <input
                type="email"
                placeholder="Task Author"
                name="email"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
                />
            </div>
            <div className="mb-3 pt-0">
                <textarea
                placeholder="Task Description"
                name="message"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
                />
            </div>
            <div className="mb-3 pt-0">
                <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                >
                Send a message
                </button>
            </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
