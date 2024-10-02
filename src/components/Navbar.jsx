import React, { useEffect, useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import Mobilemenu from "./Mobilemenu";

const styles = {
  button: `px-4 py-2.5 rounded-3xl uppercase text-xs font-medium`,
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    document.title = "CoinXtra - Signin";
  }, []);
  return (
    <header className="fixed top-0 p-3 w-full h-[60px] flex items-center justify-center font-[Poppins] z-50 bg-white">
      <nav className="md:max-w-[900px] md:mx-auto flex items-center justify-between w-full">
        <Link to={"/"} className="flex items-center">
          <img src={logo} alt="" width={30} />
          <h1 className="uppercase font-bold ">
            coin <span className="text-yellow-600">xtra</span>
          </h1>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            return <Link key={link.id}>{link.name}</Link>;
          })}
        </div>
        <div className="hidden md:flex items-center gap-4">
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
        <span onClick={handleToggle} className="md:hidden text-xl font-medium">
          {!toggle ? <MdMenu /> : <MdClose />}
        </span>
        {toggle && <Mobilemenu toggle={toggle} styles={styles} />}
      </nav>
    </header>
  );
};

export default Navbar;
