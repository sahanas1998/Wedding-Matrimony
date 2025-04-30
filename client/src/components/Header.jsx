import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const linkClass = (path) =>
    `hover:text-[#FFDA07] ${
      location.pathname === path ? "text-[#FFDA07] underline" : ""
    }`;

  return (
    <div className="bg-[#036200] font-mono text-[24px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold flex justify-start p-2">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
          </div>
          <div className="text-white font-semibold flex justify-end gap-[48px] p-2">
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
    </div>
  );
}

export default Header;
