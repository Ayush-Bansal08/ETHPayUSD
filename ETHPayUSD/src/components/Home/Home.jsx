import React from "react";
import { NavLink } from "react-router-dom";
import emojii from "../../Images/emojii.png";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center relative bg-gradient-to-r from-gray-900 via-blue-900 to-black overflow-hidden px-4 py-10">
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent animate-pulse">
        Welcome To ETHPayUSD
      </h1>

      <p className="max-w-2xl mt-6 text-lg md:text-xl font-medium leading-relaxed text-gray-200">
        ETHPayUSD is a powerful decentralized platform that transforms the way you send and receive payments by enabling seamless Ethereum (ETH) to USD transactions. Whether you're lending, borrowing, or managing funds, ETHPayUSD ensures speed, transparency, and security — all powered by blockchain technology. With a clean user interface and smart contract automation, it's your gateway to the future of crypto finance.
      </p>

      <p className="mt-8 text-2xl font-semibold animate-bounce">
        🚀 Make Your Transaction
      </p>

      <NavLink
        to="/Send"
        className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
      >
        Send Money
      </NavLink>

      <NavLink to="/Contact">
        <img
          src={emojii}
          alt="emoji"
          className="w-32 absolute bottom-10 left-5 rounded-xl transition-transform duration-300 hover:scale-110"
        />
      </NavLink>
    </div>
  );
}

export default Home;
