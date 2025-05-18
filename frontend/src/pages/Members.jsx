import React, { useState, useEffect } from "react";
import MemberCard from "../components/MemberCard";
import { getCharts } from "../services/api";

function Members() {
  const [charts, setCharts] = useState([]);
  const [selectChart, setSelectChart] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

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

  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filterData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="py-[80px] lg:px-[24px] px-[16px] bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-end justify-end">
            <select
              className="border bg-black text-white md:w-fit w-full border-gray-300 p-2 rounded"
              value={selectChart}
              onChange={(e) => {
                setSelectChart(e.target.value);
                setCurrentPage(1); // Reset to page 1 on filter change
              }}
            >
              <option value="">All</option>
              <option value="சூ + செ">சூ + செ</option>
              <option value="செவ்வாய் குற்றம்">செவ்வாய் குற்றம்</option>
              <option value="செவ்வாய் குற்றம் அற்றது">
                செவ்வாய் குற்றம் அற்றது
              </option>
            </select>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-[24px]">
            {currentData.map((member, index) => (
              <MemberCard
                key={index}
                img={member.img}
                id={member.id}
                sex={member.sex}
                chartImg={`http://localhost:5000/uploads/${member.image}`}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageClick(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-[#AA0000] text-white font-semibold"
                      : "bg-white text-black font-semibold hover:bg-gray-600"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Members;
