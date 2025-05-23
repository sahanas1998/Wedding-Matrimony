import React, { useState } from "react";
import { HomeImg } from "../constants/Data";
import AddChart from "../components/AddChart"; // Make sure the path is correct
import AddImage from "../components/AddImage";
import DeleteImage from "../components/DeleteImage";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showAddChartModal, setShowAddChartModal] = useState(false);
  const [showDeleteModel , setShowDeleteModel] = useState(false);
  const [showAddImage, setShowAddImage] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      setIsLoggedIn(true);
      setShowLoginModal(false);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {/* Login Modal */}
      {showLoginModal && !isLoggedIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                className="border p-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Admin Panel */}
      {isLoggedIn && (
        <div className="py-[40px] lg:px-0 md:px-[24px] px-[16px] bg-black text-white relative">
          <div className="container mx-auto">
            <div className="flex flex-col gap-[24px]">
              <div className="text-[24px] font-semibold">
                Welcome to the Admin Panel!
              </div>
              <div className="flex items-center justify-center bg-black">
                <img src={HomeImg} alt="" className="h-[400px] w-fit" />
              </div>
              <div className="flex flex-col gap-[24px]">
                <button
                  onClick={() => setShowAddChartModal(true)}
                  className="bg-[#FFDA07] text-black py-[12px] font-bold"
                >
                  Add Chart
                </button>
                <button
                  onClick={() => setShowDeleteModel(true)}
                  className="bg-[#AA0000] text-black py-[12px] font-bold"
                >
                  Delete Chart
                </button>
                <button
                  className=" bg-[#036200] text-white py-[12px] font-bold"
                  onClick={() => setShowAddImage(true)}
                >
                  Add Successful Image
                </button>
              </div>
            </div>
          </div>

          {/* AddChart Modal */}
          {showAddChartModal && (
            <div className="absolute top-0 left-0 w-full bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-auto mt-10 mb-10">
                <button
                  onClick={() => setShowAddChartModal(false)}
                  className="text-black font-bold text-right text-[24px] w-full mb-4"
                >
                  ✕
                </button>
                <AddChart onClose={() => setShowAddChartModal(false)} />
              </div>
            </div>
          )}

          {/* AddImage Modal */}
          {showAddImage && (
            <div className="absolute top-0 left-0 w-full bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-auto mt-10 mb-10">
                <button
                  onClick={() => setShowAddImage(false)}
                  className="text-black font-bold text-right text-[24px] w-full mb-4"
                >
                  ✕
                </button>
                <AddImage onClose={() => setShowAddImage(false)} />
              </div>
            </div>
          )}

          {/* Delete Chart Modal */}
          {showDeleteModel && (
            <div className="absolute top-0 left-0 w-full bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-auto mt-10 mb-10">
                <button
                  onClick={() => setShowDeleteModel(false)}
                  className="text-black font-bold text-right text-[24px] w-full mb-4"
                >
                  ✕
                </button>
                <DeleteImage onClose={() => setShowDeleteModel(false)} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Admin;
