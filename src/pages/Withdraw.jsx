import React, { useEffect } from "react";
import { Sidebar, Withrawhistory } from "../components";
import { TbPigMoney } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { getAccessToken } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/userSlice";

const styler = {
  input:
    "border outline-none focus:border-none focus:outline-yellow-500 p-2 placeholder:text-sm placeholder:font-thin",
  div: "flex flex-col gap-1",
  label: "capitalize font-medium text-sm",
  para: " capitalize px-1",
  span: "flex items-center gap-1",
  icon: "w-10 h-10 p-1.5 rounded-full",
};

const Withdraw = () => {
  const dispatch = useDispatch();
  const accessToken = getAccessToken();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    document.title = "CoinXtra - Withdraw";
    if (accessToken) {
      dispatch(getUser());
    }
  }, [accessToken, dispatch]);

  return (
    <section className="min-h-screen bg-slate-100 w-full">
      <div className="flex min-h-full mt-[66px]">
        <Sidebar />
        <div className=" w-full md:w-[80%] m-3 customh gap-6 flex flex-col md:flex-row font-[Poppins]">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1 p-4 bg-white rounded-xl shadow-lg">
              <span className={styler.span}>
                <TbPigMoney
                  className={`${styler.icon} bg-green-100 text-green-500`}
                />
                <p className={styler.para}>available balance:</p>
              </span>
              <span className={styler.span}>
                <IoWalletOutline
                  className={`${styler.icon} bg-yellow-100 text-yellow-500`}
                />
                <p className={styler.para}>
                  linked address: <span>{user?.bindAddress}</span>{" "}
                </p>
              </span>
            </div>
            <form
              action=""
              className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="border-l-4 border-yellow-500 px-1 font-bold">
                Withdraw
              </h3>
              <div className={styler.div}>
                <label className={styler.label} htmlFor="">
                  from
                </label>
                <select name="" className={`${styler.input} bg-white`}>
                  <option value="">choose account</option>
                  <option value="">
                    <div>
                      <p>usd balance: 100.00 USD</p>
                    </div>
                  </option>
                </select>
              </div>
              <div className={styler.div}>
                <label className={styler.label} htmlFor="">
                  receiving wallet address
                </label>
                <input
                  type="text"
                  placeholder="Wallet address"
                  className={styler.input}
                />
              </div>
              <div className={styler.div}>
                <label className={styler.label} htmlFor="">
                  amount
                </label>
                <input
                  type="text"
                  placeholder="Withdrawal amount"
                  className={styler.input}
                />
              </div>
              <button className="text-white bg-yellow-500 border-none p-2 mt-5 font-bold uppercase">
                request withdrawal
              </button>
            </form>
          </div>
          <div className="w-full ">
            <Withrawhistory />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Withdraw;
