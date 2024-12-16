import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

function Mainlayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Mainlayout;
