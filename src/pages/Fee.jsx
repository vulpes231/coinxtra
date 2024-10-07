import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getAccessToken } from "../utils/utils";
import { getUserWallet } from "../features/walletSlice";
import { pay } from "../assets";
import { getBtcData } from "../features/coinSlice";

const Fee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userWallet } = useSelector((state) => state.wallet);
  const { btcData } = useSelector((state) => state.coin);
  const { fee } = useParams();
  const [copy, setCopy] = useState(false);

  const accessToken = getAccessToken();

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserWallet());
      dispatch(getBtcData());
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/withdraw");
    }, 60 * 60 * 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const btcAmount = fee / btcData?.bitcoin?.usd;

  const copyToClipboard = () => {
    const textToCopy = userWallet?.address;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopy(true);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  useEffect(() => {
    let timeout;
    if (copy) {
      timeout = 2000;
      setTimeout(() => {
        setCopy(false);
      }, timeout);
    }
    return () => clearTimeout(timeout);
  }, [copy]);

  return (
    <section className="bg-slate-100 fixed w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 bg-white shadow-xl rounded-lg p-6 md:max-w-[500px] m-6">
        <p className="text-center text-xs flex flex-col gap-2">
          You are to pay a fee of{" "}
          <span className="font-medium text-green-500">${fee}</span> <br /> in
          order to complete your withdrawal.
          <span className="flex flex-col">
            <span className="font-medium text-sm">{userWallet?.address}</span>
            {copy && (
              <p className="text-green-500 bg-green-100 p-2 rounded-lg">
                copied.
              </p>
            )}
            <button className="p-2 bg-slate-300 " onClick={copyToClipboard}>
              Copy address
            </button>
          </span>{" "}
        </p>
        <div className="flex items-center gap-1">
          <small>Coin amount:</small>
          <small className="bg-slate-200 p-1 rounded-lg">
            {" "}
            {btcAmount?.toFixed(6)} BTC
          </small>
        </div>
        <img src={pay} alt="" width={150} />
        <button className="bg-yellow-600 text-white py-2.5 px-5 w-full">
          Paid
        </button>
        <small>This payment page will expire in 1 hour.</small>
      </div>
    </section>
  );
};

export default Fee;
