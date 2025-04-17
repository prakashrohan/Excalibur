"use client";
import React, { useEffect } from 'react'
import { createThirdwebClient } from "thirdweb";
import { monadTestnet } from "thirdweb/chains"
import { getContract, readContract, prepareContractCall, sendTransaction, waitForReceipt } from 'thirdweb';
import { ConnectButton, useActiveAccount } from 'thirdweb/react';
import { useRouter } from 'next/navigation';

const client = createThirdwebClient({
  clientId: "a69c0e855895293728a8ebf29e642c9e",
});
const myChain = monadTestnet

const tokenContract = getContract({
  client,
  chain: myChain,
  address: "0x341915962cE7A942fe8F9801B4B4fC8F18feB416"
})

const NftContract = getContract({
  client,
  chain: myChain,
  address: "0x7d6e00C059628bD5d49B8e9b12B30f96B8e28CF8"
})

export default function Home() {
  const activeAccount = useActiveAccount();
  const router = useRouter();

  const checkAndProcessUser = async (userAddress) => {
    try {
      console.log("Checking user:", userAddress);
      
      // Check NFT balance
      const balance = await readContract({
        contract: NftContract,
        method: "function balanceOf(address) view returns (uint256)",
        params: [userAddress],
      });
      console.log("NFT Balance:", balance.toString());

      if (balance > 0) {
        console.log("User has NFT, redirecting to metaverse...");
        router.push('/metaverse');
      } else {
        console.log("User needs NFT and tokens, preparing transactions...");
        
        // Prepare NFT mint transaction
        const mintTx = prepareContractCall({
          contract: NftContract,
          method: "mintTo",
          params: [userAddress, 1],
        });
        console.log("Mint transaction prepared:", mintTx);

        // Prepare token transfer transaction
        const tokenTx = prepareContractCall({
          contract: tokenContract,
          method: "transfer",
          params: [userAddress, "500000000000000000000"],
        });
        console.log("Token transfer prepared:", tokenTx);

        // Send and wait for NFT mint
        console.log("Sending NFT mint transaction...");
        const mintResult = await sendTransaction({
          transaction: mintTx,
          account: activeAccount,
        });
        console.log("Mint transaction sent:", mintResult);
        
        const mintReceipt = await waitForReceipt(mintResult);
        console.log("Mint transaction confirmed:", mintReceipt);

        // Send and wait for token transfer
        console.log("Sending token transfer transaction...");
        const tokenResult = await sendTransaction({
          transaction: tokenTx,
          account: activeAccount,
        });
        console.log("Token transfer sent:", tokenResult);
        
        const tokenReceipt = await waitForReceipt(tokenResult);
        console.log("Token transfer confirmed:", tokenReceipt);

        console.log("All transactions completed, redirecting to metaverse...");
        router.push('/metaverse');
      }
    } catch (error) {
      console.error("Error processing user:", error);
      console.error("Error details:", {
        message: error.message,
        code: error.code,
        stack: error.stack
      });
    }
  };

  const handleConnect = async () => {
    if (activeAccount?.address) {
      console.log("Wallet connected:", activeAccount.address);
      await checkAndProcessUser(activeAccount.address);
    }
  };

  return (
    <div>
      <ConnectButton
        client={client}
        onConnect={handleConnect}
        detailsModal={{
          payOptions: {
            prefillBuy: {
              token: {
                address: "0x341915962cE7A942fe8F9801B4B4fC8F18feB416",
                name: "Meta",
                symbol: "M",
                icon: "/token.png",
              },
              chain: myChain,
              allowEdits: {
                amount: true,
                token: false,
                chain: false,
              },
            },
          },
        }}
      />
    </div>
  )
}