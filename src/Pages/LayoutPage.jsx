import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
