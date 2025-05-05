import React from "react";
import MemberCard from "../components/MemberCard";
import { Boy, Girl } from "../constants/Data";
import { Chart1 } from "../constants/Data";

function Members() {
  const membersData = [
    { img: Girl, id: "1045", bgColor: "#F2C7EB", chartImg: Chart1 },
    { img: Boy, id: "1045", bgColor: "#B8DBFF", chartImg: Chart1 },
    { img: Girl, id: "1045", bgColor: "#F2C7EB", chartImg: Chart1 },
    { img: Boy, id: "1045", bgColor: "#B8DBFF", chartImg: Chart1 },
    { img: Boy, id: "1045", bgColor: "#B8DBFF", chartImg: Chart1 },
    { img: Girl, id: "1045", bgColor: "#F2C7EB", chartImg: Chart1 },
    { img: Boy, id: "1045", bgColor: "#B8DBFF", chartImg: Chart1 },
    { img: Girl, id: "1045", bgColor: "#F2C7EB", chartImg: Chart1 },
    { img: Boy, id: "1045", bgColor: "#B8DBFF", chartImg: Chart1 },
    { img: Boy, id: "1045", bgColor: "#B8DBFF", chartImg: Chart1 },
  ];

  return (
    <div className="py-[80px] lg:px-[24px] px-[16px] bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-end justify-end">
            {" "}
            <select className="border border-gray-300 p-2 rounded">
              <option>All</option>
              <option>சூ + செவ்வாய்</option>
              <option>செவ்வாய் குற்றம்</option>
              <option>செவ்வாய் குற்றம் அற்றது</option>
            </select>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-[24px] justify-between">
            {membersData.map((member, index) => (
              <MemberCard
                key={index}
                img={member.img}
                id={member.id}
                bgColor={member.bgColor}
                chartImg={member.chartImg}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
