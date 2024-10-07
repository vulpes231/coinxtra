import React from "react";
import { authLinks } from "../constants";
import { Link } from "react-router-dom";
import { MdHome, MdLogout, MdMoneyOff } from "react-icons/md";
import { PiHandWithdrawFill } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa6";
import { RiFileUserFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";

const Authmenu = ({ close }) => {
  return (
    <div className="absolute top-[70px] right-0 flex flex-col gap-5 capitalize bg-white p-6 rounded-bl-xl shadow-lg shadow-yellow-100 w-[250px]">
      {authLinks.map((link) => {
        const icon =
          link.id === "dashboard" ? (
            <MdHome />
          ) : link.id === "withdraw" ? (
            <PiHandWithdrawFill />
          ) : link.id === "deposit" ? (
            <FaMoneyBills />
          ) : link.id === "profile" ? (
            <RiFileUserFill />
          ) : link.id === "faq" ? (
            <FaQuestionCircle />
          ) : null;
        return (
          <Link
            onClick={close}
            to={link.path}
            key={link.id}
            className="text-sm flex items-center gap-1 active:text-yellow-500"
          >
            <span>{icon}</span>
            <span>{link.name}</span>
          </Link>
        );
      })}
      <span className="text-sm flex items-center gap-1">
        <MdLogout />
        <span>logout</span>
      </span>
    </div>
  );
};

export default Authmenu;
