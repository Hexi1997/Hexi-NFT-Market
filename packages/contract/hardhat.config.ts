import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  // networks: {
  //   "sepolia": {
  //     chainId: 1,
  //     accounts: {
  //       // 助记词
  //       mnemonic: ``
  //     }
  //   }
  // }
};

export default config;
