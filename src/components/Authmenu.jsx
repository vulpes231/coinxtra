import React from "react";
import { authLinks } from "../constants";

const Authmenu = () => {
  return (
    <div className="absolute top-[70px] right-2 flex flex-col gap-5 capitalize bg-white p-6 rounded-xl shadow-xl w-[250px]">
      {authLinks.map((link) => {
        return <span key={link.id}> {link.name}</span>;
      })}
    </div>
  );
};

export default Authmenu;
