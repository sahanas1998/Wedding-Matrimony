import React, { useState } from "react";
import { HomeImg } from "../constants/Data";

function Landing() {
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");

  const ageOptions = Array.from({ length: 53 }, (_, i) => i + 18); // 18 to 70
  return (
    <>
      <div className="relative w-screen h-[650px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://mysticstudios.in/wp-content/uploads/2018/09/Chennai-tamil-brahmin-iyer-wedding-photography-padmaram-mystic31.jpg')",
          }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Form (make it visible and above overlay) */}
        <div className="relative z-10 flex justify-center items-center h-full container mx-auto">
          <form className="border border-white p-12  rounded shadow-md lg:text-[24px] text-[20px] flex md:flex-row flex-col justify-center gap-[24px] items-center">
            <div className="flex flex-col gap-[18px]">
              <label className="block mb-2 font-semibold text-white">
                Groom / Bride
              </label>
              <select className="border border-gray-300 p-2 rounded text-black">
                <option></option>
                <option>ஆண்</option>
                <option>பெண்</option>
              </select>
            </div>
            <div className="flex flex-col gap-[18px]">
              <label className="block mb-2 font-semibold text-white">Age</label>
              <div className="flex gap-4">
                <select
                  value={ageFrom}
                  onChange={(e) => setAgeFrom(e.target.value)}
                  className="border border-gray-300 p-2 rounded text-black"
                >
                  <option value="" disabled>
                    From
                  </option>
                  {ageOptions.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
                <select
                  value={ageTo}
                  onChange={(e) => setAgeTo(e.target.value)}
                  className="border border-gray-300 p-2 rounded"
                >
                  <option value="" disabled>
                    To
                  </option>
                  {ageOptions.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-[18px]">
              <label className="block mb-2 font-semibold text-white">
                Religion
              </label>
              <select className="border border-gray-300 p-2 rounded">
                <option></option>
                <option>இந்து</option>
                <option>வேறு</option>
              </select>
            </div>
            <div className="flex flex-col gap-[18px]">
              <label className="block mb-2 font-semibold text-white">
                Caste
              </label>
              <select className="border border-gray-300 p-2 rounded">
                <option></option>
                <option>பிராமணர்</option>
                <option>குருக்கள்</option>
                <option>வேளாளர் சைவம்</option>
                <option>வீரசைவம்</option>
                <option>வேறு</option>
              </select>
            </div>
            <div className="flex flex-col gap-[18px]">
              <label className="block mb-2 font-semibold text-white">
                Chart
              </label>
              <select className="border border-gray-300 p-2 rounded">
                <option></option>
                <option>அனைத்தும்</option>
                <option>சூ + செவ்வாய்</option>
                <option>செவ்வாய் குற்றம்</option>
                <option>செவ்வாய் குற்றம் அற்றது</option>
              </select>
            </div>
            <div className="flex flex-col gap-[18px]">
              <label className="block mb-2  ">Search </label>
              <button className="bg-[#036200] font-bold text-white py-2 px-8 rounded">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center bg-black">
        <img src={HomeImg} alt="" className="h-[300px] w-fit" />
      </div>
    </>
  );
}

export default Landing;
