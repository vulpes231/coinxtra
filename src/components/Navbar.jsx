import React from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const styles = {
  button: `px-4 py-2.5 rounded-3xl uppercase text-xs font-medium`,
};

const Navbar = () => {
  return (
    <header className="p-3 w-full h-[60px] flex items-center justify-center font-[Poppins]">
      <nav className="md:max-w-[900px] md:mx-auto flex items-center justify-between w-full">
        <span className="flex items-center">
          <img src={logo} alt="" width={30} />
          <h1 className="uppercase font-bold ">
            coin <span className="text-yellow-600">xtra</span>
          </h1>
        </span>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            return <Link key={link.id}>{link.name}</Link>;
          })}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className={`${styles.button} bg-yellow-600 text-white`}>
            sign up
          </button>
          <button
            className={`${styles.button} border-2 border-yellow-600 hover:border-none hover:bg-yellow-600 hover:text-white`}
          >
            sign in
          </button>
        </div>
        <span className="sm:hidden text-xl font-medium">
          <MdMenu />
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
