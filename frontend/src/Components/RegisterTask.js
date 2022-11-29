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
} from "@chakra-ui/react";
const RegisterTask = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-2">
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
                <Textarea
                  placeholder="Enter Matrix for Computation"
                  className="mt-3 border-1 "
                />
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
