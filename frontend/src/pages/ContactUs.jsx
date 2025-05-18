import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8000/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.status === 200) {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          setSubmitted(true);
        } else {
          const result = await response.json();
          console.error("Error submitting form1:", result.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="md:py-[64px] py-[32px] lg:px-[24px] px-[16px] bg-black">
      <div className="container mx-auto  ">
        <div className="flex flex-col gap-[48px]">
          <div className="flex lg:flex-row flex-col justify-between lg:w-full text-white bg-[#000035]">
            <div className="lg:w-1/2 rounded flex items-center justify-center">
              <img
                src="https://pradakshinaa.wordpress.com/wp-content/uploads/2021/03/sj-21.jpg?w=899"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border border-black rounded lg:w-1/2 md:p-12 p-4">
              <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
              <form onSubmit={handleSubmit} className="md:space-y-12 space-y-4">
                <div className="flex md:flex-row flex-col gap-4">
                  <div className="md:w-1/2 w-full">
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
                  <div className="md:w-1/2 w-full">
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

                <div className="flex md:flex-row flex-col gap-4">
                  <div className="md:w-1/2 w-full">
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
                  <div className="md:w-1/2 w-full">
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
                  {!loading && <>{submitted ? "Submitted" : "Send Message"}</>}
                  {loading && !submitted && (
                    <span className="ml-2">Sending</span>
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-[12px] md:items-center text-start text-[#FFDA07]">
            <Link
              className="flex gap-[8px] items-center md:text-[20px] text-[14px] underline"
              to="https://wa.me/41788240315"
            >
              <FaFacebook />
              <p>திருமண சேவை</p>
            </Link>
            <Link
              className="flex gap-[8px] items-center md:text-[20px] text-[14px] underline"
              to="https://wa.me/41788240315"
            >
              <BsWhatsapp />
              <p>+41788240315</p>
            </Link>
            <Link className="flex gap-[8px] items-center md:text-[20px] text-[14px] underline">
              <MdMarkEmailUnread />
              <p>iyarweddingmatrimony@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
