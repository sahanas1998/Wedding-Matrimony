import React,{useState , useEffect} from "react";
import MemberCard from "../components/MemberCard";
import { getCharts } from "../services/api";

function Members() {
  const [charts, setCharts] = useState([]);
  const [selectChart, setSelectChart] = useState("");

  useEffect(() => {
    const fetchCharts = async () => {
      try {
        const response = await getCharts();
        setCharts(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchCharts();
  }, []);

  const filterData = selectChart
    ? charts.filter((chart) => chart.chartData === selectChart)
    : charts;

  return (
    <div className="py-[80px] lg:px-[24px] px-[16px] bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-end justify-end">
            {" "}
            <select
              className="border bg-black text-white md:w-fit w-full border-gray-300 p-2 rounded"
              value={selectChart}
              onChange={(e) => setSelectChart(e.target.value)}
            >
              <option value="">All</option>
              <option value="சூ + செ">சூ + செ</option>
              <option value="செவ்வாய் குற்றம்">செவ்வாய் குற்றம்</option>
              <option value="செவ்வாய் குற்றம் அற்றது">
                செவ்வாய் குற்றம் அற்றது
              </option>
            </select>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-[24px] justify-between">
            {filterData.map((member, index) => (
              <MemberCard
                key={index}
                img={member.img}
                id={member.id}
                sex={member.sex}
                chartImg={`http://localhost:5000/uploads/${member.image}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
