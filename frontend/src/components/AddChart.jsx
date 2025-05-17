import React, { useState, useRef } from "react";
import { createChart } from "../services/api";

function AddChart({onClose}) {
  const [formData, setFormData] = useState({
    id: "",
    sex: "",
    religion: "",
    caste: "",
    chartData: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.id.trim()) newErrors.id = "ID is required";
    if (!formData.sex) newErrors.sex = "Sex is required";
    if (!formData.religion) newErrors.religion = "Religion is required";
    if (!formData.caste) newErrors.caste = "Caste is required";
    if (!formData.chartData) newErrors.chartData = "Chart Data is required";
    if (!formData.image) newErrors.image = "Image is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateForm();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    try {
      // Prepare data for backend
      const chartData = new FormData();
      chartData.append("id", formData.id);
      chartData.append("sex", formData.sex);
      chartData.append("religion", formData.religion);
      chartData.append("caste", formData.caste);
      chartData.append("chartData", formData.chartData);
      if (formData.image) {
        chartData.append("image", formData.image);
      }

      const response = await createChart(chartData);
      console.log("Chart created successfully:", response.data);
      onClose(); // Close form on success
    } catch (error) {
      console.error("Error creating chart:", error);
      alert("Something went wrong while submitting the form.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:gap-[18px] gap-[12px] text-black">
          <h3 className="md:text-[28px] text-[20px] font-bold text-center">
            Add New Chart
          </h3>

          {/* ID */}
          <div className="flex flex-col md:gap-[10px] gap-[8px]">
            <label className="md:text-[20px] text-[14px] font-semibold">
              ID
            </label>
            <input
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="border rounded border-black md:py-4 py-1"
            />
            {errors.id && <p className="text-red-600 text-sm">{errors.id}</p>}
          </div>

          {/* Sex */}
          <div className="flex flex-col md:gap-[10px] gap-[8px]">
            <label className="md:text-[20px] text-[14px] font-semibold">
              Sex
            </label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className="border rounded border-black md:py-4 py-1"
            >
              <option value="">Select</option>
              <option>ஆண்</option>
              <option>பெண்</option>
            </select>
            {errors.sex && <p className="text-red-600 text-sm">{errors.sex}</p>}
          </div>

          {/* Religion */}
          <div className="flex flex-col md:gap-[10px] gap-[8px]">
            <label className="md:text-[20px] text-[14px] font-semibold">
              Religion
            </label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="border rounded border-black md:py-4 py-1"
            >
              <option value="">Select</option>
              <option>இந்து</option>
              <option>வேறு</option>
            </select>
            {errors.religion && (
              <p className="text-red-600 text-sm">{errors.religion}</p>
            )}
          </div>

          {/* Caste */}
          <div className="flex flex-col md:gap-[10px] gap-[8px]">
            <label className="md:text-[20px] text-[14px] font-semibold">
              Caste
            </label>
            <select
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              className="border rounded border-black md:py-4 py-1"
            >
              <option value="">Select</option>
              <option>பிராமணர்</option>
              <option>குருக்கள்</option>
              <option>வேளாளர் சைவம்</option>
              <option>வீரசைவம்</option>
              <option>வேறு</option>
            </select>
            {errors.caste && (
              <p className="text-red-600 text-sm">{errors.caste}</p>
            )}
          </div>

          {/* Chart Data */}
          <div className="flex flex-col md:gap-[10px] gap-[8px]">
            <label className="md:text-[20px] text-[14px] font-semibold">
              Chart Data
            </label>
            <select
              name="chartData"
              value={formData.chartData}
              onChange={handleChange}
              className="border rounded border-black md:py-4 py-1"
            >
              <option value="">Select</option>
              <option>சூ + செ</option>
              <option>செவ்வாய் குற்றம்</option>
              <option>செவ்வாய் குற்றம் அற்றது</option>
            </select>
            {errors.chartData && (
              <p className="text-red-600 text-sm">{errors.chartData}</p>
            )}
          </div>

          {/* Upload Image */}
          <div className="flex flex-col md:gap-[10px] gap-[4px]">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <button
              type="button"
              className="w-full bg-black text-white md:py-4 py-2 rounded font-bold md:text-[20px] text-[14px]"
              onClick={triggerFileInput}
            >
              Upload Image
            </button>
            {formData.image && (
              <p className="text-green-600 text-sm">
                Image selected: {formData.image.name}
              </p>
            )}
            {errors.image && (
              <p className="text-red-600 text-sm">{errors.image}</p>
            )}
          </div>

          {/* Submit Button */}
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

export default AddChart;
