const { API_KEY, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;
const {
  ethers
} = require("hardhat");

const contract = require("../artifacts/contracts/aBakery.sol/ABakery.json");
const provider = new ethers.providers.AlchemyProvider(network = "goerli", API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const aBakery = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {

  // Have to find some time to write the piece of code to order and to pickup pastries
  // And also, must remember to wait a while for the transaction to complete before I can pickup my order

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });