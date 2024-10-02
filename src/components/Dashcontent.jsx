import React, { useEffect } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getCoinData } from "../features/coinSlice";
import { btc, eth, usdt, doge, ltc, tron } from "../assets";

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
    <div className="w-full md:w-[80%] customh m-3 overflow-scroll lg:overflow-hidden">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          <span className="flex flex-col gap-2 bg-white p-4">
            <p>username</p>
            <p>level</p>
          </span>
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <span className="bg-white w-full px-3">total assets</span>
            <span className="bg-white w-full px-3">available balance</span>
          </div>
          <span className="p-3 flex flex-col gap-4 bg-white">
            <h3>Recent Activities</h3>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 text-center bg-white gap-8 p-4">
            <small>deposit</small>
            <small>withdraw</small>
            <small>transfer</small>
            <small>level</small>
          </div>
          <div className=" flex flex-col gap-2 bg-white">
            <h3 className="font-medium text-xl px-6 pt-2">Information</h3>
            <hr />
            <span className={styles.span}>
              <small>email</small>
              <small>pin</small>
              <small>address</small>
            </span>
          </div>
          <div className=" flex flex-col gap-2 bg-white rounded-xl shadow-lg">
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
