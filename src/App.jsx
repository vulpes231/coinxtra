import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages";
import { Authnav, Navbar } from "./components";
import { getAccessToken } from "./utils/utils";

const App = () => {
  const [token, setToken] = useState(false);

  const accessToken = getAccessToken();

  useEffect(() => {
    if (accessToken) {
      setToken(accessToken);
    } else {
      setToken(false);
    }
  }, [accessToken]);

  return (
    <div>
      {!token ? <Navbar /> : <Authnav />}
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
