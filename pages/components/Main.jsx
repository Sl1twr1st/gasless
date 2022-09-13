import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-1 flex justify-center items-center">
        <div>
          <h2 className="py-3 text-gray-700">Parasitlajang2.3 Mintsite</h2>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src="/../public/assets/preview.gif"
              alt="/"
              height={400}
              width={400}
            />
          </div>
          <p className="uppercase my-9 py-2 text-sm tracking-widest text-gray-600">
            Satu Wallet hanya bisa me-minting 1 NFT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
