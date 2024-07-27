/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import {
  ListItem,
  NFTItem,
  marketContractUtils,
  nftContractUtils,
  provider,
} from "../utils/contract/contractUtils";
import { useAsyncFn, useClickAway } from "react-use";
import { contractInfo } from "../utils/contract/contractInfo";
import {
  readContract,
  waitForTransactionReceipt,
  writeContract,
} from "wagmi/actions";
import { wagmiConfig } from "../main";
import { HexAddress } from "../types/global";
import { toast } from "react-toastify";
import { ItemCard } from "../components/ItemCard";
import { useFTBalance } from "../utils/hooks/useFTBalance";
import { ethers, parseEther } from "ethers";

export function ProfilePage() {
  const { address } = useAccount();

  const [ownNFTs, setOwnNFTs] = useState<NFTItem[]>([]);
  const refreshOwnNFTs = useCallback(() => {
    if (!address) {
      setOwnNFTs([]);
    } else {
      nftContractUtils
        .getAddressNFTs(address)
        .then(setOwnNFTs)
        .catch(console.error);
    }
  }, [address]);
  useEffect(() => {
    refreshOwnNFTs();
  }, [refreshOwnNFTs]);

  const { balance, refreshBalance } = useFTBalance();

  const [listings, setListings] = useState<ListItem[]>([]);
  const refreshListings = useCallback(() => {
    if (!address) {
      setListings([]);
    } else {
      marketContractUtils
        .getSpecAddressAndNFTs(address, contractInfo.Erc721Token.address)
        .then(setListings);
    }
  }, [address]);
  useEffect(() => {
    refreshListings();
  }, [refreshListings]);

  const [listTokenId, setListTokenId] = useState<number>();
  const ref = useRef<HTMLDivElement | null>(null);
  const [listPrice, setListPrice] = useState<number>();
  useClickAway(ref, () => {
    setListTokenId(undefined);
    setListPrice(undefined);
  });

  const [listResult, doList] = useAsyncFn(async () => {
    if (
      listTokenId === undefined ||
      listPrice === undefined ||
      listPrice === 0 ||
      !address
    ) {
      return;
    }

    try {
      // 首先判断是否授权，否则调用setApprovalForAll
      const isApproval = await readContract(wagmiConfig, {
        address: contractInfo.Erc721Token.address,
        abi: contractInfo.Erc721Token.abi,
        functionName: "isApprovedForAll",
        args: [address as HexAddress, contractInfo.Market.address],
      });

      if (!isApproval) {
        const approvalHash = await writeContract(wagmiConfig, {
          address: contractInfo.Erc721Token.address,
          abi: contractInfo.Erc721Token.abi,
          functionName: "setApprovalForAll",
          args: [contractInfo.Market.address, true],
        });
        await waitForTransactionReceipt(wagmiConfig, {
          hash: approvalHash,
        });
      }

      const listHash = await writeContract(wagmiConfig, {
        address: contractInfo.Market.address,
        abi: contractInfo.Market.abi,
        functionName: "listNFT",
        args: [
          contractInfo.Erc721Token.address,
          listTokenId as any,
          (listPrice * 1e18) as any,
        ],
      });
      await waitForTransactionReceipt(wagmiConfig, {
        hash: listHash,
      });
      setListTokenId(undefined);
      setListPrice(undefined);
      // 刷新 market nft list 状态
      toast.success("Listed!");
      refreshBalance();
      refreshListings();
      refreshOwnNFTs();
    } catch (e) {
      toast.error(JSON.stringify(e));
      console.error(e);
    }
  }, [
    listPrice,
    listTokenId,
    address,
    refreshBalance,
    refreshListings,
    refreshOwnNFTs,
  ]);

  const [faucetResult, doFaucet] = useAsyncFn(async () => {
    try {
      const signer = new ethers.Wallet(contractInfo.deployAccount, provider);
      const contract = new ethers.Contract(
        contractInfo.Erc20Token.address,
        contractInfo.Erc20Token.abi,
        signer
      );
      const tx = await (contract as any).transfer(address, parseEther("10"));
      await tx.wait();
      console.log(tx);
      refreshBalance();
      toast.success("Faucet 10 HT succeed!");
    } catch (e) {
      console.error(e);
      toast.error("Faucet failed!");
    }
  }, [address, refreshBalance]);

  return (
    <div className="px-4 mt-4">
      <ul className="mb-10">
        <div className="flex items-center justify-end gap-x-1">
          Balance: {balance || "0.0"} {` `}
          <a
            href={`https://sepolia.etherscan.io/token/${contractInfo.Erc20Token.address}`}
            target="_blank"
            className="underline text-primaryColor"
          >
            HT
          </a>
          {address && (
            <button
              onClick={doFaucet}
              className="bg-primaryColor rounded px-2 py-[2px] text-white text-xs"
            >
              {faucetResult.loading ? "Loading..." : "Faucet 10 HT"}
            </button>
          )}
        </div>
      </ul>
      <div className="flex flex-wrap gap-4">
        {[...listings, ...ownNFTs].map((item, index) => (
          <ItemCard
            key={index}
            data={item}
            from="profile"
            showListModal={() => {
              setListTokenId(item.id);
            }}
          />
        ))}
      </div>
      {listTokenId !== undefined && (
        <div className="fixed inset-0 bg-[rgba(14,13,13,0.55)] flex items-center justify-center">
          <div ref={ref} className="w-[280px] bg-white rounded">
            <ul className="flex flex-col gap-y-3 p-4">
              <li className="flex gap-x-4">
                <span className="w-[60px] shrink-0">TokenId:</span>
                <span>#{listTokenId}</span>
              </li>
              <li className="flex gap-x-4">
                <span className="w-[60px] shrink-0">Price:</span>
                <div className="flex gap-x-2 items-center">
                  <input
                    value={listPrice}
                    onChange={(e) => {
                      if (!e.target.value) {
                        setListPrice(undefined);
                      } else {
                        setListPrice(Number(e.target.value));
                      }
                    }}
                    type="number"
                    className="w-[140px] rounded border px-1"
                  />
                  HT
                </div>
              </li>
              <button
                className="bg-primaryColor rounded text-white py-1 hover:opacity-75 duration-200"
                onClick={doList}
              >
                {listResult.loading ? "loading..." : "Submit"}
              </button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
