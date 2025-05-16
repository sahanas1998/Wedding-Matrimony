import React, { useState } from "react";

function MemberCard({ img, id, bgColor, chartImg }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div style={{ backgroundColor: bgColor }} className="rounded-xl">
        <div className="flex flex-col gap-[12px] pb-[24px] items-center">
          <img src={img} alt="Img" className="rounded-t-xl h-[240px] w-full" />
          <h1 className="text-[20px] font-bold">பதிவு இல - {id}</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#AA0000] text-white text-[18px] font-semibold py-2 px-4 rounded-xl"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-black rounded-xl p-8 relative w-full max-w-[600px] mx-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-xl font-bold"
            >
              ×
            </button>
            <img
              src={chartImg}
              alt="Popup"
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MemberCard;
