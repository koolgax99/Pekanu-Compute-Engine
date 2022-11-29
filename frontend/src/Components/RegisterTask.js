import React from "react";
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
} from "@chakra-ui/react";
const RegisterTask = () => {
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
                />
                <Alert className="mt-3" bgColor="green.100">
                  How to write 2d matrix don't give commas between numbers here
                  it is an example [ [ 1 1 1 1 ][ 2 2 2 2 ] [ 3 3 3 3 ] [ 4 4 4
                  4 ] ]
                </Alert>

                <Textarea
                  placeholder="Enter Matrix for Computation"
                  className="mt-3 border-1 "
                />
                <Alert className="mt-3" bgColor="green.100">
                  Price should be in Wei
                </Alert>
                <HStack className="mt-2">
                  <PinInput type="alphanumeric">
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </CardBody>
              <CardFooter>
                {" "}
                <Button variant="solid" colorScheme="blue">
                  Submit Task
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
