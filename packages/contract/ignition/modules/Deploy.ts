import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "viem";

const DeployModule = buildModule("DeployModule", (m) => {
    function deployLock() {
        const JAN_1ST_2030 = 1893456000n;
        const ONE_GWEI: bigint = parseEther("0.001");
        return m.contract("Lock", [JAN_1ST_2030], {
            value: ONE_GWEI,
        });
    }
    function deployMyToken() {
        return m.contract("MyToken", [1000n]);
    }

    const lock = deployLock();
    const myToken = deployMyToken();
    return { lock, myToken };
});

export default DeployModule;
