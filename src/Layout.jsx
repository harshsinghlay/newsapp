import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function Layout() {
  return (
    <div className="bg-white w-full">
      <Header />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Layout;
