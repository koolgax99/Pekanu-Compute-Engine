import React, { useState } from "react";
import {
  Textarea,
  Heading,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  PinInput,
  PinInputField,
  HStack,
  Alert,
  Spinner,
} from "@chakra-ui/react";
import { getWeb3 } from "../utils/walletconnection";
import getContract from "../utils/contract";
import { NavLink } from "react-router-dom";

const RegisterTask = () => {
  const [data, setData] = useState({
    fdesc: "",
    parameters: "",
    n1: "",
    n2: "",
    n3: "",
    n4: "",
  });
  const [isActive, setIsActive] = useState(false);
  const onChangingData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setData({ ...data, [name]: value });
  };
  const registerTask = async () => {
    setIsActive(true);
    try {
      let contract = await getContract();
      let web3 = await getWeb3();
      let accounts = await web3.eth.getAccounts();
      let val = data.n1 + data.n2 + data.n3 + data.n4;

      let res = await contract.methods
        .submitTask(data.fdesc, data.parameters, val)
        .send({ from: accounts[0], value: val });
      console.log(res);
      setIsActive(false);
    } catch (error) {
      console.log(error);
      setIsActive(false);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12 col-xs-12 col-lg-8 col-xl-8 mx-auto p-4 d-flex flex-column justify-content-center align-items-center">
            <Card className="border border-3 shadow-lg">
              <CardHeader>
                {" "}
                <Heading size="md">Task Submission Form</Heading>
              </CardHeader>
              <CardBody>
                <Input
                  placeholder="Function Description"
                  size="md"
                  className=""
                  name="fdesc"
                  onChange={onChangingData}
                  value={data.fdesc}
                />
                <Alert className="mt-3" bgColor="green.100">
                  How to write 2d matrix don't give commas between numbers here
                  it is an example [ [ 1 1 1 1 ][ 2 2 2 2 ] [ 3 3 3 3 ] [ 4 4 4
                  4 ] ]
                </Alert>

                <Textarea
                  placeholder="Enter Matrix for Computation"
                  className="mt-3 border-1 "
                  name="parameters"
                  onChange={onChangingData}
                  value={data.parameters}
                />
                <Alert className="mt-3" bgColor="green.100">
                  Price should be in Wei
                </Alert>
                <HStack className="mt-2">
                  <PinInput type="alphanumeric">
                    <PinInputField
                      name="n1"
                      onChange={onChangingData}
                      value={data.n1}
                    />
                    <PinInputField
                      name="n2"
                      onChange={onChangingData}
                      value={data.n2}
                    />
                    <PinInputField
                      name="n3"
                      onChange={onChangingData}
                      value={data.n3}
                    />
                    <PinInputField
                      name="n4"
                      onChange={onChangingData}
                      value={data.n4}
                    />
                  </PinInput>
                </HStack>
              </CardBody>
              <CardFooter className="d-flex justify-content-between">
                {" "}
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={registerTask}
                >
                  {isActive ? <Spinner /> : "Submit Task"}
                </Button>
                <Button variant="solid" colorScheme="blue">
                  <NavLink to="/task-list">Task Lists</NavLink>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterTask;
