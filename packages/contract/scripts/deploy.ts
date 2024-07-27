import hre from "hardhat";
import { parseEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { accounts } from "../utils/const";
import fs from "fs";
import path from "path";

async function main() {
  const { deployContract } = hre.viem;
  const hexiToken = await deployContract("contracts/HexiToken.sol:HexiToken", [
    parseEther("10000"),
  ]);
  console.log("HexiToken:", hexiToken.address);
  const hexiNFT = await deployContract("contracts/HexiNFT.sol:HexiNFT");
  console.log("HexiNFT:", hexiNFT.address);

  const nftMarket = await deployContract("contracts/NFTMarket.sol:NFTMarket");
  console.log("NFTMarket:", nftMarket.address);

  const listerAccount = privateKeyToAccount(accounts.lister);
  const buyerAccount = privateKeyToAccount(accounts.buyer);
  // 初始化 payment token
  await nftMarket.write.setPaymentToken([hexiToken.address]);
  console.log("setPaymentToken succeed!");
  // token代币分配
  await hexiToken.write.transfer([listerAccount.address, parseEther("1000")]);
  await hexiToken.write.transfer([buyerAccount.address, parseEther("1000")]);
  console.log("transfer HexiToken succeed!");
  console.log("Deploy succeed!");

  if (hre.network.name === "sepolia") {
    // 如果是在测试网部署，需要将部署信息更新到web项目文件夹中,也就是部署地址和abi
    const content = `
import { Address } from 'viem';

export const contractInfo = {
    Market: {
      address: "${nftMarket.address}" as Address,
      abi: ${JSON.stringify(nftMarket.abi)} as const
    },
    Erc20Token: {
      address: "${hexiToken.address}" as Address,
      abi: ${JSON.stringify(hexiToken.abi)} as const
    },
    Erc721Token: {
      address:"${hexiNFT.address}" as Address,
      abi: ${JSON.stringify(hexiNFT.abi)} as const
    }
}`;
    fs.writeFileSync(
      path.resolve(__dirname, "../../web/src/utils/contract/contractInfo.ts"),
      content
    );
    console.log('Save deployed contracts info succeed!')
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
