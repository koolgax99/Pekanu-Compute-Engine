import { getWeb3 } from "./walletconnection";
import { address, abi } from "./constant";
let contract;
const getContract = async () => {
  try {
    let web3 = await getWeb3();
    contract = await new web3.eth.Contract(abi, address);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export default getContract;
