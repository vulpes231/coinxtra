import React from "react";
import { authLinks } from "../constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = (e) => {
    console.log("clicked logout");
  };
  return (
    <aside className="bg-white hidden md:flex w-[20%] customh p-6 mt-3">
      <div className="flex flex-col gap-5 capitalize">
        {authLinks.map((link) => {
          return (
            <Link to={link.path} key={link.id}>
              {link.name}
            </Link>
          );
        })}
        <span className="cursor-pointer" onClick={handleLogout}>
          logout
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
