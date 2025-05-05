import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Log form data
      console.log("Form Data Submitted:", formData);

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="py-[64px] lg:px-[24px] px-[16px] bg-black">
      <div className="container mx-auto  ">
        <div className="flex flex-col gap-[48px]">
          <div className="flex justify-between w-full text-white bg-[#000035]">
            <div className="w-1/2 rounded flex items-center justify-center">
              <img
                src="https://pradakshinaa.wordpress.com/wp-content/uploads/2021/03/sj-21.jpg?w=899"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border border-black rounded w-1/2 p-12">
              <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-black"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-black"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-black"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="w-1/2">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-black"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-black min-h-[200px]"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-[#FFDA07] text-black font-bold w-full py-4 text-[18px] rounded"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-between items-center text-[#FFDA07]">
            <div className="flex gap-[8px] items-center text-[20px] underline">
              <BsWhatsapp />
              <p>+41788240315</p>
            </div>
            <div className="flex gap-[8px] items-center text-[20px] underline">
              <FaFacebook />
              <p>அகில உலக ஐயர் வீட்டு கல்யாண இலவச திருமண சேவை</p>
            </div>
            <div className="flex gap-[8px] items-center text-[20px] underline">
              <FiPhoneCall />
              <p>0041788240315</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
