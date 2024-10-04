import React, { useEffect } from "react";
import { Changepass, Sidebar, Topup } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../utils/utils";
import { getUser } from "../features/userSlice";
import { userProfile } from "../assets";
import { MdLocationOn, MdMail } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";

const styler = {
  span: "flex items-center gap-2",
  div: "bg-white p-6 rounded-xl shadow-lg w-full flex flex-col gap-4",
};

const Profile = () => {
  const dispatch = useDispatch();
  const accessToken = getAccessToken();

  const { user } = useSelector((state) => state.user);
  // console.log(user);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUser());
    }
  }, [accessToken]);

  useEffect(() => {
    document.title = "CoinXtra - Profile";
  }, []);
  return (
    <section className="min-h-screen bg-slate-100 w-full ">
      <div className="flex min-h-full mt-[66px]">
        <Sidebar />
        <div className="w-full lg:w-[80%] customh m-3 flex flex-col gap-6">
          <div className=" bg-white p-6 rounded-xl shadow-lg w-full md:w-[50%]">
            <h3 className="border-l-4 border-yellow-500 px-1 font-bold">
              User Profile
            </h3>
            <div className="flex items-center gap-4 mt-3">
              <figure>
                <img src={userProfile} alt="" width={120} />
              </figure>
              <div className="flex flex-col gap-2">
                <span className={styler.span}>
                  <FaUserGroup />
                  <h3 className="capitalize font-semibold text-lg">
                    {user.fullname}
                  </h3>
                </span>
                <span className={styler.span}>
                  <MdMail />
                  <p className="text-sm font-normal">{user.email}</p>
                </span>
                <span className={styler.span}>
                  <MdLocationOn />
                  <p className="text-sm font-normal">{user.homeAddress}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className={styler.div}>
              <h3 className="border-l-4 border-yellow-500 px-1 font-bold capitalize">
                change password
              </h3>
              <Changepass />
            </div>
            <div className={styler.div}>
              <h3 className="border-l-4 border-yellow-500 px-1 font-bold capitalize">
                top up
              </h3>
              <Topup user={user} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
