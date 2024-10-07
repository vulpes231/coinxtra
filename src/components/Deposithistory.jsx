import React, { useState } from "react";

const styler = {
  th: "px-5 py-1.5",
};

const Deposithistory = () => {
  const [deposits, setDeposits] = useState([]);

  return (
    <div className="overflow-auto bg-white h-[350px] md:h-[480px] p-4 flex flex-col gap-4 rounded-xl shadow-lg">
      <h3 className="border-l-4 border-yellow-500 px-1 font-bold">
        Deposit History
      </h3>
      <table className="min-w-full">
        <thead>
          <tr className="text-left capitalize font-semibold bg-yellow-500 text-white">
            <th className={styler.th}>Amount</th>
            <th className={styler.th}>Status</th>
            <th className={styler.th}>Date</th>
          </tr>
        </thead>
        <tbody>
          {!deposits.length ? (
            <tr>
              <td colSpan={3} className="text-center p-4">
                You have no deposit history.
              </td>
            </tr>
          ) : (
            deposits.map((deposit, index) => (
              <tr key={index}>
                <td className={styler.th}>{deposit.amount}</td>
                <td className={styler.th}>{deposit.status}</td>
                <td className={styler.th}>{deposit.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Deposithistory;
