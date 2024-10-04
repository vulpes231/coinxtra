import React, { useEffect } from "react";
import { Sidebar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../utils/utils";

const Profile = () => {
  const dispatch = useDispatch();
  const accessToken = getAccessToken();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUser());
    }
  }, [accessToken]);

  useEffect(() => {
    document.title = "CoinXtra - Profile";
  });
  return (
    <section className="min-h-screen bg-slate-100 w-full overflow-hidden ">
      <div className="flex min-h-full mt-[66px]">
        <Sidebar />
        <div className="bg-white w-full md:w-[80%] customh m-3 p-6">
          Profile
        </div>
      </div>
    </section>
  );
};

export default Profile;
