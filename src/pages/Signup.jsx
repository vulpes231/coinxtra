import React, { useEffect, useState } from "react";
import { Input } from "../components";
import {
  MdHome,
  MdLock,
  MdLockReset,
  MdMail,
  MdPassword,
} from "react-icons/md";
import { FaPhone, FaUser, FaWallet } from "react-icons/fa6";

const styles = {
  formDiv: "relative flex gap-2",
  icon: "absolute top-[12px] left-3",
};

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    pin: "",
    walletAddress: "",
    address: "",
    invitation: "",
  });

  useEffect(() => {
    document.title = "CoinXtra - Signup";
  }, []);
  return (
    <section className="customHeight bg-slate-100 mt-14 p-6">
      <form className="md:max-w-[600px] bg-white md:mx-auto p-10 flex flex-col gap-4 shadow-xl rounded-xl">
        <h3 className="capitalize font-bold my-5">sign up to get started.</h3>
        <div className={styles.formDiv}>
          <FaUser className={styles.icon} />
          <Input type={"text"} placeholder={"username"} />
        </div>
        <div className={styles.formDiv}>
          <FaPhone className={styles.icon} />
          <Input type={"text"} placeholder={"phone"} />
        </div>
        <div className={styles.formDiv}>
          <MdMail className={styles.icon} />
          <Input placeholder={"email"} />
        </div>
        <div className={styles.formDiv}>
          <MdLock className={styles.icon} />
          <Input type={"password"} placeholder={"password"} />
        </div>
        <div className={styles.formDiv}>
          <MdLockReset className={styles.icon} />
          <Input type={"password"} placeholder={"pin"} />
        </div>
        <div className={styles.formDiv}>
          <MdHome className={styles.icon} />
          <Input type={"text"} placeholder={"address"} />
        </div>
        <div className={styles.formDiv}>
          <FaWallet className={styles.icon} />
          <Input type={"text"} placeholder={"BTC wallet address"} />
        </div>
        <div className={styles.formDiv}>
          <MdPassword className={styles.icon} />
          <Input type={"text"} placeholder={"Invitation code (optional)"} />
        </div>
        <button className="border-none bg-yellow-600 py-2.5 px-4 text-white font-medium uppercase rounded-3xl text-sm mt-5">
          register
        </button>
      </form>
    </section>
  );
};

export default Signup;
