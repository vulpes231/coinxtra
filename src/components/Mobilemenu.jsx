import React from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Mobilemenu = ({ toggle, styles }) => {
  return (
    <div
      className={
        toggle
          ? "absolute top-[62px] right-0 w-[250px] bg-white shadow-xl p-6 md:hidden rounded-sm"
          : "hidden"
      }
    >
      <div className="flex flex-col gap-6">
        {navLinks.map((link) => {
          return (
            <Link className="active:text-yellow-600" key={link.id}>
              {link.name}
            </Link>
          );
        })}
        <div className="flex flex-col gap-5">
          <Link
            to={"/register"}
            className={`${styles.button} bg-yellow-600 text-white`}
          >
            sign up
          </Link>
          <Link
            to={"/login"}
            className={`${styles.button} border-2 border-yellow-600 hover:border-none hover:bg-yellow-600 hover:text-white`}
          >
            sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mobilemenu;