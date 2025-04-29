import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
