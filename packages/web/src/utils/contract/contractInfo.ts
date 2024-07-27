import { Address } from "viem";

export const contractInfo = {
  deployAccount:
    "0x8bf6fd8b1b6636c64cd2b33c01d576b99563f6c72465acf9955af6ad389d8522",
  Market: {
    address: "0x7b24bcb9495ef90d6c537611c5cf4a24375030e5" as Address,
    abi: [
      { inputs: [], stateMutability: "nonpayable", type: "constructor" },
      {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "OwnableInvalidOwner",
        type: "error",
      },
      {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "OwnableUnauthorizedAccount",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "listingId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "NFTDelisted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "listingId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        name: "NFTListed",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "listingId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        name: "NFTPurchased",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        inputs: [
          { internalType: "uint256", name: "listingId", type: "uint256" },
        ],
        name: "cancelListing",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "getAllListings",
        outputs: [
          {
            components: [
              { internalType: "address", name: "seller", type: "address" },
              { internalType: "address", name: "nftContract", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
              { internalType: "uint256", name: "price", type: "uint256" },
            ],
            internalType: "struct NFTMarket.Listing[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "nftContract", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "uint256", name: "price", type: "uint256" },
        ],
        name: "listNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "listingCounter",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "listings",
        outputs: [
          { internalType: "address", name: "seller", type: "address" },
          { internalType: "address", name: "nftContract", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "uint256", name: "price", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "paymentToken",
        outputs: [
          { internalType: "contract IERC20", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "listingId", type: "uint256" },
        ],
        name: "purchaseNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "_paymentToken", type: "address" },
        ],
        name: "setPaymentToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ] as const,
  },
  Erc20Token: {
    address: "0x37a0562c4dc236450905ba81b43c7fd3017e72a1" as Address,
    abi: [
      {
        inputs: [
          { internalType: "uint256", name: "initialSupply", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "allowance", type: "uint256" },
          { internalType: "uint256", name: "needed", type: "uint256" },
        ],
        name: "ERC20InsufficientAllowance",
        type: "error",
      },
      {
        inputs: [
          { internalType: "address", name: "sender", type: "address" },
          { internalType: "uint256", name: "balance", type: "uint256" },
          { internalType: "uint256", name: "needed", type: "uint256" },
        ],
        name: "ERC20InsufficientBalance",
        type: "error",
      },
      {
        inputs: [
          { internalType: "address", name: "approver", type: "address" },
        ],
        name: "ERC20InvalidApprover",
        type: "error",
      },
      {
        inputs: [
          { internalType: "address", name: "receiver", type: "address" },
        ],
        name: "ERC20InvalidReceiver",
        type: "error",
      },
      {
        inputs: [{ internalType: "address", name: "sender", type: "address" }],
        name: "ERC20InvalidSender",
        type: "error",
      },
      {
        inputs: [{ internalType: "address", name: "spender", type: "address" }],
        name: "ERC20InvalidSpender",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
    ] as const,
  },
  Erc721Token: {
    address: "0xcfd709ba8d775d3a1dcaa6fb1069e0a762db4777" as Address,
    abi: [
      { inputs: [], stateMutability: "nonpayable", type: "constructor" },
      {
        inputs: [
          { internalType: "address", name: "sender", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "address", name: "owner", type: "address" },
        ],
        name: "ERC721IncorrectOwner",
        type: "error",
      },
      {
        inputs: [
          { internalType: "address", name: "operator", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "ERC721InsufficientApproval",
        type: "error",
      },
      {
        inputs: [
          { internalType: "address", name: "approver", type: "address" },
        ],
        name: "ERC721InvalidApprover",
        type: "error",
      },
      {
        inputs: [
          { internalType: "address", name: "operator", type: "address" },
        ],
        name: "ERC721InvalidOperator",
        type: "error",
      },
      {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "ERC721InvalidOwner",
        type: "error",
      },
      {
        inputs: [
          { internalType: "address", name: "receiver", type: "address" },
        ],
        name: "ERC721InvalidReceiver",
        type: "error",
      },
      {
        inputs: [{ internalType: "address", name: "sender", type: "address" }],
        name: "ERC721InvalidSender",
        type: "error",
      },
      {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "ERC721NonexistentToken",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "approved",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_fromTokenId",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_toTokenId",
            type: "uint256",
          },
        ],
        name: "BatchMetadataUpdate",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "MetadataUpdate",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "getApproved",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "operator", type: "address" },
        ],
        name: "isApprovedForAll",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "player", type: "address" },
          { internalType: "string", name: "_tokenURI", type: "string" },
        ],
        name: "mintNFT",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "ownerOf",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "operator", type: "address" },
          { internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "string", name: "_tokenURI", type: "string" },
        ],
        name: "setTokenURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
        ],
        name: "supportsInterface",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "tokenURI",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ] as const,
  },
};
