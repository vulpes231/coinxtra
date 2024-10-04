import React, { useState } from "react";

const styler = {
  th: "px-5 py-1.5",
};

const Deposithistory = () => {
  const [deposits, setDeposits] = useState([]);
  return (
    <div className="overflow-auto bg-white h-[480px] p-4 flex flex-col gap-4 rounded-xl shadow-lg">
      <h3 className="border-l-4 border-yellow-500 px-1 font-bold">
        Deposit history
      </h3>
      <table className="min-w-full">
        <thead>
          <tr className="text-left capitalize font-semibold bg-yellow-500 text-white">
            <th className={styler.th}>amount</th>
            <th className={styler.th}>status</th>
            <th className={styler.th}>date</th>
          </tr>
        </thead>
        {!deposits.length ? (
          <div className="absolute p-4">
            <p>you have no deposit history</p>
          </div>
        ) : (
          <tbody></tbody>
        )}
      </table>
    </div>
  );
};

export default Deposithistory;
