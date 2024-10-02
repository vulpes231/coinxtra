import React, { useEffect } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getCoinData } from "../features/coinSlice";
import { btc, eth, usdt, doge, ltc, tron } from "../assets";
import { MdOutlinePayments } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";

const coins = [
  { name: "bitcoin", img: btc },
  { name: "ethereum", img: eth },
  { name: "tether", img: usdt },
  { name: "dogecoin", img: doge },
  { name: "litecoin", img: ltc },
  { name: "tron", img: tron },
];

const styles = {
  span: "flex flex-col gap-4 px-6 py-4",
  info: "w-10 h-10 p-2 bg-opacity-30 rounded-full",
  infoSpan: "flex flex-col items-center justify-center",
};

const Topcoin = ({ coinName, price, icon, img }) => {
  return (
    <div className="flex justify-between">
      <span className="flex gap-2 items-center w-full">
        <img src={img} alt={coinName} width={20} />
        <h4 className="font-semibold capitalize">{coinName}</h4>
      </span>
      <p className="w-full">{price}</p>
      <span>{icon}</span>
    </div>
  );
};

const Dashcontent = ({ user }) => {
  // console.log(user);
  const dispatch = useDispatch();
  const { coinData, getCoinLoading, getCoinError } = useSelector(
    (state) => state.coin
  );

  useEffect(() => {
    dispatch(getCoinData());
  }, [dispatch]);

  const coinList = coins.map((coin) => {
    const data = coinData[coin.name];
    return {
      ...coin,
      price: data ? `$${data.usd.toFixed(2)}` : "Loading...",
      change: data ? data.usd_24h_change : 0,
    };
  });

  // Sort coins by 24-hour change (highest to lowest)
  const sortedCoins = coinList.sort((a, b) => b.change - a.change);

  return (
    <div className="w-full md:w-[80%] m-3">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          <span className="flex flex-col gap-2 bg-white p-4 w-full md:w-[50%] rounded-xl shadow-lg font-[Roboto]">
            <h3 className="font-medium capitalize text-xl">{user?.fullname}</h3>
            <p className="text-slate-400 flex items-center">
              {" "}
              <FaCrown /> Level: {user?.level}
            </p>
          </span>
          <div className="flex flex-col md:flex-row md:justify-between gap-4 font-[Poppins]">
            <span className="bg-white w-full p-4 rounded-xl shadow-lg">
              <small className="font-bold uppercase">total assets</small>
              <h4>0.00</h4>
            </span>

            <span className="bg-white w-full p-4 rounded-xl shadow-lg">
              <small className="font-bold uppercase">available balance</small>
              <h4>0.00</h4>
            </span>
          </div>
          <span className="p-3 flex flex-col gap-4 bg-white">
            <h3>Recent Activities</h3>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow-lg font-[Poppins] capitalize">
            <h3 className="font-medium text-xl px-6 py-2 ">Manage assets</h3>
            <hr />
            <div className="grid grid-cols-2 text-center p-4 gap-4">
              <span className={styles.infoSpan}>
                <FaMoneyBillTransfer
                  className={`${styles.info} bg-green-500 text-green-500`}
                />
                <small className="uppercase text-xs font-medium">deposit</small>
              </span>
              <span className={styles.infoSpan}>
                <MdOutlinePayments
                  className={`${styles.info} bg-red-500 text-red-500`}
                />
                <small className="uppercase text-xs font-medium">
                  withdraw
                </small>
              </span>
              <span className={styles.infoSpan}>
                <GrTransaction
                  className={`${styles.info} bg-cyan-500 text-cyan-500`}
                />
                <small className="uppercase text-xs font-medium">
                  transfer
                </small>
              </span>

              <span className={styles.infoSpan}>
                <FaCrown
                  className={`${styles.info} bg-yellow-500 text-yellow-500`}
                />
                <small className="uppercase text-xs font-medium">level</small>
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-2 bg-white font-[Poppins] rounded-xl shadow-lg">
            <h3 className="font-medium text-xl px-6 pt-2">Information</h3>
            <hr />
            <span className={styles.span}>
              <small>
                <p className="capitalize font-bold border-l-4 px-1 text-md border-yellow-600">
                  email
                </p>
                <p>{user?.email}</p>
              </small>
              <small>
                <p className="capitalize font-bold border-l-4 px-1 text-md border-yellow-600">
                  pin
                </p>
                <p>{user?.pin}</p>
              </small>
              <small>
                <p className="capitalize font-bold border-l-4 px-1 text-md border-yellow-600">
                  wallet address
                </p>
                <p>{user?.bindAddress}</p>
              </small>
            </span>
          </div>
          <div className=" flex flex-col gap-2 bg-white rounded-xl shadow-lg font-[Poppins]">
            <h3 className="font-medium text-xl px-6 pt-2">Top Movers</h3>
            <hr />
            <span className={styles.span}>
              {sortedCoins.map((cn, index) => {
                const icon =
                  cn.change > 0 ? (
                    <FaArrowTrendUp color="green" />
                  ) : (
                    <FaArrowTrendDown color="red" />
                  );
                return (
                  <Topcoin
                    key={index}
                    coinName={cn.name}
                    img={cn.img}
                    price={cn.price}
                    icon={icon}
                  />
                );
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashcontent;
