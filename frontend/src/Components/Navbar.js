import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import { Button, Spinner, Text } from "@chakra-ui/react";
import { getWeb3 } from "../utils/walletconnection";
const Navbar = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [contractBalanace, setContractBalance] = useState(0);
  const [currentAccountBalance, setCurrentAccountBalance] = useState(0);
  let connectingWallet = async () => {
    setIsActive(true);
    try {
      let web3 = await getWeb3();
      let accounts = await web3.eth.getAccounts();
      console.log(accounts);
      let crrBal = await web3.eth.getBalance(accounts[0]);
      let contractBal = await web3.eth.getBalance(
        "0xB107C6707D5bCAB72A7Fb3352b3008A8a601A5Aa"
      );
      setCurrentAccountBalance(crrBal);
      setContractBalance(contractBal);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
    setIsActive(false);
  };

  useEffect(() => {
    connectingWallet();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand mx-md-4" to="/">
          <img src={logo} width="30%" alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="navbar-brand" to="/">
              <Text size="sm" color="blue.700">
                Home <span className="sr-only">(current)</span>
              </Text>
            </NavLink>

            <NavLink className="navbar-brand" to="/register-task">
              <Text size="sm" color="blue.700">
                Register Task
              </Text>
            </NavLink>
            <Button
              bgColor="blackAlpha.100"
              onClick={connectingWallet}
              color="teal.500"
              className="mx-1"
            >
              {isActive ? (
                <Spinner />
              ) : (
                currentAccount.slice(0, 10) + "..." + currentAccount.slice(30)
              )}
            </Button>
            <Button bgColor="green.100" color="white.500" className="mx-1">
              {isActive ? (
                <Spinner />
              ) : (
                "Account Balance :" + currentAccountBalance
              )}
            </Button>
            <Button bgColor="blue.100" color="blue.800" className="mx-1">
              {isActive ? <Spinner /> : "Contract Balance :" + contractBalanace}
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
