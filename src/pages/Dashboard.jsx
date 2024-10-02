import React from "react";
import { Dashcontent, Sidebar } from "../components";

const Dashboard = () => {
  return (
    <section className="min-h-screen bg-slate-100 w-full overflow-hidden ">
      <div className="flex min-h-full mt-[66px]">
        <Sidebar />
        <Dashcontent />
      </div>
    </section>
  );
};

export default Dashboard;
