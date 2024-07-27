import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { parseEther } from "viem";

// A deployment function to set up the initial state
const deploy = async () => {
  const nftMarket = await hre.viem.deployContract("contracts/NFTMarket.sol:NFTMarket");
  const hexiToken = await hre.viem.deployContract("contracts/HexiToken.sol:HexiToken",[parseEther("10000")])
  return { nftMarket,hexiToken };
};

describe("NFTMarket Contract Tests", function () {
  it("set payment token should be successful", async function () {
    // Load the contract instance using the deployment function
    const { nftMarket,hexiToken } = await loadFixture(deploy);
    await nftMarket.write.setPaymentToken([hexiToken.address])
  });
});