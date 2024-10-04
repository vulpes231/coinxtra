import React from "react";
import { authLinks } from "../constants";
import { Link } from "react-router-dom";

const Authmenu = ({ close }) => {
  return (
    <div className="absolute top-[70px] right-2 flex flex-col gap-5 capitalize bg-white p-6 rounded-xl shadow-xl w-[250px]">
      {authLinks.map((link) => {
        return (
          <Link onClick={close} to={link.path} key={link.id}>
            {" "}
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Authmenu;
