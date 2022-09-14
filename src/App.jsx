import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Main from "./components/Main";
import Accounts from "./components/Accounts";
import LogOut from "./components/LogOut";
import Record from "./components/Record";
import Tables from "./components/Tables";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" m-5 ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />}>
            <Route path="accounts" element={<Accounts />} />
            <Route path="log-Out" element={<LogOut />} />
            <Route path="record" element={<Record />} />
            <Route path="tables" element={<Tables />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
