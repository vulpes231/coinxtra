import React from "react";

const Coincard = ({ coinName, price, percentChange, img }) => {
  return (
    <div className="bg-white text-slate-950 p-6 h-[110px] w-full">
      <span className="flex items-center gap-2">
        <img src={img} alt="" width={25} />
        <h3 className="uppercase font-bold font-[Poppins]">{coinName}</h3>
      </span>
      <p>{price}</p>
      <p>{percentChange}</p>
    </div>
  );
};

export default Coincard;
