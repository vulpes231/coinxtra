import React from "react";
import { Input } from "../components";
import { MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const styles = {
  formDiv: "relative flex gap-2",
  icon: "absolute top-[12px] left-3",
};

const Signin = () => {
  return (
    <section className="customHeight bg-slate-100 mt-14 p-6 flex items-center justify-center">
      <form className="md:max-w-[400px] bg-white md:mx-auto p-10 flex flex-col gap-4 shadow-xl rounded-xl w-full font-[Poppins]">
        <h3 className="capitalize font-bold my-5">
          sign in to access full features.
        </h3>
        <div className={styles.formDiv}>
          <FaUser className={styles.icon} />
          <Input type={"text"} placeholder={"username"} />
        </div>

        <div className={styles.formDiv}>
          <MdLock className={styles.icon} />
          <Input type={"password"} placeholder={"password"} />
        </div>
        <div className="flex items-center justify-between text-xs text-yellow-600">
          <Link>Forgot password</Link>
          <span>
            No account? <Link>create now</Link>
          </span>
        </div>

        <button className="border-none bg-yellow-600 py-2.5 px-4 text-white font-medium uppercase rounded-3xl text-sm mt-5">
          login
        </button>
      </form>
    </section>
  );
};

export default Signin;
