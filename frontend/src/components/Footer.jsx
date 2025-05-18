import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-[#000035] text-white border-t border-black">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col gap-[20px] justify-between items-center p-4">
          <h2 className="lg:text-[20px] md:text-[18px] text-[8px]">
            @அகில உலக ஐயர் வீட்டு கல்யாண இலவச திருமண சேவை
          </h2>
          <div className="flex gap-[18px] items-center justify-center text-white">
            <Link className="hover:text-[#FFDA07]">
              <FaFacebook className="lg:text-[24px] md:text-[18px] text-[16px]" />
            </Link>
            <Link
              to="https://wa.me/41788240315"
              className="hover:text-[#FFDA07]"
            >
              <BsWhatsapp className="lg:text-[24px] md:text-[18px] text-[16px]" />
            </Link>
            <Link
              to="mailto:iyarweddingmatrimony@gmail.com"
              className="hover:text-[#FFDA07]"
            >
              <MdMarkEmailUnread className="lg:text-[24px] md:text-[18px] text-[16px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
