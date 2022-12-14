import { useMetamask, useAddress, useEditionDrop } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function Home() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const editionDrop = useEditionDrop(
    "0x62042326fd70ae5F78a792cd2bbe182800624120"
  );

  const tokenId = 0;
  const quantity = 1;

  const claimNFT = async () => {
    try {
      await editionDrop?.claimTo(address, tokenId, quantity);
      console.log("🎉 NFT claimed successfully!");
    } catch (err) {
      console.log("💩 Error claiming NFT: ", err);
    }
  };

  return (
    <div>
      <Head>
        <title>Parasitlajang2.3 Mintsite</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />

      <div className={styles.container}>
        {address ? (
          <button
            className="py-5 my-[-120%] rounded-full h-[-50%] shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-100 ease-in duration-500"
            onClick={claimNFT}
          >
            Claim NFT
          </button>
        ) : (
          <button
            className="py-5 my-[-120%] rounded-full h-[-50%] shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-100 ease-in duration-500"
            onClick={connectWithMetamask}
          >
            Connect with metamask
          </button>
        )}
      </div>
    </div>
  );
}
