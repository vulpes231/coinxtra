import React from "react";
import { authLinks } from "../constants";
import { Link } from "react-router-dom";
import { MdHome, MdLogout, MdMoney } from "react-icons/md";
import { FaGear, FaMoneyBills, FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoneyCheckAlt, FaUserAlt, FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  const handleLogout = (e) => {
    console.log("clicked logout");
  };

  return (
    <aside className="bg-white hidden md:flex w-[20%] p-6 mt-1">
      <div className="flex flex-col gap-5 capitalize">
        {authLinks.map((link) => {
          const icon =
            link.id === "dashboard" ? (
              <MdHome />
            ) : link.id === "deposit" ? (
              <FaMoneyBills />
            ) : link.id === "withdraw" ? (
              <FaMoneyBillTransfer />
            ) : link.id === "settings" ? (
              <FaGear />
            ) : link.id === "profile" ? (
              <FaUserAlt />
            ) : link.id === "faq" ? (
              <FaQuestionCircle />
            ) : null;
          return (
            <Link
              to={link.path}
              key={link.id}
              className="flex gap-2 items-center text-sm"
            >
              {icon} {link.name}
            </Link>
          );
        })}
        <span
          className="cursor-pointer flex gap-2 items-center text-sm"
          onClick={handleLogout}
        >
          <MdLogout />
          <p>logout</p>
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
