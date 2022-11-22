import React from "react";
import Task from './Task';
const tasks= ["Host a MERN Website on EC2","Matrix Multiplication Task of 1000x1000 Matrix","Encryption of 10x10 Matrix","Run a flask backend on Elastic Bean"];
const Dashboard = () => {
  return (
    <>
      <div className="flex p-5">
        <div className="w-1/2 border border-red-500 rounded-sm p-3 flex-col text-center">
            Recived Outputs 
            {tasks.map((item,i)=>{
                
                if(i%2==0){
                  return (<Task task={item} key={i} price={(i+1)*0.05} verify={true} />)
                };
            })}
        </div>
        <div className="w-1/2 border border-green-500 rounded-sm p-3 flex-col text-center">
            Tasks Open For Worker 👍
            {tasks.map((item,i)=>{
                return(<Task task={item} key={i} price={(i+1)*0.05} verify={false} />);
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
