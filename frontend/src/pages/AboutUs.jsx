import React, {useEffect , useState} from "react";
import { getImages } from "../services/api";
import { Link } from "react-router-dom";

function AboutUs() {
  const [images, setImages] = useState([]);

  useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await getImages();
          setImages(response.data);
        } catch (error) {
          console.error("Error fetching charts:", error);
        }
      };
  
      fetchImages();
    }, []);

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
            <div className="flex flex-col gap-[8px] items-start w-full lg:w-2/3">
              <h3 className="lg:text-[40px] md:text-[32px] text-[30px] text-[#FFDA07] font-bold">
                Kirupa Kirushanamoorthy
              </h3>
              <h3 className="lg:text-[30px] md:text-[24px] text-[20px] font-semibold">
                Switzerland
              </h3>
              <p className="text-[20px]">
                There is no time limit on when you can access our matrimonial
                platform. You can access our website 24/7 at your convenience,
                view profile listings, and connect with marriage proposals with
                just a few clicks.
              </p>
              <Link
                className="bg-[#AA0000] py-2 px-4 font-semibold lg:w-fit w-full rounded-lg"
                to="https://wa.me/41788240315"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <h3 className="lg:text-[40px] md:text-[32px] text-[18px] font-bold text-[#FFDA07]">
              Some Successful Marriage Stories
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
              {images.map((imgUrl, index) => (
                <img
                  key={index}
                  src={`http://localhost:5000/images/${imgUrl.image}`}
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
