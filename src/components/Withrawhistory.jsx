import React, { useState } from "react";

const styler = {
  th: "px-5 py-1.5",
};

const Withrawhistory = () => {
  const [withdrawals, setWithdrawals] = useState([]);
  return (
    <div className="overflow-auto bg-white h-[528px] p-4 flex flex-col gap-4">
      <h3 className="border-l-4 border-yellow-500 px-1 font-bold">
        Withdraw history
      </h3>
      <table className="min-w-full">
        <thead>
          <tr className="text-left capitalize font-semibold bg-yellow-500 text-white">
            <th className={styler.th}>amount</th>
            <th className={styler.th}>status</th>
            <th className={styler.th}>date</th>
          </tr>
        </thead>
        {!withdrawals.length ? (
          <div className="absolute p-4">
            <p>you have no history</p>
          </div>
        ) : (
          <tbody></tbody>
        )}
      </table>
    </div>
  );
};

export default Withrawhistory;
