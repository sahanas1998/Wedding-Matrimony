import React, { useState, useRef } from "react";

function AddChart() {
  const [formData, setFormData] = useState({
    id: "",
    sex: "",
    age: "",
    religion: "",
    caste:"",
    chartData: "",
    image: null,
  });

  const fileInputRef = useRef(null);

  // For error handling if needed
  const [errors, setErrors] = useState({});

  // Handle input and select changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  // Trigger hidden file input
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to console
    console.log("Form Submitted with Data:");
    console.log({
      ...formData,
      image: formData.image ? formData.image.name : null, // Display only name in console
    });

    // Optional: Add validation logic if required
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

          {/* Chart Data */}
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
