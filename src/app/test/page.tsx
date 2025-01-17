"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/metamask/Header";
import { useState, useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });

export interface AccountType {
    address?: string;
    balance?: string;
    chainId?: string;
    network?: string;
  }

export default function Home() {
    const [accountData, setAccountData] = useState<AccountType>({});

    const _connectToMetaMask= useCallback(async () => {
      const ethereum = window.ethereum;
      // Check if MetaMask is installed
      if (typeof ethereum !== "undefined") {
        try {
          // Request access to the user's MetaMask accounts
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          // Get the connected Ethereum address
          const address = accounts[0];
          // Check address in console of web browser
          console.log("connected to MetaMask with address: ", address);
        } catch (error: Error | any) {
          alert(`Error connecting to MetaMask: ${error?.message ?? error}`);
        }
      } else {
        alert("MetaMask not installed");
      }
    }, []);

    return (
        <div
          className={`h-full flex flex-col before:from-white after:from-sky-200 py-2 ${inter.className}`}
        >
          <Header />
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="grid gap-4">
              <Image
                src="https://images.ctfassets.net/9sy2a0egs6zh/4zJfzJbG3kTDSk5Wo4RJI1/1b363263141cf629b28155e2625b56c9/mm-logo.svg"
                alt="MetaMask"
                width={320}
                height={140}
                priority
              />
              <button
                onClick={_connectToMetaMask}
                className="bg-black text-white p-4 rounded-lg"
              >
                Connect to MetaMask
              </button>
            </div>
          </div>
        </div>
      );
}