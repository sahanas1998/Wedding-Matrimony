import React, { useState, useEffect, useRef } from "react";
import { getCharts } from "../services/api";
import MemberCard from "../components/MemberCard";
import { HomeImg } from "../constants/Data";

function Landing() {
  const [charts, setCharts] = useState([]);
  const [filteredCharts, setFilteredCharts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showIdSearch, setShowIdSearch] = useState(false);
  const [searchId, setSearchId] = useState("");
  const resultsRef = useRef(null);

  const [filters, setFilters] = useState({
    sex: "",
    religion: "",
    caste: "",
    chartData: "",
  });

  useEffect(() => {
    const fetchCharts = async () => {
      try {
        const response = await getCharts();
        setCharts(response.data);
        setFilteredCharts(response.data);
      } catch (error) {
        console.error("Error fetching charts:", error);
      }
    };

    fetchCharts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const results = charts.filter((chart) => {
      const { sex, religion, caste, chartData } = filters;

      return (
        (!sex || chart.sex === sex) &&
        (!religion || chart.religion === religion) &&
        (!caste || chart.caste === caste) &&
        (!chartData || chart.chartData === chartData)
      );
    });

    setFilteredCharts(results);
    setHasSearched(true);
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleIdSearch = (e) => {
    e.preventDefault();
    const match = charts.find((chart) => String(chart.id) === String(searchId));
    console.log("AAA", match);
    setFilteredCharts(match ? [match] : []);
    setHasSearched(true);
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative md:h-[650px] h-full">
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

        {/* Form */}
        <div className="relative z-10 flex justify-center items-center h-full p-4">
          <div className="border border-white flex flex-col gap-[24px] lg:p-12 p-0 rounded-lg w-full">
            <form
              onSubmit={handleSearch}
              className=" lg:text-[20px] text-[14px] flex lg:flex-row flex-col justify-center md:gap-[6px] gap-0 items-center"
            >
              {/* Gender */}
              <div className="flex flex-col md:gap-[12px] w-full md:px-2 px-4 py-2">
                <label className="font-semibold text-white">Gender</label>
                <select
                  value={filters.sex}
                  onChange={(e) =>
                    setFilters({ ...filters, sex: e.target.value })
                  }
                  className="border border-gray-300 p-2 rounded text-black"
                >
                  <option value=""></option>
                  <option>ஆண்</option>
                  <option>பெண்</option>
                </select>
              </div>
              {/* Religion */}
              <div className="flex flex-col md:gap-[12px] w-full md:px-2 px-4 py-2">
                <label className="font-semibold text-white">Religion</label>
                <select
                  value={filters.religion}
                  onChange={(e) =>
                    setFilters({ ...filters, religion: e.target.value })
                  }
                  className="border border-gray-300 p-2 rounded text-black"
                >
                  <option value=""></option>
                  <option>இந்து</option>
                  <option>வேறு</option>
                </select>
              </div>

              {/* Caste */}
              <div className="flex flex-col md:gap-[12px] w-full md:px-2 px-4 py-2">
                <label className="font-semibold text-white">Caste</label>
                <select
                  value={filters.caste}
                  onChange={(e) =>
                    setFilters({ ...filters, caste: e.target.value })
                  }
                  className="border border-gray-300 p-2 rounded text-black"
                >
                  <option value=""></option>
                  <option>பிராமணர்</option>
                  <option>குருக்கள்</option>
                  <option>வேளாளர் சைவம்</option>
                  <option>வீரசைவம்</option>
                  <option>வேறு</option>
                </select>
              </div>

              {/* Chart */}
              <div className="flex flex-col md:gap-[12px] w-full md:px-2 px-4 py-2">
                <label className="font-semibold text-white">Chart</label>
                <select
                  value={filters.chartData}
                  onChange={(e) =>
                    setFilters({ ...filters, chartData: e.target.value })
                  }
                  className="border border-gray-300 p-2 rounded text-black"
                >
                  <option value=""></option>
                  <option>அனைத்தும்</option>
                  <option>சூ + செ</option>
                  <option>செவ்வாய் குற்றம்</option>
                  <option>செவ்வாய் குற்றம் அற்றது</option>
                </select>
              </div>

              {/* Submit */}
              <div className="flex flex-col md:gap-[18px] w-full md:px-2 px-4 py-2">
                <label className="font-semibold text-black">.</label>
                <button
                  type="submit"
                  className="bg-[#036200] font-bold text-white py-2 px-8 rounded"
                >
                  Search
                </button>
              </div>
            </form>
            <div className=" flex items-center justify-center">
              <h3
                className="tet-[48px] underline text-white font-semibold font-mono cursor-pointer"
                onClick={() => setShowIdSearch(!showIdSearch)}
              >
                Search By ID
              </h3>
            </div>
            {showIdSearch && (
              <form
                onSubmit={handleIdSearch}
                className="flex flex-wrap items-center justify-center mt-6"
              >
                <div className="flex flex-col md:gap-[12px] md:px-2 px-4 py-2">
                  <label className="font-semibold text-white">ID</label>
                  <input
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    className="font-bold text-black py-2 px-4 rounded w-[300px]"
                    placeholder="Enter ID"
                  />
                </div>
                <div className="flex flex-col md:gap-[18px] md:px-2 px-4 py-2">
                  <label className="font-semibold text-black">.</label>
                  <button
                    type="submit"
                    className="bg-[#FFDA07] font-bold text-black w-[300px] py-2 px-4 rounded"
                  >
                    Search By ID
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Charts Display */}
      <div className="py-12 px-6 bg-black">
        <div className="flex flex-col gap-[12px]">
          <div className="flex items-center justify-center">
            <img src={HomeImg} alt="HomeImg" className="" />
          </div>
          {hasSearched ? (
            filteredCharts.length > 0 ? (
              <div className="container mx-auto" ref={resultsRef}>
                <div className="flex flex-col gap-[24px]">
                  <h3 className="lg:text-[40px] md:text-[32px] text-[20px] font-bold text-[#FFDA07]">
                    பொருத்தமான மணமக்கள்
                  </h3>
                  <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-[24px]">
                    {filteredCharts.map((item) => (
                      <MemberCard
                        key={item.id}
                        id={item.id}
                        sex={item.sex}
                        chartImg={`http://localhost:5000/uploads/${item.image}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-8">
                No matching ID found.
              </p>
            )
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Landing;
