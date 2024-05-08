import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, Link } from "react-router-dom";

import OrderPopup from "../components/OrderPopup/OrderPopup";
import Footer from "../components/Footer";
import Header from "../components/Navbar/Header";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  return (
    <>
      <Header />
      <Outlet />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Layout;
