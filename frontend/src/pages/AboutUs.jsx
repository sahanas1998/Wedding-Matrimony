import React from "react";

function AboutUs() {
  const successStories = [
    "https://i.pinimg.com/736x/b8/f8/5e/b8f85ea5900c7bfee92f143bae303202.jpg",
    "https://i.pinimg.com/736x/b8/f8/5e/b8f85ea5900c7bfee92f143bae303202.jpg",
    "https://i.pinimg.com/736x/b8/f8/5e/b8f85ea5900c7bfee92f143bae303202.jpg",
    "https://i.pinimg.com/736x/b8/f8/5e/b8f85ea5900c7bfee92f143bae303202.jpg",
    "https://i.pinimg.com/736x/b8/f8/5e/b8f85ea5900c7bfee92f143bae303202.jpg",
    "https://i.pinimg.com/736x/b8/f8/5e/b8f85ea5900c7bfee92f143bae303202.jpg",
  ];

  return (
    <div className="py-[60px] lg:px-[24px] px-[16px] bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[40px]">
          <div className="flex justify-between items-end gap-[24px] w-full flex-col lg:flex-row">
            <div className="w-full lg:w-1/3">
              <img
                src="https://image1.masterfile.com/getImage/Njk1LTA1NzY0OTAzZW4uMDAwMDAwMDA=AHamwu/695-05764903en_Masterfile.jpg"
                alt=""
                className="object-cover rounded-lg h-[350px] w-full"
              />
            </div>
            <div className="flex flex-col gap-[6px] items-start w-full lg:w-2/3">
              <h3 className="text-[40px] text-[#FFDA07] font-bold">
                Kirupa Kirushanamoorthy
              </h3>
              <h3 className="text-[30px] font-semibold">Switzerland</h3>
              <p className="text-[20px]">
                There is no time limit on when you can access our matrimonial
                platform. You can access our website 24/7 at your convenience,
                view profile listings, and connect with marriage proposals with
                just a few clicks.
              </p>
              <button className="bg-[#AA0000] py-2 px-4 font-semibold rounded-lg">
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[40px] font-bold text-[#FFDA07]">
              Some Successful Marriage Stories
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
              {successStories.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Story ${index + 1}`}
                  className="rounded-lg h-[300px] w-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
