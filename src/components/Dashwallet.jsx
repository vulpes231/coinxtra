import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../utils/utils";
import { getUserWallet } from "../features/walletSlice";
import { btc } from "../assets";
import { getBtcData } from "../features/coinSlice";

const Dashwallet = () => {
  const accessToken = getAccessToken();
  const dispatch = useDispatch();
  const { userWallet } = useSelector((state) => state.wallet);
  const { btcData } = useSelector((state) => state.coin);

  //   console.log(btcData);

  const coinAmount = userWallet?.balance / btcData?.bitcoin?.usd || 0;

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserWallet());
      dispatch(getBtcData());
    }
  }, [accessToken, dispatch]);
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 font-[Poppins]">
      <div className="bg-white w-full p-6 rounded-xl shadow-lg flex flex-col gap-4">
        <small className="font-bold uppercase">Assets</small>
        <div className="flex justify-between items-center">
          <span className="flex gap-1 items-center">
            <img src={btc} alt="" width={20} />
            <p className="capitalize">{userWallet?.coinType}</p>
          </span>
          <span className="flex flex-col gap-1">
            <p>{userWallet?.balance?.toFixed(2)} USD</p>
            <small className="text-xs font-light">
              {coinAmount?.toFixed(6)} BTC
            </small>
          </span>
        </div>
      </div>

      <span className="bg-white w-full p-6 rounded-xl shadow-lg flex flex-col gap-4">
        <small className="font-bold uppercase">available balance</small>
        <span>
          <p>{userWallet?.balance?.toFixed(2)} USD</p>
        </span>
      </span>
    </div>
  );
};

export default Dashwallet;
