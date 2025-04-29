import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-[#000035] text-white">
      <div className="container mx-auto">
        <div className="flex justify-between p-4">
          <Link to="/">@அகில உலக ஐயர் வீட்டு கல்யாண இலவச திருமண சேவை</Link>
          <div className="flex gap-[18px] items-center justify-center">
            <Link>
              <BsWhatsapp className="text-[24px]" />
            </Link>
            <Link>
              <FaFacebook className="text-[24px]" />
            </Link>
            <Link>
              <FiPhoneCall className="text-[24px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
