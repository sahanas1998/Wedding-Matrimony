import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();

  const linkClass = (path) =>
    `hover:text-[#FFDA07] ${
      location.pathname === path ? "text-[#FFDA07] underline" : ""
    }`;

    const navigate = useNavigate();

    const handleChange = (e) => {
      const selectedPath = e.target.value;
      if (selectedPath) {
        navigate(selectedPath);
      }
    };

  return (
    <>
      <div className="bg-[#036200] font-mono text-[24px]">
        <div className="container mx-auto">
          <div className="md:flex hidden justify-between items-center">
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
          <div className="md:hidden flex items-center justify-center w-full p-2">
            <select
              onChange={handleChange}
              className="bg-[#036200] text-[#FFDA07] w-full"
              defaultValue=""
            >
              <option value="/">Home</option>
              <option value="/members">Members</option>
              <option value="/aboutus">About Us</option>
              <option value="/contactus">Contact Us</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
