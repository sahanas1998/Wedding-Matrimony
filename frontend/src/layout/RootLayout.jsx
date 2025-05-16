import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div>
      <Navbar>
        <Navbar />
      </Navbar>
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
