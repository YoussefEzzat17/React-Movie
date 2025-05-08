import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Classes from "../Styles/Layout.module.css"


function LayoutPage() {
  return (
    <div className={Classes.layout}>
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
}

export default LayoutPage;
