import React, { useEffect, useState } from "react";
import { Deposithistory, Sidebar } from "../components";
import { TbPigMoney } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { getAccessToken } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/userSlice";
import { getUserWallet } from "../features/walletSlice";
import { getBtcData } from "../features/coinSlice";

const styler = {
  input:
    "border outline-none focus:border-none focus:outline-yellow-500 p-2 placeholder:text-sm placeholder:font-thin",
  div: "flex flex-col gap-1",
  label: "capitalize font-medium text-sm",
  para: " capitalize px-1",
  span: "flex items-center gap-1",
  icon: "w-10 h-10 p-1.5 rounded-full",
};

const Deposit = () => {
  const dispatch = useDispatch();
  const accessToken = getAccessToken();

  const { user } = useSelector((state) => state.user);
  const { userWallet } = useSelector((state) => state.wallet);
  const { btcData } = useSelector((state) => state.coin);

  const [form, setForm] = useState({
    amount: 0,
  });

  const fee = 0.024 * form.amount || `0.00`;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const coinAmount = form.amount / btcData?.bitcoin?.usd;

  useEffect(() => {
    document.title = "CoinXtra - Deposit";
    if (accessToken) {
      dispatch(getUser());
      dispatch(getUserWallet());
      dispatch(getBtcData());
    }
  }, [accessToken, dispatch]);
  return (
    <section className="min-h-screen bg-slate-100 w-full p-6 md:p-3">
      <div className="flex min-h-full mt-[66px]">
        <Sidebar />
        <div className=" w-full lg:w-[80%] customh gap-6 flex flex-col md:flex-row font-[Poppins] text-xs md:text-lg">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1 p-4 bg-white rounded-xl shadow-lg">
              <span className={styler.span}>
                <TbPigMoney
                  className={`${styler.icon} bg-green-100 text-green-500`}
                />
                <p className={styler.para}>
                  available balance:{" "}
                  <span className="font-bold text-lg">
                    {userWallet?.balance?.toFixed(2)} USD
                  </span>
                </p>
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
                Deposit
              </h3>

              <div className={styler.div}>
                <label
                  className={`${styler.label} bg-green-200 p-2`}
                  htmlFor=""
                >
                  deposit{" "}
                  <span className="font-bold text-xs">{form.amount} USD</span>{" "}
                  to{" "}
                  <span className="font-bold text-xs">
                    {userWallet?.address}
                  </span>
                </label>
                <span className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Wallet address"
                    className={`${styler.input} w-full`}
                    value={userWallet?.address}
                    readOnly
                  />
                  <button className="bg-slate-400 text-white text-xs w-[15%] font-medium py-3 px-2">
                    Copy
                  </button>
                </span>
              </div>
              <div className={styler.div}>
                <label className={styler.label} htmlFor="">
                  amount
                </label>
                <input
                  type="text"
                  placeholder="Amount"
                  className={styler.input}
                  onChange={handleInput}
                  value={form.amount}
                  name="amount"
                />
              </div>
              <div className="flex justify-between items-center capitalize text-xs font-medium text-slate-400">
                {/* <span>fees: ${fee}</span> */}
                <span>
                  Coin amount: {coinAmount?.toFixed(4) || `0.0000`} BTC
                </span>
              </div>
              <button className="text-white bg-yellow-500 border-none p-2 mt-5 font-bold uppercase">
                deposit
              </button>
            </form>
          </div>
          <div className="w-full ">
            <Deposithistory />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deposit;
