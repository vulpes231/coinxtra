import React, { useState } from "react";

const styler = {
  input:
    "border outline-none focus:outline-yellow-500 focus:border-none p-2 placeholder:font-thin placeholder:text-sm",
};

const Changepass = () => {
  const [form, setForm] = useState({
    currentPass: "",
    newPass: "",
    confirmPass: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Current password"
        onChange={handleInput}
        value={form.currentPass}
        name="currentPass"
        className={styler.input}
      />
      <input
        type="text"
        placeholder="New password"
        onChange={handleInput}
        value={form.newPass}
        name="newPass"
        className={styler.input}
      />
      <input
        type="text"
        placeholder="Confirm password"
        onChange={handleInput}
        value={form.confirmPass}
        name="confirmPass"
        className={styler.input}
      />
      <button className="bg-yellow-500 text-white capitalize font-medium mt-5 p-2 text-sm">
        change password
      </button>
    </div>
  );
};

export default Changepass;
