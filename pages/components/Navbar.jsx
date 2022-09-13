import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/lajanglogook.png"
          alt="/"
          width="150"
          height="35"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Blog</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Gallery
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Books</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Mint NFT
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "  fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/assets/lajanglogook.png"
              alt="/"
              height={35}
              width={150}
            />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="text-lg w-[85%] md:w-[90%] py-4">
              Singles of The World. United and Take Over!
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Blog</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Gallery</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Books</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Mint NFT</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-black">
                Joint Our Revolution
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[89%]">
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-100 ease-in duration-500">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-100 ease-in duration-500">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-100 ease-in duration-500">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
