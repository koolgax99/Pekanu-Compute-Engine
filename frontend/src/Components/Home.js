import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../logo.png";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="colmd-6 col-12 col-lg-6 col-xl-6 mx-auto">
            <img
              width={350}
              src="https://imgs.search.brave.com/E0zZ1JgMpg0lGX2IJsg_DZT3bKzewtpRIYC1DitXRy0/rs:fit:546:546:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy80NTUtNDU1ODMz/NF9jb21wdXRlci1u/ZXR3b3JrLWNsaXBh/cnQucG5n"
              alt=""
            />
          </div>
          <div className="colmd-6 col-12 col-lg-6 col-xl-6 mx-auto text-left">
            <div className="d-flex justify-content-center">
              <img src={logo} width="30%" alt="" />
            </div>
            <Heading className="mt-3" color="blue.500">
              Pekanu Computing Engine Based On Ethereum Blockchain For Providing
              Escrow Facility
            </Heading>
            <Text className="mt-4" size="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              mollitia culpa nostrum numquam reiciendis deserunt laboriosam,
              nihil quasi cumque enim sed qui quibusdam ullam modi, perferendis
              libero consequuntur doloribus provident.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
