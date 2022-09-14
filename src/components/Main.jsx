import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  const token = sessionStorage.getItem("token");

  return (
    <>
      <Navbar />
      {!token && <Navigate to={"/"} />}
      <br />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
