import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <div className="bg-[#AA0000] flex md:flex-row flex-col gap-[12px] md:pt-0 pt-2 justify-between items-center">
          <div className="md:block hidden">
            <img
              src="https://t3.ftcdn.net/jpg/05/30/83/58/360_F_530835862_aRlrvE9whUu8I6sAKoltDrg9jZNUa8Ev.jpg"
              alt="Img1"
              className="h-full lg:w-[200px] md:w-[140px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="lg:text-[32px] md:text-[20px] text-[16px] text-[#FFDA07] flex flex-col items-center font-semibold">
              <span>அகில உலக ஐயர் வீட்டு கல்யாண</span>
              <span>இலவச திருமண சேவை</span>
            </h1>
            <h2 className="text-white lg:text-[24px] md:text-[20px] text-[14px] font-bold">
              சைவ போசனம் மட்டும்
            </h2>
          </div>
          <div>
            <img
              src="https://mysticstudios.in/wp-content/uploads/2018/09/Chennai-tamil-brahmin-iyer-wedding-photography-padmaram-mystic35.jpg"
              alt="Img1"
              className="h-full lg:w-[200px] md:w-[140px] w-full object-cover"
            />
          </div>
        </div>
      </Link>
      {/* <div className="bg-[#036200] flex items-center justify-center p-2">
        <Link
          to="https://wa.me/41788240315"
          className="text-[24px] text-white"
        >
          சுவிஸ் - 0041788240315
        </Link>
      </div> */}
    </div>
  );
}

export default Navbar;
