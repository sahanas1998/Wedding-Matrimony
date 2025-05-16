import React, { useState, useRef } from "react";

function AddImage() {
  const [formData, setFormData] = useState({
    image: null,
  });

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.image) newErrors.image = "Image is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted with Data:");
      console.log({
        ...formData,
        image: formData.image ? formData.image.name : null,
      });

      setFormData({
        image: null,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:gap-[18px] gap-[12px] text-black">
          <h3 className="md:text-[28px] text-[20px] font-bold text-center">
            Add Image
          </h3>

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

export default AddImage
