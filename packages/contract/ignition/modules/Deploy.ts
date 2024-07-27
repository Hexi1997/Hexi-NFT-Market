import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "viem";

const DeployModule = buildModule("DeployModule", (m) => {
    function deployHexiToken() {
        return m.contract("HexiToken", [parseEther("10000")])
    }

    function deployHexiNFT() {
        return m.contract("HexiNFT")
    }

    function deployNFTMarket() {
        return m.contract("NFTMarket")
    }

    const hexiToken = deployHexiToken();
    const hexiNFT = deployHexiNFT();
    const nftMarket = deployNFTMarket()
    return { hexiToken, hexiNFT, nftMarket };
});

export default DeployModule;
