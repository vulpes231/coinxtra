import React from "react";
import { Sidebar } from "../components";

const Deposit = () => {
  return (
    <section className="min-h-screen bg-slate-100 w-full overflow-hidden ">
      <div className="flex min-h-full mt-[66px]">
        <Sidebar />
        <div className="bg-white w-full md:w-[80%] customh m-3 p-6">
          Deposit
        </div>
      </div>
    </section>
  );
};

export default Deposit;