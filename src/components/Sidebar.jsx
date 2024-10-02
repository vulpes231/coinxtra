import React from "react";
import { authLinks } from "../constants";

const Sidebar = () => {
  return (
    <aside className="bg-white hidden md:flex w-[20%] customh p-6 mt-3">
      <div className="flex flex-col gap-5 capitalize">
        {authLinks.map((link) => {
          return <span key={link.id}> {link.name}</span>;
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
