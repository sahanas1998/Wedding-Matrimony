import React, { useState } from "react";

function Landing() {
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");

  const ageOptions = Array.from({ length: 53 }, (_, i) => i + 18); // 18 to 70
  return (
    <>
      <div className="relative w-screen h-[613px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://mysticstudios.in/wp-content/uploads/2018/09/Chennai-tamil-brahmin-iyer-wedding-photography-padmaram-mystic31.jpg')",
          }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Form (make it visible and above overlay) */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <form className="bg-white p-12 rounded shadow-md text-[24px] flex justify-center gap-[24px] items-center">
            <div className="flex flex-col gap-[18px]">
              <label className="block mb-2 font-semibold text-gray-700">
                Groom / Bride
              </label>
              <select className="border border-gray-300 p-2 rounded">
                <option></option>
                <option>ஆண்</option>
                <option>பெண்</option>
              </select>
            </div>
            <div className="flex flex-col gap-[18px]">
              <label className="block mb-2 font-semibold text-gray-700">
                Age
              </label>
              <div className="flex gap-4">
                <select
                  value={ageFrom}
                  onChange={(e) => setAgeFrom(e.target.value)}
                  className="border border-gray-300 p-2 rounded"
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
              <label className="block mb-2 font-semibold text-gray-700">
                Religion
              </label>
              <select className="border border-gray-300 p-2 rounded">
                <option></option>
                <option>இந்து</option>
                <option>வேறு</option>
              </select>
            </div>
            <div className="flex flex-col gap-[18px]">
              <label className="block mb-2 font-semibold text-gray-700">
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
              <label className="block mb-2 font-semibold text-gray-700">
                Chart
              </label>
              <select className="border border-gray-300 p-2 rounded">
                <option></option>
                <option>அனைத்தும்</option>
                <option>சூரியன் + செவ்வாய்</option>
                <option>செவ்வாய் குற்றம்</option>
                <option>செவ்வாய் குற்றம் அற்றது</option>
              </select>
            </div>
            <div className="flex flex-col gap-[18px]">
              <label className="block mb-2 font-semibold text-gray-700">
                Search{" "}
              </label>
              <button className="bg-black text-white py-2 px-8 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Landing;
