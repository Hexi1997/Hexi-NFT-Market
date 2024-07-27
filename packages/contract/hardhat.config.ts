import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import { accounts } from "./utils/const";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/4pHUwuXEo8nuTLQqS9E5qSTXx_EpROQQ",
      // 执行 scripts/deploy.ts 时默认部署账号
      accounts: [accounts.deployer],
    },
  },
};

export default config;
