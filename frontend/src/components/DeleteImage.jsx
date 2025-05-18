import React, { useState } from "react";
import { deleteChart } from "../services/api";

function DeleteImage({ onClose }) {
  const [chartId, setChartId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the API with the chart ID
      const response = await deleteChart(chartId);
      console.log("Chart deleted successfully:", response.data);
      onClose(); // Close form on success
    } catch (error) {
      console.error("Error deleting chart:", error);
      alert("Something went wrong while deleting the chart.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:gap-[18px] gap-[12px] text-black">
          <h3 className="md:text-[28px] text-[20px] font-bold text-center">
            Delete the Chart Data
          </h3>

          <input
            type="text"
            placeholder="Enter Chart ID"
            value={chartId}
            onChange={(e) => setChartId(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="w-full bg-[#FF5500] text-black md:py-4 py-2 rounded font-bold md:text-[20px] text-[14px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteImage;
