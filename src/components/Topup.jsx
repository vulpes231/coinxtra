import React from "react";
import { btc } from "../assets";
import { FaCrown, FaWallet } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Topup = ({ user }) => {
  return (
    <div className="flex flex-col gap-4 font-[Poppins]">
      <h3>Available balances</h3>
      <div className="flex justify-between border p-3">
        <span className="flex items-center gap-2">
          <img src={btc} alt="" width={20} />
          <p>Bitcoin</p>
        </span>
        <span>
          <p>500 USD</p>
          <small className="text-xs font-light">0.0023456 BTC</small>
        </span>
      </div>
      <div className="flex gap-2  items-center text-sm font-normal">
        <FaWallet className="w-10 h-10 p-2 bg-green-100 text-green-500 rounded-full" />
        <p className="flex items-center gap-1">
          Linked address:{" "}
          <span className="font-light">3fa{user?.bindAddress}</span>
        </p>
      </div>
      <div className="flex justify-end">
        <Link
          className="bg-yellow-500 text-white px-5 py-2.5 rounded-3xl mt-2 capitalize font-medium text-sm"
          to={"/deposit"}
        >
          top up
        </Link>
      </div>
    </div>
  );
};

export default Topup;
