import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import { Button, Spinner, Text } from "@chakra-ui/react";
import { getWeb3 } from "../utils/walletconnection";
const Navbar = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isActive, setIsActive] = useState(false);
  let connectingWallet = async () => {
    try {
      setIsActive(true);
      let web3 = await getWeb3();

      let accounts = await web3.eth.getAccounts();
      console.log(accounts);
      setCurrentAccount(accounts[0]);
      setIsActive(false);
    } catch (error) {
      console.log(error);
      setIsActive(false);
    }
  };

  useEffect(() => {
    connectingWallet();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">
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
            >
              {isActive ? currentAccount : <Spinner />}
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
