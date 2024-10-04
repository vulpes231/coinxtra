import React, { useEffect, useState } from "react";
import Logo from "./Logo";

import { format } from "date-fns";
import { MdMailOutline } from "react-icons/md";
import { CgClose, CgMenu } from "react-icons/cg";
import Authmenu from "./Authmenu";
import { getAccessToken } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/userSlice";

const Authnav = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const currentDate = format(new Date(), "dd/MM/yyyy");
  const currentTime = format(new Date(), "hh:mm:ss a");

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const { user } = useSelector((state) => state.user);

  const accessToken = getAccessToken();

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(getUser());
    }
  }, [accessToken]);
  return (
    <header className="py-4 px-10 h-[70px] flex items-center justify-center fixed top-0 left-0 w-full bg-white z-50">
      <nav className="flex items-center justify-between w-full">
        <Logo />
        <div className="flex gap-6 items-center">
          <MdMailOutline className="text-2xl" />
          <span className="font-[Poppins]">
            <p className="capitalize font-medium md:font-bold hidden sm:flex">
              {" "}
              welcome {user?.username}
            </p>
            <small className="hidden md:flex gap-2 text-xs">
              <span> {currentDate}</span>
              <span> {currentTime}</span>
            </small>
          </span>
        </div>
        <button onClick={handleShowMenu} className="text-2xl lg:hidden">
          {!showMenu ? <CgMenu /> : <CgClose />}
        </button>
        {showMenu && <Authmenu close={closeMenu} />}
      </nav>
    </header>
  );
};

export default Authnav;
