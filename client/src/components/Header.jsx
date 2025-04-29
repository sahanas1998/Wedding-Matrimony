import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const linkClass = (path) =>
    `hover:text-[#AA0000] ${
      location.pathname === path ? "text-[#AA0000]" : ""
    }`;

  return (
    <div className="bg-[#FFDA07]">
      <div className="container mx-auto">
        <div className="border-b border-white text-[#000035] font-semibold flex justify-end items-center gap-[48px] text-[28px] p-2">
          <Link to="/members" className={linkClass("/members")}>
            Members
          </Link>
          <Link to="/aboutus" className={linkClass("/aboutus")}>
            About Us
          </Link>
          <Link to="/contactus" className={linkClass("/contactus")}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
