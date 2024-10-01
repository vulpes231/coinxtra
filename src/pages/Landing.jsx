import React from "react";
import { Coincard } from "../components";
import { btc, eth, usdt, doge, ltc, tron, bnb, xrp } from "../assets";

const Landing = () => {
  return (
    <section className="myImage w-full min-h-screen relative bg-slate-950">
      <div className="w-full h-full bg-black absolute bg-opacity-80 z-10"></div>
      <div className="text-white over p-6 relative z-20 flex flex-col items-center justify-center">
        <div className="text-center my-10 flex flex-col gap-6 font-[Poppins]">
          <p className="text-xs font-normal">
            The smart alternative for your everyday finances
          </p>
          <h3 className="text-5xl capitalize font-[Roboto] font-bold">
            grow your money the <br /> modern way
          </h3>
          <p className="text-sm">
            Grow your money, Transfer and Withdraw crypto with low fees and earn{" "}
            <br />
            3.5% on your savings
          </p>
        </div>
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6 w-full md:max-w-[1000px]">
          <Coincard coinName={"bitcoin"} img={btc} />
          <Coincard coinName={"ethereum"} img={eth} />
          <Coincard coinName={"tether"} img={usdt} />
          <Coincard coinName={"dogecoin"} img={doge} />
          <Coincard coinName={"litecoin"} img={ltc} />
          <Coincard coinName={"tron"} img={tron} />
          <Coincard coinName={"bnb"} img={bnb} />
          <Coincard coinName={"xrp"} img={xrp} />
        </div>
      </div>
    </section>
  );
};

export default Landing;
