import React, { useEffect, useState } from "react";
import { getWeb3 } from "../utils/walletconnection";
import getContract from "../utils/contract";

const ListTasks = () => {
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      let contract = await getContract();
      let web3 = await getWeb3();
      let task = await contract.methods.tasks(1).call();
      console.log(task);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="container">
      <div>ListTasks</div>
    </div>
  );
};

export default ListTasks;
