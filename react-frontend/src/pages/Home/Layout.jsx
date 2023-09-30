import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SignUpBox from "../../components/SignUpBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <ToastContainer />
      <Navbar data={data} />
      <Outlet setData={setData} />
      <SignUpBox />
    </>
  );
};
export default Layout;
